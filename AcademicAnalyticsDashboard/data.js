'use strict';
/* =====================================================================
   DEMO DATA  (DEMO = true)
   Everything below is generated locally so the UI can be built first.
   Replace each generator with Firestore reads when connecting the backend.
   ===================================================================== */
const DEMO = true;
const APP_YEAR = '2026-27';

function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
let _r = mulberry32(20260928);
const rnd = () => _r();
const ri = (a,b) => a + Math.floor(rnd()*(b-a+1));
const pick = a => a[Math.floor(rnd()*a.length)];
const wpick = pairs => { const t = pairs.reduce((s,p)=>s+p[1],0); let x = rnd()*t; for (const [v,w] of pairs){ if ((x-=w) < 0) return v; } return pairs[0][0]; };
const shuffle = a => { a = a.slice(); for (let i=a.length-1;i>0;i--){ const j=Math.floor(rnd()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };
const pad = (n,l) => String(n).padStart(l,'0');
function hash(s){ let h=2166136261; for(let i=0;i<s.length;i++){ h^=s.charCodeAt(i); h=Math.imul(h,16777619); } return h>>>0; }
const hrand = s => hash(s)/4294967296;
const clamp = (v,a,b) => Math.max(a,Math.min(b,v));

const DAYS = ['Mon','Tue','Wed','Thu','Fri','Sat'];
const DAY_FULL = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const PERIODS = [
  {n:'P1',t:'09:00–09:50'},{n:'P2',t:'09:50–10:40'},{n:'P3',t:'10:40–11:30'},
  {n:'P4',t:'11:30–12:20'},{n:'P5',t:'13:10–14:00'},{n:'P6',t:'14:00–14:50'}
];
const NP = PERIODS.length, ND = DAYS.length, SLOTS = NP*ND;
const LAB_STARTS = [0,1,2,4]; // two-period blocks that do not cross the lunch break

/* ---------- Departments ---------- */
const DEPARTMENTS = [
  {id:'CSE', name:'Computer Science & Engineering', short:'CSE', hod:'Dr. Rajesh Sharma', status:'Active', createdAt:'2018-07-01'}
];

/* ---------- Programs & sections ---------- */
const PROGRAMS = [
  {id:'BTECH', name:'B.Tech CSE', short:'B.Tech CSE', degree:'Bachelor of Technology', dept:'CSE', duration:'4 years', intake:480, status:'Active'},
  {id:'BCA',   name:'BCA', short:'BCA', degree:'Bachelor of Computer Applications', dept:'CSE', duration:'3 years', intake:300, status:'Active'},
  {id:'AIML',  name:'B.Tech CSE (AI & ML)', short:'AIML', degree:'Bachelor of Technology', dept:'CSE', duration:'4 years', intake:240, status:'Active'},
  {id:'MCA',   name:'MCA', short:'MCA', degree:'Master of Computer Applications', dept:'CSE', duration:'2 years', intake:180, status:'Active'}
];
const PREFIX = {BTECH:'CS', BCA:'BC', AIML:'AI', MCA:'MC'};
const ERP_PREFIX = {BTECH:'CSE', BCA:'BCA', AIML:'AIM', MCA:'MCA'};
const UNI_CODE = {BTECH:'271', BCA:'272', AIML:'273', MCA:'274'};
const SEC_PLAN = {
  BTECH:{3:'ABC',5:'ABC',7:'AB'}, BCA:{1:'AB',3:'AB',5:'A'},
  AIML:{1:'AB',3:'AB',5:'A'},     MCA:{1:'ABC',3:'ABC'}
};
const STUDENT_TARGET = {BTECH:500, BCA:300, AIML:280, MCA:160};

const SECTIONS = [];
Object.keys(SEC_PLAN).forEach(pid => Object.keys(SEC_PLAN[pid]).forEach(sem =>
  [...SEC_PLAN[pid][sem]].forEach(sec => {
    const p = PROGRAMS.find(x=>x.id===pid);
    SECTIONS.push({id:`${pid}-S${sem}-${sec}`, programId:pid, semester:+sem, name:sec,
      label:`${p.short}, Sem ${sem}, Sec ${sec}`, homeRoom:null, strength:0});
  })));

/* ---------- Courses: [name, theory hrs/week, lab hrs/week] ---------- */
const COURSE_DEFS = {
  BTECH3:[['Data Structures',3,2],['Digital Logic Design',3,0],['Discrete Mathematics',3,0],['Object Oriented Programming',2,2],['Computer Organization',3,0],['Technical Communication',2,0],['Python Programming',2,0]],
  BTECH5:[['Artificial Intelligence',3,0],['Database Management Systems',3,2],['Operating Systems',3,0],['Cloud Computing',2,2],['Computer Networks',3,0],['Software Engineering',2,0],['Theory of Computation',3,0]],
  BTECH7:[['Machine Learning',3,2],['Distributed Systems',3,0],['Information Security',3,0],['Big Data Analytics',3,2],['Professional Ethics',2,0],['Capstone Project',0,4]],
  BCA1:[['Programming in C',3,2],['Computer Fundamentals',3,0],['Mathematics I',3,0],['Digital Electronics',3,0],['Communication Skills',2,0],['Environmental Studies',2,0]],
  BCA3:[['Data Structures',3,2],['Java Programming',3,0],['Database Management Systems',3,2],['Computer Networks',3,0],['Web Design',2,0],['Statistics',3,0]],
  BCA5:[['Python Programming',3,2],['Software Engineering',3,0],['Cyber Security',3,0],['Mobile App Development',2,2],['Data Mining',3,0],['Minor Project',0,2]],
  AIML1:[['Python for AI',3,2],['Linear Algebra',3,0],['Engineering Physics',3,0],['Programming Fundamentals',3,2],['Communication Skills',2,0],['Environmental Science',2,0]],
  AIML3:[['Data Structures',3,2],['Probability & Statistics',3,0],['Machine Learning Foundations',3,2],['Digital Systems',3,0],['Optimization Techniques',3,0],['Data Visualization',2,0]],
  AIML5:[['Deep Learning',3,2],['Natural Language Processing',3,0],['Computer Vision',3,2],['Reinforcement Learning',3,0],['MLOps',2,0],['AI Ethics',2,0]],
  MCA1:[['Advanced DBMS',3,2],['Advanced Algorithms',3,0],['Cloud Infrastructure',3,2],['Research Methodology',3,0],['Advanced Java',3,2],['Software Testing',2,0]],
  MCA3:[['Big Data Technologies',3,2],['Information Retrieval',3,0],['Cyber Forensics',3,0],['Generative AI',3,0],['Seminar',0,2],['Dissertation',0,4]]
};
const UNASSIGNED_SEED = ['CS501','CS504'];
const COURSES = [];
Object.keys(COURSE_DEFS).forEach(key => {
  const m = key.match(/^([A-Z]+)(\d)$/); const pid = m[1], sem = +m[2];
  COURSE_DEFS[key].forEach((d,i) => {
    const T = d[1], L = d[2];
    COURSES.push({code:`${PREFIX[pid]}${sem}${pad(i+1,2)}`, name:d[0], programId:pid, semester:sem,
      credits: T + Math.round(L/2), theory:T, lab:L,
      type: T && L ? 'Theory + Lab' : (L ? 'Lab / Project' : 'Theory'),
      facultyId:null, status:'Active'});
  });
});

/* ---------- Faculty ---------- */
const FAC_NAMES = {
  'Professor':['Dr. Rajesh Sharma','Dr. Sunita Verma','Dr. Anil Gupta','Dr. Meenakshi Iyer','Dr. Vikram Singh'],
  'Associate Professor':['Dr. Pooja Malhotra','Dr. Sandeep Yadav','Dr. Neha Kapoor','Dr. Rohit Mehra','Dr. Anjali Bansal','Dr. Manoj Tiwari','Dr. Kavita Rao','Dr. Deepak Chauhan','Dr. Shalini Arora'],
  'Assistant Professor':['Ms. Priya Nair','Mr. Amit Saxena','Ms. Ritu Sethi','Mr. Karan Bhatia','Ms. Swati Joshi','Mr. Nitin Goel','Ms. Divya Khanna','Mr. Harish Pandey','Ms. Isha Aggarwal','Mr. Gaurav Dahiya','Ms. Nidhi Chopra','Mr. Sumit Rawat','Ms. Ankita Mishra','Mr. Varun Kaushik','Ms. Rekha Sinha','Mr. Tarun Jain','Ms. Bhavna Suri','Mr. Prateek Solanki','Ms. Komal Dixit','Mr. Arjun Bhardwaj','Ms. Sonal Grover','Mr. Yash Tomar','Ms. Aarti Nagpal','Mr. Lokesh Kumar','Ms. Simran Kaur','Mr. Mohit Sagar','Ms. Tanvi Ahuja','Mr. Ravi Shankar']
};
const EXPERTISE = ['Databases','Operating Systems','Computer Networks','Machine Learning','Algorithms','Software Engineering','Cloud Computing','Cyber Security','Web Technologies','Data Science','Compilers','IoT'];
const FACULTY = [];
Object.keys(FAC_NAMES).forEach(des => FAC_NAMES[des].forEach(n => {
  const i = FACULTY.length + 1;
  const parts = n.replace(/^(Dr\.|Mr\.|Ms\.)\s*/,'').split(' ');
  const yr = des==='Professor' ? ri(2003,2012) : des==='Associate Professor' ? ri(2008,2017) : ri(2014,2025);
  FACULTY.push({id:'FAC'+pad(i,3), name:n, designation:des,
    qualification: des==='Assistant Professor' ? pick(['M.Tech (CSE)','M.Tech (IT)','M.E. (CSE)','Ph.D. (pursuing)']) : 'Ph.D. (Computer Science)',
    dept:'CSE', email:`${parts[0].toLowerCase()}.${parts[1].toLowerCase()}@jbkp-demo.example`,
    phone:'+91 9'+pad(ri(0,999999999),9), joinDate:`${yr}-${pad(ri(1,12),2)}-${pad(ri(1,28),2)}`,
    status:'Active', expertise:pick(EXPERTISE)});
}));
FACULTY.find(f=>f.name==='Ms. Tanvi Ahuja').status = 'On Leave';
FACULTY.find(f=>f.name==='Mr. Lokesh Kumar').status = 'Inactive';

/* ---------- Rooms ---------- */
const ROOMS = [];
for (let i=0;i<12;i++) ROOMS.push({id:'R'+(201+i), name:'Room '+(201+i), type:'Classroom', capacity:i<8?60:70, dept:'CSE', status:'Available', desc:''});
['Programming Lab','Networks Lab','Database Lab','AI & ML Lab','Project Lab'].forEach((d,i) =>
  ROOMS.push({id:'LAB'+(i+1), name:'Lab '+(i+1), type:'Laboratory', capacity:i<3?30:36, dept:'CSE', status:'Available', desc:d}));
ROOMS.push({id:'SEM1', name:'Seminar Hall', type:'Seminar Hall', capacity:120, dept:'CSE', status:'Available', desc:''});
const ROOM_TYPES = ['Classroom','Laboratory','Seminar Hall','Workshop','Other'];

/* ---------- Derived course facts ---------- */
const groupSections = c => SECTIONS.filter(s => s.programId===c.programId && s.semester===c.semester);
COURSES.forEach(c => { c.weekly = groupSections(c).length * (c.theory + c.lab); });
const courseSectionsLabel = c => groupSections(c).map(s=>s.name).join(', ');

/* ---------- Faculty assignment (planned so demo shows every workload band) ---------- */
(function assign(){
  const load = {}; FACULTY.forEach(f => load[f.id] = 0);
  let pool = COURSES.filter(c => !UNASSIGNED_SEED.includes(c.code)).sort((a,b)=>b.weekly-a.weekly);
  const take = (fid, min, max) => {
    let guard = 0;
    while (load[fid] < min && guard++ < 8) {
      const c = pool.find(c => load[fid] + c.weekly <= max);
      if (!c) break;
      c.facultyId = fid; load[fid] += c.weekly; pool = pool.filter(x => x !== c);
    }
  };
  ['FAC031','FAC034'].forEach(id => take(id, 21, 26));
  ['FAC012','FAC017','FAC022','FAC026','FAC038','FAC029'].forEach(id => take(id, 17, 20));
  const heavy = new Set(['FAC031','FAC034','FAC012','FAC017','FAC022','FAC026','FAC038','FAC029']);
  const rest = FACULTY.filter(f => f.status==='Active' && !heavy.has(f.id));
  pool.forEach(c => {
    const f = rest.slice().sort((a,b)=>load[a.id]-load[b.id])[0];
    c.facultyId = f.id; load[f.id] += c.weekly;
  });
})();

/* ---------- Timetable scheduler (conflict-free by construction) ---------- */
const slotKey = (d,p) => d*NP + p;
function scheduleAll(){
  const classrooms = ROOMS.filter(r => r.type==='Classroom' || r.type==='Seminar Hall');
  const labs = ROOMS.filter(r => r.type==='Laboratory');
  SECTIONS.forEach((s,i) => { s.homeRoom = ROOMS.filter(r=>r.type==='Classroom')[i % 12].id; });
  for (let attempt=0; attempt<400; attempt++) {
    const fac = {}, room = {}, sec = {}, load = {}, out = [];
    const busy = (m,id,k) => m[id+'|'+k];
    let ok = true;
    const order = shuffle(SECTIONS);
    outer:
    for (const s of order) {
      const cs = COURSES.filter(c => c.programId===s.programId && c.semester===s.semester && c.facultyId);
      const tasks = [];
      cs.forEach(c => {
        for (let b=0; b<c.lab/2; b++) tasks.push({c, kind:'Lab', len:2});
        for (let t=0; t<c.theory; t++) tasks.push({c, kind:'Theory', len:1});
      });
      tasks.sort((a,b) => (b.len-a.len) || (b.c.weekly-a.c.weekly));
      const dayCount = Array(ND).fill(0), courseDay = {};
      for (const t of tasks) {
        let best = null;
        for (let relax=0; relax<2 && !best; relax++) {
          for (let d=0; d<ND; d++) {
            if (dayCount[d] + t.len > 5) continue;
            if (!relax && t.kind==='Theory' && courseDay[t.c.code+d]) continue;
            const starts = t.kind==='Lab' ? LAB_STARTS : [0,1,2,3,4,5];
            for (const p of starts) {
              let free = true;
              for (let q=0;q<t.len;q++){ const k=slotKey(d,p+q); if (busy(sec,s.id,k)||busy(fac,t.c.facultyId,k)) { free=false; break; } }
              if (!free) continue;
              const pool = t.kind==='Lab' ? labs : classrooms;
              const cand = pool.filter(r => { for (let q=0;q<t.len;q++) if (busy(room,r.id,slotKey(d,p+q))) return false; return true; });
              if (!cand.length) continue;
              const rm = cand.find(r=>r.id===s.homeRoom && t.kind==='Theory') || cand[Math.floor(rnd()*cand.length)];
              const lk = (t.kind==='Lab'?'L':'T') + slotKey(d,p);
              const score = (load[lk]||0) + rnd()*0.9 + (t.kind==='Theory' && rm.id!==s.homeRoom ? 0.6 : 0);
              if (!best || score < best.score) best = {d,p,rm,score};
            }
          }
        }
        if (!best) { ok = false; break outer; }
        for (let q=0;q<t.len;q++){
          const k = slotKey(best.d, best.p+q);
          sec[s.id+'|'+k]=1; fac[t.c.facultyId+'|'+k]=1; room[best.rm.id+'|'+k]=1;
          const lk = (t.kind==='Lab'?'L':'T') + k; load[lk] = (load[lk]||0)+1;
          out.push({sectionId:s.id, courseCode:t.c.code, facultyId:t.c.facultyId, roomId:best.rm.id, day:best.d, period:best.p+q, kind:t.kind});
        }
        dayCount[best.d] += t.len; courseDay[t.c.code+best.d] = 1;
      }
    }
    if (ok) {
      out.sort((a,b)=>a.day-b.day||a.period-b.period);
      out.forEach((e,i)=>{ e.id='T'+pad(i+1,4); });
      return out;
    }
  }
  return null;
}
const TT = scheduleAll() || [];

/* ---------- Syllabus ---------- */
const UNIT_TITLES = ['Foundations','Core concepts','Techniques and methods','Advanced topics','Applications and practice'];
const TOPIC_BANK = [
  ['Introduction and terminology','Scope and history','Basic building blocks'],
  ['Models and notation','Formal definitions','Worked examples'],
  ['Design techniques','Implementation patterns','Problem-solving session'],
  ['Advanced concepts','Complexity and trade-offs','Case studies'],
  ['Industry applications','Recent trends','Revision and assessment']
];
const SYL = {};
COURSES.forEach(c => {
  const nU = c.theory ? 5 : 4;
  const r = rnd();
  let p = !c.facultyId ? 0 : r<0.12 ? 0.1+rnd()*0.2 : r<0.30 ? 0.9+rnd()*0.08 : 0.4+rnd()*0.48;
  const units = []; let totalPlanned = 0;
  for (let i=0;i<nU;i++){ const pl = ri(7,11); units.push({n:i+1, title:UNIT_TITLES[i], planned:pl, done:0}); totalPlanned += pl; }
  let left = Math.round(totalPlanned*p);
  units.forEach(u => { const d = Math.min(u.planned,left); u.done = d; left -= d; });
  const days = ri(1,26); const dt = new Date(2026,8,28); dt.setDate(dt.getDate()-days);
  SYL[c.code] = {code:c.code, academicYear:APP_YEAR, units, updated:dt.toISOString().slice(0,10)};
});

/* ---------- Students ---------- */
const M_NAMES = ['Aarav','Vivaan','Aditya','Arjun','Rohan','Kabir','Ishaan','Rahul','Karan','Nikhil','Yash','Harsh','Pranav','Dev','Manish','Siddharth','Ankit','Mayank','Tushar','Lakshay','Shivam','Vishal','Deepak','Naman','Ayush'];
const F_NAMES = ['Ananya','Diya','Isha','Kavya','Meera','Nisha','Pooja','Riya','Saanvi','Tanya','Aditi','Bhavya','Chhavi','Divya','Ekta','Garima','Hina','Jhanvi','Kritika','Muskan','Neha','Palak','Sakshi','Shruti','Simran'];
const SURNAMES = ['Sharma','Verma','Gupta','Singh','Kumar','Yadav','Chauhan','Tiwari','Mishra','Pandey','Jain','Agarwal','Bansal','Malik','Rana','Tomar','Saini','Dahiya','Rawat','Bhardwaj','Kapoor','Mehta','Arora','Khanna','Sethi','Goel','Nagar','Joshi','Sinha','Dubey'];
const CITIES = ['Faridabad','Ballabgarh','Palwal','Gurugram','New Delhi','Noida','Ghaziabad','Sonipat'];
const admYear = (pid, sem) => 2026 - Math.floor((sem-1)/2);
const STUDENTS = [];
(function genStudents(){
  const cohortSeq = {};
  PROGRAMS.forEach(p => {
    const secs = SECTIONS.filter(s => s.programId===p.id);
    const base = Math.floor(STUDENT_TARGET[p.id]/secs.length), extra = STUDENT_TARGET[p.id] - base*secs.length;
    secs.forEach((s,si) => {
      const n = base + (si < extra ? 1 : 0); s.strength = n;
      const ay = admYear(p.id, s.semester), yy = String(ay).slice(2);
      for (let i=0;i<n;i++){
        const ck = p.id + ay; cohortSeq[ck] = (cohortSeq[ck]||0) + 1; const seq = cohortSeq[ck];
        const gender = rnd() < 0.34 ? 'Female' : 'Male';
        const sur = pick(SURNAMES);
        const dobY = ay - (p.id==='MCA' ? 21 : 18) - (rnd()<0.2?1:0);
        const att = clamp(Math.round(78 + (rnd()+rnd()+rnd()-1.5)*22), 48, 99);
        const marks = clamp(Math.round(27 + (rnd()+rnd()+rnd()-1.5)*11), 8, 40);
        const bl = s.semester===1 ? 0 : wpick([[0,86],[1,10],[2,4]]);
        STUDENTS.push({
          id:'ST'+pad(STUDENTS.length+1,4), erpNo:`${yy}${ERP_PREFIX[p.id]}${pad(seq,5)}`, rollNo:`${yy}${UNI_CODE[p.id]}${pad(seq,4)}`,
          name:`${gender==='Female'?pick(F_NAMES):pick(M_NAMES)} ${sur}`, father:`${pick(M_NAMES)} ${sur}`, mother:`${pick(F_NAMES)} ${sur}`,
          programId:p.id, dept:'CSE', semester:s.semester, section:s.name, sectionId:s.id, academicYear:APP_YEAR, admissionYear:ay,
          email:`${yy}${ERP_PREFIX[p.id]}${pad(seq,5)}@students.jbkp-demo.example`.toLowerCase(), mobile:'+91 '+wpick([[9,5],[8,3],[7,2]])+pad(ri(0,99999999),8),
          gender, dob:`${dobY}-${pad(ri(1,12),2)}-${pad(ri(1,28),2)}`,
          address:`H.No ${ri(1,999)}, Sector ${ri(1,88)}, ${pick(CITIES)}`,
          category:wpick([['General',45],['OBC',30],['SC',14],['EWS',8],['ST',3]]),
          admissionType: s.semester>1 ? wpick([['Regular',88],['Lateral',6],['Management',6]]) : wpick([['Regular',92],['Management',8]]),
          status:wpick([['Active',96],['Detained',2],['Dropped',2]]),
          att, marks, assign:clamp(Math.round(7.2+(rnd()-0.5)*5),2,10), backlogs:bl, subj:null
        });
      }
    });
  });
  // Deterministic sample record used in the search example (24CSE00125)
  const a = STUDENTS.find(x => x.sectionId==='BTECH-S5-A');
  const b = STUDENTS.find(x => x.erpNo==='24CSE00125');
  if (a && b && a !== b) { b.erpNo = a.erpNo; b.email = a.email; }
  if (a) { a.erpNo = '24CSE00125'; a.name = 'Rahul Kumar'; a.father = 'Sunil Kumar'; a.gender='Male'; a.email = '24cse00125@students.jbkp-demo.example'; a.status='Active'; }
})();
const studentSubjects = st => {
  if (!st.subj) {
    st.subj = {};
    COURSES.filter(c => c.programId===st.programId && c.semester===st.semester).forEach(c => {
      st.subj[c.code] = {att:clamp(Math.round(st.att + (hrand(st.id+c.code)-0.5)*16),40,100), marks:clamp(Math.round(st.marks + (hrand(c.code+st.id)-0.5)*8),5,40)};
    });
  }
  return st.subj;
};

/* ---------- Attendance (class register) ----------
   Starts empty on purpose: "Not Marked" must be the true default state for
   every student/date/subject/lecture combination until a Coordinator or
   Faculty member actually marks it — nothing here is auto-generated or
   auto-defaulted to absent. The deterministic id below is what makes a
   save idempotent: writing to the same id always creates-or-overwrites the
   one true record for that (section, course, period, date, student)
   combination, so duplicates are structurally impossible. ---------- */
const ATTENDANCE = [];
function attendanceId(sectionId, courseCode, period, date, studentId){
  return `att_${sectionId}_${courseCode}_P${period}_${date}_${studentId}`.replace(/\s+/g, '');
}

/* ---------- Demo audit / activity seed ---------- */
const AUDIT_SEED = [
  {user:'Coordinator (demo)',role:'COORD',action:'Timetable updated',module:'Timetable',rec:'BTECH-S5-B',old:'Thu P3 in Room 204',nw:'Thu P3 in Room 207',mins:38},
  {user:'Data Entry (demo)',role:'DATA',action:'Students imported',module:'ERP Data',rec:'BCA-S1-A',old:'—',nw:'62 records added',mins:190},
  {user:'HOD (demo)',role:'HOD',action:'Faculty assigned to CS707',module:'Courses',rec:'CS707',old:'Unassigned',nw:'FAC012',mins:60*26},
  {user:'Coordinator (demo)',role:'COORD',action:'Course created',module:'Courses',rec:'MC306',old:'—',nw:'Dissertation',mins:60*30},
  {user:'HOD (demo)',role:'HOD',action:'Room changed',module:'Rooms',rec:'LAB3',old:'Capacity 32',nw:'Capacity 30',mins:60*52}
];

if (typeof module !== 'undefined') module.exports = {SECTIONS, COURSES, FACULTY, ROOMS, TT, STUDENTS, SYL, NP, ND, PROGRAMS, DEPARTMENTS, ATTENDANCE, attendanceId};
