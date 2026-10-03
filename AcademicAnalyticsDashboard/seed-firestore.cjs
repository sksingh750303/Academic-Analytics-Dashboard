// seed-firestore.cjs
// ---------------------------------------------------------------------------
// One-time script to populate a fresh Firestore project with the same
// realistic demo data the standalone dashboard generates in-browser
// (42 faculty, 24 sections, 68 courses, 1,240 students, 18 rooms, a
// conflict-free weekly timetable) so your real backend doesn't start empty.
//
// Setup:
//   1. npm install                 (installs firebase-admin)
//   2. Firebase Console -> Project Settings -> Service accounts
//      -> "Generate new private key" -> save as serviceAccountKey.json
//      in this folder (keep it out of git!)
//   3. node seed-firestore.cjs
// ---------------------------------------------------------------------------
const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

const keyPath = path.join(__dirname, 'serviceAccountKey.json');
if (!fs.existsSync(keyPath)) {
  console.error('Missing serviceAccountKey.json — see the setup steps at the top of this file.');
  process.exit(1);
}

admin.initializeApp({ credential: admin.credential.cert(require(keyPath)) });
const db = admin.firestore();

const { SECTIONS, COURSES, FACULTY, ROOMS, TT, STUDENTS, SYL, PROGRAMS, DEPARTMENTS } = require('./data.js');

async function seedCollection(name, docs, idField) {
  const BATCH = 400; // stay under Firestore's 500-write batch limit
  for (let i = 0; i < docs.length; i += BATCH) {
    const batch = db.batch();
    docs.slice(i, i + BATCH).forEach(d => {
      const id = String(d[idField]);
      batch.set(db.collection(name).doc(id), d);
    });
    await batch.commit();
    console.log(`  ${name}: ${Math.min(i + BATCH, docs.length)}/${docs.length}`);
  }
}

async function main() {
  console.log('Seeding Firestore…');
  await seedCollection('departments', DEPARTMENTS, 'id');
  await seedCollection('programs', PROGRAMS, 'id');
  await seedCollection('sections', SECTIONS, 'id');
  await seedCollection('courses', COURSES, 'code');
  await seedCollection('faculty', FACULTY, 'id');
  await seedCollection('rooms', ROOMS, 'id');
  await seedCollection('timetable', TT, 'id');
  await seedCollection('students', STUDENTS.map(s => ({ ...s, subj: null })), 'id');
  await seedCollection('syllabus', Object.keys(SYL).map(k => SYL[k]), 'code');
  await db.collection('settings').doc('thresholds').set({ normalMax: 15, highMax: 20, workingDays: 6, autoApprove: false });
  console.log('Done. Next: sign up in the app (creates a Viewer account), then in the');
  console.log('Firestore Console open users/{your-uid} and change "role" to "Super Admin".');
}
main().catch(e => { console.error(e); process.exit(1); });
