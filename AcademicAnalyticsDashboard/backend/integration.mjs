// integration.mjs — wires Firebase Auth + Firestore + Supabase Storage
// into the classic-script dashboard (app_bundle.js) via window.Backend
// and the window.CSEApp.boot()/onAuthed()/onSignedOut()/hydrate() hooks
// that app_bundle.js exposes.
import {
  auth, db, FIREBASE_CONFIGURED,
  onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile,
  collection, doc, setDoc, addDoc, updateDoc, deleteDoc, onSnapshot, getDoc, getDocs, serverTimestamp, writeBatch
} from "./firebase-init.mjs";
import { SUPABASE_CONFIGURED } from "./supabase-init.mjs";
import * as Storage from "./storage.mjs";

window.__cseIntegrationLoaded = true;

const VALID_ROLES = ["Super Admin","HOD","Department Coordinator","Faculty","Data Entry Operator","Viewer"];

// ---- Firestore <-> local-array collection map -----------------------------
// Each entry: Firestore collection name -> the global array name used by
// app_bundle.js (PROGRAMS, SECTIONS, COURSES, FACULTY, STUDENTS, ROOMS, TT, SYL)
const COLLECTIONS = [
  { name: "departments", global: "DEPARTMENTS", idField: "id" },
  { name: "programs",   global: "PROGRAMS", idField: "id" },
  { name: "sections",   global: "SECTIONS", idField: "id" },
  { name: "courses",    global: "COURSES",  idField: "code" },
  { name: "faculty",    global: "FACULTY",  idField: "id" },
  { name: "students",   global: "STUDENTS", idField: "id" },
  { name: "rooms",      global: "ROOMS",    idField: "id" },
  { name: "timetable",  global: "TT",       idField: "id" },
  { name: "attendance", global: "ATTENDANCE", idField: "id" },
];
let unsubs = [];

function hydrateArray(globalName, docs){
  if (window.CSEApp && window.CSEApp.hydrate) window.CSEApp.hydrate(globalName, docs);
}
function hydrateSyllabus(docsById){
  if (window.CSEApp && window.CSEApp.hydrateSyllabus) window.CSEApp.hydrateSyllabus(docsById);
}

function startLiveSync(){
  stopLiveSync();
  COLLECTIONS.forEach(c => {
    const unsub = onSnapshot(collection(db, c.name), snap => {
      const docs = snap.docs.map(d => d.data());
      hydrateArray(c.global, docs);
    }, err => console.error("[Firestore sync]", c.name, err));
    unsubs.push(unsub);
  });
  const unsubSyl = onSnapshot(collection(db, "syllabus"), snap => {
    const byId = {};
    snap.docs.forEach(d => { byId[d.id] = d.data(); });
    hydrateSyllabus(byId);
  }, err => console.error("[Firestore sync] syllabus", err));
  unsubs.push(unsubSyl);
}
function stopLiveSync(){ unsubs.forEach(u => u()); unsubs = []; }

// ---- Backend API exposed to the classic-script app -------------------------
const Backend = {
  firebaseConfigured: FIREBASE_CONFIGURED,
  supabaseConfigured: SUPABASE_CONFIGURED,

  async signIn(email, password){
    const cred = await signInWithEmailAndPassword(auth, email, password);
    return cred.user;
  },

  async signUp({email, password, name, role, facultyId, deptId}){
    if (!VALID_ROLES.includes(role)) throw new Error("Invalid role");
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName: name });
    await setDoc(doc(db, "users", cred.user.uid), {
      uid: cred.user.uid, email, name, role, facultyId: facultyId || null, deptId: deptId || null, createdAt: serverTimestamp()
    });
    return cred.user;
  },

  async signOutUser(){ await signOut(auth); },

  async logActivity({user, action, module, rec, old, nw}){
    try { await addDoc(collection(db, "activities"), { user, action, module, rec, old: old||"—", nw: nw||"—", at: serverTimestamp() }); }
    catch(e){ console.error("[activity log]", e); }
  },

  async addDepartment(d){ await setDoc(doc(db, "departments", d.id), d); },
  async updateDepartment(id, patch){ await updateDoc(doc(db, "departments", id), patch); },
  async deleteDepartment(deptId){
    // Cascade-delete everything tagged with this department. The local app
    // already removed these from its in-memory arrays before calling this;
    // this mirrors that cleanup in Firestore. Collections without a direct
    // `dept` field (sections/courses/timetable/syllabus) are resolved via
    // the programs that belong to this department. Deletes are chunked at
    // 400 per batch — a department can outgrow Firestore's 500-write limit
    // (the seeded CSE department alone has 1,240+ student records).
    const progSnap = await getDocs(collection(db, "programs"));
    const deptProgramIds = progSnap.docs.filter(d => d.data().dept === deptId).map(d => d.id);

    const [secSnap, courseSnap, facSnap, roomSnap, stuSnap, ttSnap] = await Promise.all([
      getDocs(collection(db, "sections")), getDocs(collection(db, "courses")),
      getDocs(collection(db, "faculty")), getDocs(collection(db, "rooms")),
      getDocs(collection(db, "students")), getDocs(collection(db, "timetable")),
    ]);
    const deptSectionIds = secSnap.docs.filter(d => deptProgramIds.includes(d.data().programId)).map(d => d.id);
    const deptCourseCodes = courseSnap.docs.filter(d => deptProgramIds.includes(d.data().programId)).map(d => d.id);

    const refsToDelete = [
      ...progSnap.docs.filter(d => d.data().dept === deptId).map(d => d.ref),
      ...secSnap.docs.filter(d => deptSectionIds.includes(d.id)).map(d => d.ref),
      ...courseSnap.docs.filter(d => deptCourseCodes.includes(d.id)).map(d => d.ref),
      ...facSnap.docs.filter(d => d.data().dept === deptId).map(d => d.ref),
      ...roomSnap.docs.filter(d => d.data().dept === deptId).map(d => d.ref),
      ...stuSnap.docs.filter(d => d.data().dept === deptId).map(d => d.ref),
      ...ttSnap.docs.filter(d => deptSectionIds.includes(d.data().sectionId)).map(d => d.ref),
      ...deptCourseCodes.map(code => doc(db, "syllabus", code)),
      doc(db, "departments", deptId),
    ];
    for (let i = 0; i < refsToDelete.length; i += 400) {
      const batch = writeBatch(db);
      refsToDelete.slice(i, i + 400).forEach(ref => batch.delete(ref));
      await batch.commit();
    }
  },
  async addSection(s){ await setDoc(doc(db, "sections", s.id), s); },
  async addProgram(p){ await setDoc(doc(db, "programs", p.id), p); },
  async addCourse(c){ await setDoc(doc(db, "courses", c.code), c);
    await setDoc(doc(db, "syllabus", c.code), { code:c.code, academicYear:p_ay(), units:[{n:1,title:"Foundations",planned:8,done:0}], updated:new Date().toISOString().slice(0,10) }); },
  async addRoom(r){ await setDoc(doc(db, "rooms", r.id), r); },
  async addStudent(s){ await setDoc(doc(db, "students", s.id), s); },
  async updateStudent(id, patch){ await updateDoc(doc(db, "students", id), patch); },
  async addFaculty(f){ await setDoc(doc(db, "faculty", f.id), f); },
  async assignFaculty(code, facultyId){ await updateDoc(doc(db, "courses", code), { facultyId }); },
  async addTTEntry(entry){ await setDoc(doc(db, "timetable", entry.id), entry); },
  async removeTTEntry(id){ await deleteDoc(doc(db, "timetable", id)); },
  async setSectionStrength(sectionId, strength){ await updateDoc(doc(db, "sections", sectionId), { strength }); },

  // Attendance — deterministic doc IDs (see data.js attendanceId()) mean this
  // is always a create-or-overwrite for that exact (section, course, period,
  // date, student) combination, so repeated saves of the same session never
  // create duplicates. Chunked at 400 writes/batch (Firestore's limit is 500).
  async saveAttendanceBatch(records){
    for (let i = 0; i < records.length; i += 400) {
      const batch = writeBatch(db);
      records.slice(i, i + 400).forEach(rec => batch.set(doc(db, "attendance", rec.id), rec));
      await batch.commit();
    }
  },
  async deleteAttendanceRecord(id){ await deleteDoc(doc(db, "attendance", id)); },

  async setThreshold(key, value){ await setDoc(doc(db, "settings", "thresholds"), { [key]: value }, { merge: true }); },

  // Supabase Storage passthrough
  uploadStudentDocument: Storage.uploadStudentDocument,
  listStudentDocuments: Storage.listStudentDocuments,
  getSignedUrl: Storage.getSignedUrl,
  deleteDocument: Storage.deleteDocument,
  uploadERPFile: Storage.uploadERPFile,
  uploadReportExport: Storage.uploadReportExport,
};
function p_ay(){ return (window.State && window.State.filters && window.State.filters.ay) || "2026-27"; }

window.Backend = Backend;

// ---- Boot sequence ----------------------------------------------------------
if (!FIREBASE_CONFIGURED){
  // No Firebase project configured yet: run exactly like the standalone demo.
  window.CSEApp && window.CSEApp.boot("demo");
} else {
  window.CSEApp && window.CSEApp.boot("auth");
  onAuthStateChanged(auth, async (user) => {
    if (user){
      let profile = null;
      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        profile = snap.exists() ? snap.data() : { uid:user.uid, email:user.email, name:user.displayName||user.email, role:"Viewer" };
      } catch(e){
        console.error("[auth] could not load user profile", e);
        profile = { uid:user.uid, email:user.email, name:user.displayName||user.email, role:"Viewer" };
      }
      startLiveSync();
      window.CSEApp && window.CSEApp.onAuthed(profile);
    } else {
      stopLiveSync();
      window.CSEApp && window.CSEApp.onSignedOut();
    }
  });
}
