'use strict';
/* =========================================================================
   ICONS (lucide-style, inline, stroke-based)
   ========================================================================= */
function icon(name, cls){
  const p = 'stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  const paths = {
    dashboard:'<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
    students:'<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>',
    faculty:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>',
    programs:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    courses:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M9 7h6M9 11h6"/>',
    workload:'<path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12" y="8" width="3" height="10"/><rect x="17" y="5" width="3" height="13"/>',
    timetable:'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/>',
    syllabus:'<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22.5"/><path d="M4 4.5v18"/><path d="M9 8h7M9 12h7"/>',
    rooms:'<path d="M3 21V8l9-5 9 5v13"/><path d="M9 21V12h6v9"/>',
    reports:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/>',
    erp:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    search:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
    bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',
    chevDown:'<path d="M6 9l6 6 6-6"/>',
    x:'<path d="M18 6L6 18M6 6l12 12"/>',
    menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
    check:'<path d="M20 6L9 17l-5-5"/>',
    checkCircle:'<circle cx="12" cy="12" r="10"/><path d="M8.5 12.5l2.5 2.5 5-5"/>',
    alertTriangle:'<path d="M10.3 3.9L2.6 18a1.7 1.7 0 0 0 1.5 2.6h15.8a1.7 1.7 0 0 0 1.5-2.6L13.7 3.9a1.7 1.7 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
    alertCircle:'<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>',
    trend:'<path d="M22 7L13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
    trendDown:'<path d="M22 17L13.5 8.5 8.5 13.5 2 7"/><path d="M16 17h6v-6"/>',
    eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4z"/>',
    clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    fileText:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6M9 9h1"/>',
    upload:'<path d="M12 3v13"/><path d="M7 8l5-5 5 5"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>',
    download:'<path d="M12 3v13"/><path d="M7 11l5 5 5-5"/><path d="M4 20h16"/>',
    plus:'<path d="M12 5v14M5 12h14"/>',
    users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>',
    phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.5 2L7.9 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2-.5c1 .4 2 .6 3 .7a2 2 0 0 1 1.8 2.1z"/>',
    building:'<rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
    layers:'<path d="M12 2l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5M3 17l9 5 9-5"/>',
    grid:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
    mapPin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    filter:'<path d="M22 3H2l8 9.5V19l4 2v-8.5L22 3z"/>',
    arrowLeft:'<path d="M19 12H5M12 19l-7-7 7-7"/>',
    link:'<path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.5-1.5"/>',
    trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z"/>',
    userCheck:'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M17 11l2 2 4-4"/>',
    activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    zap:'<path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>',
    home:'<path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
    droplet:'<path d="M12 2.5S5 11 5 15.5a7 7 0 0 0 14 0C19 11 12 2.5 12 2.5z"/>',
    briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    award:'<circle cx="12" cy="8" r="6"/><path d="M9 14l-2 8 5-3 5 3-2-8"/>',
    globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
    calendar:'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/>',
    doc:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
    id:'<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2"/><path d="M14 10h6M14 14h4"/>',
    shield:'<path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/>',
    barChart:'<path d="M3 3v18h18"/><rect x="7" y="13" width="3" height="5"/><rect x="12" y="9" width="3" height="9"/><rect x="17" y="6" width="3" height="12"/>',
    slidersH:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3"/><path d="M1 14h6M9 8h6M17 16h6"/>',
    logOut:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>'
  };
  return `<svg viewBox="0 0 24 24" ${p} class="${cls||''}">${paths[name]||''}</svg>`;
}

/* =========================================================================
   UTILITIES
   ========================================================================= */
const fmtN = n => n.toLocaleString('en-IN');
const initials = name => name.replace(/^(Dr\.|Mr\.|Ms\.)\s*/,'').split(' ').filter(Boolean).slice(0,2).map(s=>s[0]).join('').toUpperCase();
const esc = s => String(s==null?'':s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
function toast(msg, kind){
  const host = document.getElementById('toast-host');
  const el = document.createElement('div');
  el.className = 'toast' + (kind ? ' '+kind : '');
  el.innerHTML = (kind==='ok'?icon('checkCircle'):kind==='warn'||kind==='bad'?icon('alertCircle'):icon('zap')) + `<span>${esc(msg)}</span>`;
  host.appendChild(el);
  setTimeout(() => { el.style.opacity='0'; el.style.transition='opacity .25s'; setTimeout(()=>el.remove(),260); }, 3200);
}
function fmtDate(iso){
  const d = new Date(iso+'T00:00:00');
  return d.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});
}
function relTime(mins){
  if (mins < 60) return mins+'m ago';
  if (mins < 60*24) return Math.round(mins/60)+'h ago';
  return Math.round(mins/60/24)+'d ago';
}
const todayISO = () => new Date().toISOString().slice(0,10);

/* =========================================================================
   GLOBAL STATE
   ========================================================================= */
const State = {
  route: 'dashboard',
  routeParam: null,
  sidebarCollapsed: false,
  mobileOpen: false,
  theme: localStorage.getItem('cse-theme') || 'light',
  backendMode: 'demo', // 'demo' | 'auth' — set by window.CSEApp.boot()
  currentUser: null,   // {uid,email,name,role,facultyId,deptId} once signed in
  _booted: false,
  activeDept: 'CSE',   // department currently being viewed
  filters: { ay: APP_YEAR, program: '', semester: '', section: '', faculty: '', day: '', room: '' },
  settings: {
    normalMax: 15, highMax: 20, // >highMax => overloaded
    workingDays: 6,
    autoApprove: false,
  },
  table: {}, // per-table view state: {students:{q,sort,dir,page}, ...}
  drawer: null, // {type, id}
  modal: null,
};
function setRoute(r, param){
  State.route = r; State.routeParam = param || null; State.drawer = null; State.modal = null;
  location.hash = '#/' + r + (param ? '/' + param : '');
  renderApp();
  document.getElementById('content-scroll') && document.getElementById('content-scroll').scrollTo(0,0);
  window.scrollTo(0,0);
}
function parseHash(){
  const h = location.hash.replace(/^#\/?/, '');
  const [r, p] = h.split('/');
  return { r: r || 'dashboard', p: p ? decodeURIComponent(p) : null };
}

/* =========================================================================
   FILTER ENGINE — derives filtered datasets from State.filters
   ========================================================================= */
function activeFilterCount(){
  const f = State.filters; let c = 0;
  ['program','semester','section','faculty','day','room'].forEach(k => { if (f[k]) c++; });
  return c;
}
function deptOfProgram(pid){ const p = PROGRAMS.find(x=>x.id===pid); return p ? p.dept : null; }
function deptOfCourse(c){ return deptOfProgram(c.programId); }
function deptOfSection(s){ return deptOfProgram(s.programId); }
function activeDeptObj(){ return DEPARTMENTS.find(d=>d.id===State.activeDept) || DEPARTMENTS[0]; }
function matchSection(s){
  const f = State.filters;
  if (f.program && s.programId !== f.program) return false;
  if (f.semester && s.semester !== +f.semester) return false;
  if (f.section && s.id !== f.section) return false;
  return true;
}
function filteredSections(){ return SECTIONS.filter(s => deptOfSection(s)===State.activeDept && matchSection(s)); }
function filteredStudentsList(){
  const f = State.filters;
  const secIds = new Set(filteredSections().map(s=>s.id));
  return STUDENTS.filter(s => {
    if (!secIds.has(s.sectionId)) return false;
    if (f.faculty){
      const teaches = COURSES.some(c => c.facultyId===f.faculty && c.programId===s.programId && c.semester===s.semester);
      if (!teaches) return false;
    }
    return true;
  });
}
function filteredCoursesList(){
  const f = State.filters;
  return COURSES.filter(c => {
    if (deptOfCourse(c) !== State.activeDept) return false;
    if (f.program && c.programId !== f.program) return false;
    if (f.semester && c.semester !== +f.semester) return false;
    if (f.faculty && c.facultyId !== f.faculty) return false;
    if (f.section){
      const sec = SECTIONS.find(s=>s.id===f.section);
      if (!sec || sec.programId!==c.programId || sec.semester!==c.semester) return false;
    }
    return true;
  });
}
function filteredFacultyList(){
  const f = State.filters;
  let list = FACULTY.filter(x=>x.dept===State.activeDept);
  if (f.faculty) list = list.filter(x=>x.id===f.faculty);
  if (f.program || f.semester || f.section){
    const ids = new Set(filteredCoursesList().map(c=>c.facultyId).filter(Boolean));
    list = list.filter(x => ids.has(x.id));
  }
  if (f.room){
    const ids = new Set(TT.filter(e=>e.roomId===f.room).map(e=>e.facultyId));
    list = list.filter(x => ids.has(x.id));
  }
  if (f.day){
    const di = DAYS.indexOf(f.day);
    const ids = new Set(TT.filter(e=>e.day===di).map(e=>e.facultyId));
    list = list.filter(x => ids.has(x.id));
  }
  return list;
}
function filteredTTList(){
  const f = State.filters;
  const secIds = new Set(filteredSections().map(s=>s.id));
  return TT.filter(e => {
    if (!secIds.has(e.sectionId)) return false;
    if (f.faculty && e.facultyId !== f.faculty) return false;
    if (f.room && e.roomId !== f.room) return false;
    if (f.day && e.day !== DAYS.indexOf(f.day)) return false;
    return true;
  });
}
function facultyWeeklyLoad(fid){
  return COURSES.filter(c=>c.facultyId===fid).reduce((s,c)=>s+c.weekly,0);
}
function workloadBand(hrs){
  const s = State.settings;
  if (hrs > s.highMax) return 'Overloaded';
  if (hrs > s.normalMax) return 'High';
  return 'Normal';
}
function bandColor(b){ return b==='Overloaded' ? 'var(--bad)' : b==='High' ? 'var(--warn)' : 'var(--ok)'; }
'use strict';
/* =========================================================================
   NAV DEFINITION
   ========================================================================= */
const NAV = [
  {sec:'Overview', items:[
    {r:'dashboard', label:'Dashboard', ic:'dashboard'},
  ]},
  {sec:'Academic', items:[
    {r:'students', label:'Students', ic:'students'},
    {r:'faculty', label:'Faculty', ic:'faculty'},
    {r:'programs', label:'Programs', ic:'programs'},
    {r:'courses', label:'Courses', ic:'courses'},
    {r:'workload', label:'Workload', ic:'workload'},
    {r:'timetable', label:'Timetable', ic:'timetable'},
    {r:'syllabus', label:'Syllabus', ic:'syllabus'},
    {r:'rooms', label:'Rooms', ic:'rooms'},
    {r:'attendance', label:'Attendance', ic:'userCheck'},
  ]},
  {sec:'Records', items:[
    {r:'reports', label:'Reports', ic:'reports'},
    {r:'erp', label:'ERP Data', ic:'erp'},
  ]},
  {sec:'Administration', items:[
    {r:'departments', label:'Departments', ic:'building'},
  ]},
  {sec:'', items:[
    {r:'settings', label:'Settings', ic:'settings'},
  ]},
];

function unassignedCount(){ return COURSES.filter(c=>!c.facultyId && deptOfCourse(c)===State.activeDept).length; }

function renderSidebar(){
  const rows = NAV.map(grp => {
    const visItems = grp.items.filter(it => navAllowed(it.r));
    if (!visItems.length) return '';
    return `
    ${grp.sec ? `<div class="nav-sec">${grp.sec}</div>` : ''}
    ${visItems.map(it => `
      <div class="nav-item ${State.route===it.r?'active':''}" data-act="nav" data-route="${it.r}">
        ${icon(it.ic)}<span>${it.label}</span>
        ${it.r==='courses' && unassignedCount() ? `<span class="badge">${unassignedCount()}</span>` : ''}
      </div>`).join('')}
  `;}).join('');
  return `
    <aside id="sidebar" class="${State.mobileOpen?'mobile-open':''}">
      <div class="brand">
        <div class="brand-mark">JB</div>
        <div class="brand-txt">
          <div class="l1">JB Knowledge Park</div>
          <div class="l2">${esc(activeDeptObj().name)}</div>
        </div>
      </div>
      <nav class="nav">${rows}</nav>
      <div class="sidebar-foot">CSE Command Center · Demo data · v1.0</div>
    </aside>
    <div id="sidebar-scrim" class="${State.mobileOpen?'show':''}" data-act="close-mobile-nav"></div>
  `;
}

function searchIndex(q){
  q = q.trim().toLowerCase();
  if (!q) return [];
  const out = [];
  const dept = State.activeDept;
  STUDENTS.forEach(s => { if (s.dept===dept && (s.erpNo.toLowerCase().includes(q) || s.rollNo.toLowerCase().includes(q) || s.name.toLowerCase().includes(q))) out.push({type:'Student', icon:'students', title:s.name, sub:`${PROGRAMS.find(p=>p.id===s.programId).short} · Sem ${s.semester} · Sec ${s.section} · ${s.erpNo}`, act:()=>openDrawer('student', s.id)}); });
  FACULTY.forEach(f => { if (f.dept===dept && (f.name.toLowerCase().includes(q) || f.id.toLowerCase().includes(q))) out.push({type:'Faculty', icon:'faculty', title:f.name, sub:`${f.designation} · ${f.id}`, act:()=>openDrawer('faculty', f.id)}); });
  COURSES.forEach(c => { if (deptOfCourse(c)===dept && (c.code.toLowerCase().includes(q) || c.name.toLowerCase().includes(q))) out.push({type:'Course', icon:'courses', title:`${c.code} — ${c.name}`, sub:`${PROGRAMS.find(p=>p.id===c.programId).short} · Sem ${c.semester}`, act:()=>openDrawer('course', c.code)}); });
  ROOMS.forEach(r => { if (r.dept===dept && (r.name.toLowerCase().includes(q) || r.id.toLowerCase().includes(q))) out.push({type:'Room', icon:'rooms', title:r.name, sub:`${r.type}${r.desc?' · '+r.desc:''}`, act:()=>openDrawer('room', r.id)}); });
  PROGRAMS.forEach(p => { if (p.dept===dept && p.name.toLowerCase().includes(q)) out.push({type:'Program', icon:'programs', title:p.name, sub:p.degree, act:()=>openDrawer('program', p.id)}); });
  if (isSuperAdminView()) DEPARTMENTS.forEach(d => { if (d.name.toLowerCase().includes(q) || d.id.toLowerCase().includes(q)) out.push({type:'Department', icon:'building', title:d.name, sub:`${d.id} · ${d.status}`, act:()=>{ State.activeDept=d.id; setRoute('dashboard'); }}); });
  return out.slice(0,8);
}

function renderHeader(){
  const t = pageTitleFor(State.route);
  return `
    <header class="topbar">
      <button class="icon-btn menu-toggle" data-act="toggle-mobile-nav">${icon('menu')}</button>
      <div class="header-title">
        <div class="l1">${t.title}</div>
        <div class="l2">${t.sub}</div>
      </div>
      <div class="search-wrap" id="global-search-wrap">
        ${icon('search')}
        <input id="global-search" placeholder="Search student, faculty, course, room, ERP no…" autocomplete="off">
        <div class="search-results" id="search-results"></div>
      </div>
      <div class="header-spacer"></div>
      ${renderDeptSwitcher()}
      <div class="hdr-menu">
        <div class="ay-pill" data-act="toggle-dd" data-dd="ay">${icon('calendar')}<span class="ay-label-full">Academic Year: </span><span class="ay-label-short">AY </span><b>${State.filters.ay}</b> ${icon('chevDown','chev')}</div>
        <div class="dropdown" id="dd-ay">
          ${['2026–27','2025–26','2024–25'].map(y => `<div class="dd-item" data-act="set-ay" data-ay="${y}">${icon(y===State.filters.ay?'check':'calendar')}${y}</div>`).join('')}
        </div>
      </div>
      <button class="icon-btn" data-act="toggle-theme" title="Toggle theme">${icon(State.theme==='dark'?'sun':'moon')}</button>
      <div class="hdr-menu">
        <button class="icon-btn" style="position:relative" data-act="toggle-dd" data-dd="notif">${icon('bell')}<span class="notif-dot"></span></button>
        <div class="dropdown" id="dd-notif" style="min-width:300px">
          <div class="dd-head fw7">Notifications</div>
          <div class="dd-item" data-act="nav" data-route="courses">${icon('alertTriangle')}<div><div class="fw7 fs12">2 courses need faculty</div><div class="fs11 text-2">CS601, CS604 unassigned</div></div></div>
          <div class="dd-item" data-act="nav" data-route="syllabus">${icon('alertCircle')}<div><div class="fw7 fs12">Syllabus lagging</div><div class="fs11 text-2">3 courses below 30% completion</div></div></div>
          <div class="dd-item" data-act="nav" data-route="timetable">${icon('checkCircle')}<div><div class="fw7 fs12">Timetable published</div><div class="fs11 text-2">No conflicts detected this term</div></div></div>
        </div>
      </div>
      <div class="hdr-menu">
        <div class="avatar" data-act="toggle-dd" data-dd="user">${headerAvatarInitials()}</div>
        <div class="dropdown" id="dd-user">
          <div class="dd-head"><div class="fw7" style="color:var(--text);font-size:13px">${esc(headerUserName())}</div>${esc(headerUserEmail())}</div>
          <hr>
          <div class="dd-item" data-act="nav" data-route="settings">${icon('settings')}Settings</div>
          <div class="dd-item" data-act="noop">${icon('shield')}Role: ${esc(headerUserRole())}</div>
          <hr>
          <div class="dd-item" data-act="sign-out">${icon('logOut')}${State.backendMode==='auth'?'Sign out':'Sign out (demo mode)'}</div>
        </div>
      </div>
    </header>
  `;
}
function headerUserName(){ return State.currentUser ? State.currentUser.name : 'HOD Coordinator'; }
function headerUserEmail(){ return State.currentUser ? State.currentUser.email : 'hod.cse@jbkp-demo.example'; }
function headerUserRole(){ return State.currentUser ? State.currentUser.role : 'HOD (demo)'; }
function headerAvatarInitials(){ return initials(headerUserName()); }

function isSuperAdminView(){ return State.backendMode !== 'auth' || (State.currentUser && State.currentUser.role === 'Super Admin'); }
function renderDeptSwitcher(){
  const d = activeDeptObj();
  if (!isSuperAdminView()){
    return `<div class="ay-pill" style="cursor:default">${icon('building')}<span>${esc(d.short)}</span></div>`;
  }
  return `
    <div class="hdr-menu">
      <div class="ay-pill" data-act="toggle-dd" data-dd="dept">${icon('building')}<span class="ay-label-full">Department: </span><b>${esc(d.short)}</b> ${icon('chevDown','chev')}</div>
      <div class="dropdown" id="dd-dept" style="min-width:240px">
        <div class="dd-head">Switch department</div>
        ${DEPARTMENTS.map(dep => `<div class="dd-item" data-act="set-dept" data-dept="${dep.id}">${icon(dep.id===State.activeDept?'check':'building')}${esc(dep.name)}</div>`).join('')}
        <hr>
        <div class="dd-item" data-act="nav" data-route="departments">${icon('settings')}Manage Departments</div>
      </div>
    </div>`;
}
function pageTitleFor(r){
  const map = {
    dashboard:{title:'Department Dashboard', sub:activeDeptObj().short+' Department Digital Command Center'},
    departments:{title:'Super Admin Dashboard', sub:'Manage every department from one control center'},
    students:{title:'Students', sub:'ERP student records across all programs'},
    faculty:{title:'Faculty', sub:'Faculty roster, workload and profiles'},
    programs:{title:'Programs', sub:'Degree programs offered by the department'},
    courses:{title:'Courses', sub:'Course catalog, allocation and status'},
    workload:{title:'Faculty Workload', sub:'Weekly teaching hours by faculty'},
    timetable:{title:'Timetable', sub:'Day / week / faculty / section / room views'},
    syllabus:{title:'Syllabus', sub:'Unit-wise completion tracking'},
    rooms:{title:'Rooms', sub:'Room inventory, utilization and conflicts'},
    attendance:{title:'Student Attendance', sub:'Mark and manage daily student attendance'},
    reports:{title:'Reports', sub:'Generate and export department reports'},
    erp:{title:'ERP Data', sub:'Student ERP import and record management'},
    settings:{title:'Settings', sub:'Roles, thresholds and preferences'},
  };
  return map[r] || map.dashboard;
}

/* -------------------- Filter bar -------------------- */
const FILTER_DEFS = [
  {key:'program', label:'Program', icon:'programs', opts: () => PROGRAMS.filter(p=>p.dept===State.activeDept).map(p=>({v:p.id,l:p.short}))},
  {key:'semester', label:'Semester', icon:'layers', opts: () => {
      const sems = State.filters.program ? [...new Set(SECTIONS.filter(s=>s.programId===State.filters.program).map(s=>s.semester))] : [...new Set(filteredSections().map(s=>s.semester))].sort((a,b)=>a-b);
      return (sems.length?sems:[1,2,3,4,5,6,7,8]).sort((a,b)=>a-b).map(s=>({v:String(s), l:'Semester '+s}));
  }},
  {key:'section', label:'Section', icon:'grid', opts: () => filteredSections().map(s=>({v:s.id, l:s.label}))},
  {key:'faculty', label:'Faculty', icon:'faculty', opts: () => FACULTY.filter(f=>f.dept===State.activeDept).map(f=>({v:f.id, l:f.name}))},
  {key:'day', label:'Day', icon:'calendar', opts: () => DAYS.map(d=>({v:d, l:DAY_FULL[DAYS.indexOf(d)]}))},
  {key:'room', label:'Room', icon:'rooms', opts: () => ROOMS.filter(r=>r.dept===State.activeDept).map(r=>({v:r.id, l:r.name}))},
];
let filterPopOpen = null;
let filterSearchQ = {};
function renderFilterBar(){
  const btns = FILTER_DEFS.map(fd => {
    const val = State.filters[fd.key];
    const opts = fd.opts();
    const label = val ? (opts.find(o=>o.v===val)?.l || val) : 'All';
    const q = (filterSearchQ[fd.key]||'').toLowerCase();
    const shown = q ? opts.filter(o=>o.l.toLowerCase().includes(q)) : opts;
    return `
      <div class="filter-field">
        <div class="filter-btn ${val?'active':''}" data-act="toggle-filter-pop" data-key="${fd.key}">
          ${icon(fd.icon)}<span>${fd.label}:</span><span class="fv">${esc(label)}</span>${icon('chevDown','chev')}
        </div>
        <div class="filter-pop ${filterPopOpen===fd.key?'show':''}" id="fpop-${fd.key}">
          <input placeholder="Search ${fd.label.toLowerCase()}…" value="${esc(filterSearchQ[fd.key]||'')}" data-act="filter-search" data-key="${fd.key}">
          <div class="flist">
            <div class="fopt ${!val?'sel':''}" data-act="set-filter" data-key="${fd.key}" data-val="">All ${fd.label.toLowerCase()}s${!val?icon('check'):''}</div>
            ${shown.map(o => `<div class="fopt ${val===o.v?'sel':''}" data-act="set-filter" data-key="${fd.key}" data-val="${esc(o.v)}">${esc(o.l)}${val===o.v?icon('check'):''}</div>`).join('') || '<div class="fs11 text-3" style="padding:8px">No matches</div>'}
          </div>
        </div>
      </div>`;
  }).join('');
  const n = activeFilterCount();
  return `
    <div class="filterbar">
      ${icon('slidersH')}
      ${btns}
      ${n ? `<div class="reset-link" data-act="reset-filters">Reset filters <span class="filter-chipcount">${n}</span></div>` : ''}
    </div>`;
}

/* -------------------- KPI card builder -------------------- */
function kpiCard({icon:ic, color, num, label, trend, tip, route}){
  return `
    <div class="kpi-card" data-act="nav" data-route="${route||''}">
      <div class="kpi-top">
        <div class="kpi-ic" style="background:${color}1a;color:${color}">${icon(ic)}</div>
        <div class="tooltip-wrap">${icon('alertCircle','')}<span class="tip">${esc(tip||'')}</span></div>
      </div>
      <div class="kpi-num">${num}</div>
      <div class="kpi-lbl">${label}</div>
      ${trend ? `<div class="kpi-trend ${trend.dir}">${icon(trend.dir==='down'?'trendDown':'trend')}${trend.txt}</div>` : ''}
    </div>`;
}

function statusRow(kind, text, opts){
  opts = opts || {};
  const ic = kind==='ok'?'checkCircle':kind==='warn'?'alertTriangle':'alertCircle';
  return `<div class="status-row ${kind} ${opts.act?'clickable':''}" ${opts.act?`data-act="${opts.act}" ${opts.data||''}`:''}>${icon(ic)}<span class="lbl">${text}</span>${opts.right||''}</div>`;
}
'use strict';
/* =========================================================================
   DASHBOARD PAGE
   ========================================================================= */
let distMode = 'Program'; // Program | Semester | Section
let overloadFilterActive = null;

function pageDashboard(){
  const students = filteredStudentsList();
  const courses = filteredCoursesList();
  const fac = filteredFacultyList();
  const secs = filteredSections();
  const tt = filteredTTList();
  const activeFac = fac.filter(f=>f.status==='Active');
  const deptPrograms = PROGRAMS.filter(p=>p.dept===State.activeDept);

  const kpis = `
    <div class="kpi-grid">
      ${kpiCard({icon:'faculty', color:'#2F75B5', num:fac.length, label:'Total Faculty', route:'faculty',
        trend:{dir:'flat', txt:`${activeFac.length} active`}, tip:'All faculty matching current filters'})}
      ${kpiCard({icon:'userCheck', color:'#1E8E5A', num:activeFac.length, label:'Active Faculty', route:'faculty',
        trend:{dir:'up', txt:`${fac.length-activeFac.length} on leave/inactive`}, tip:'Faculty currently teaching'})}
      ${kpiCard({icon:'programs', color:'#8E5FD6', num:new Set(secs.map(s=>s.programId)).size || deptPrograms.length, label:'Programs', route:'programs',
        trend:{dir:'flat', txt:deptPrograms.map(p=>p.short).slice(0,2).join(', ')+'…'}, tip:'Degree programs in scope'})}
      ${kpiCard({icon:'grid', color:'#B4790A', num:secs.length, label:'Sections', route:'programs',
        trend:{dir:'flat', txt:secs.length+' active sections'}, tip:'Sections matching current filters'})}
      ${kpiCard({icon:'courses', color:'#2F75B5', num:courses.length, label:'Courses', route:'courses',
        trend:{dir: unassignedCount()?'down':'up', txt: unassignedCount()+' unassigned'}, tip:'Courses offered this term'})}
      ${kpiCard({icon:'students', color:'#17365D', num:fmtN(students.length), label:'Students', route:'students',
        trend:{dir:'up', txt:'+3.4% vs last year'}, tip:'Enrolled students matching filters'})}
    </div>`;

  const workload = panelWorkload(fac);
  const distribution = panelDistribution(secs);
  const syllabus = panelSyllabus(courses);
  const ttControl = panelTimetableControl(tt, courses);
  const overload = panelOverload(fac);
  const roomUtil = panelRoomUtilization(tt);
  const alerts = panelAlertsActivity(courses);

  return `
    ${kpis}
    <div class="dash-grid">${workload}${distribution}</div>
    <div class="dash-grid">${syllabus}${ttControl}</div>
    <div class="dash-grid">${overload}${roomUtil}</div>
    ${alerts}
  `;
}

/* ---------- Faculty Workload ---------- */
function panelWorkload(fac){
  const rows = fac.map(f => ({f, h: facultyWeeklyLoad(f.id)})).sort((a,b)=>b.h-a.h);
  const max = Math.max(1, ...rows.map(r=>r.h));
  return `
    <div class="panel">
      <div class="panel-head">
        <div><div class="panel-title">Faculty Workload</div><div class="panel-sub">Weekly teaching hours · click a faculty for details</div></div>
        <button class="btn btn-sm" data-act="nav" data-route="workload">View all ${icon('arrowLeft')}</button>
      </div>
      <div class="bar-chart">
        ${rows.slice(0,10).map(r => {
          const band = workloadBand(r.h); const col = bandColor(band);
          const w = Math.round((r.h/max)*100);
          return `<div class="bar-row" data-act="open-drawer" data-type="faculty" data-id="${r.f.id}">
            <div class="bn">${esc(r.f.name.replace(/^(Dr\.|Mr\.|Ms\.)\s*/,''))}</div>
            <div class="bar-track"><div class="bar-fill" style="width:${w}%;background:${col}"></div></div>
            <div class="bar-val">${r.h}h</div>
          </div>`;
        }).join('') || emptyState('faculty','No faculty match the current filters')}
      </div>
      <div class="tt-legend"><span><i style="background:var(--ok)"></i>Normal</span><span><i style="background:var(--warn)"></i>High</span><span><i style="background:var(--bad)"></i>Overloaded</span></div>
    </div>`;
}

/* ---------- Student Distribution ---------- */
function panelDistribution(secs){
  let groups;
  if (distMode==='Program'){
    groups = PROGRAMS.map(p => ({k:p.short, v: STUDENTS.filter(s=>s.programId===p.id && secs.some(x=>x.id===s.sectionId)).length}));
  } else if (distMode==='Semester'){
    const sems = [...new Set(secs.map(s=>s.semester))].sort((a,b)=>a-b);
    groups = sems.map(sm => ({k:'Sem '+sm, v: STUDENTS.filter(s=>s.semester===sm && secs.some(x=>x.id===s.sectionId)).length}));
  } else {
    groups = secs.map(s => ({k:s.label.replace(/^.*Sec /,'Sec '), v: STUDENTS.filter(x=>x.sectionId===s.id).length}));
  }
  groups = groups.filter(g=>g.v>0);
  const max = Math.max(1, ...groups.map(g=>g.v));
  const colors = ['#2F75B5','#17365D','#8E5FD6','#1E8E5A','#B4790A','#C0392B'];
  return `
    <div class="panel">
      <div class="panel-head">
        <div><div class="panel-title">Student Distribution</div><div class="panel-sub">By ${distMode.toLowerCase()} · click a bar to view students</div></div>
        <div class="seg">
          ${['Program','Semester','Section'].map(m=>`<button class="${distMode===m?'active':''}" data-act="dist-mode" data-mode="${m}">${m}</button>`).join('')}
        </div>
      </div>
      <div class="bar-chart" style="max-height:300px">
        ${groups.map((g,i) => `<div class="bar-row" data-act="dist-drill" data-mode="${distMode}" data-key="${esc(g.k)}">
            <div class="bn">${esc(g.k)}</div>
            <div class="bar-track"><div class="bar-fill" style="width:${Math.round(g.v/max*100)}%;background:${colors[i%colors.length]}"></div></div>
            <div class="bar-val">${fmtN(g.v)}</div>
          </div>`).join('') || emptyState('students','No students match the current filters')}
      </div>
    </div>`;
}

/* ---------- Syllabus Status ---------- */
function panelSyllabus(courses){
  const withData = courses.filter(c => c.facultyId).map(c => ({c, pct: syllabusPct(c.code)})).sort((a,b)=>a.pct-b.pct);
  const completed = withData.filter(x=>x.pct>=90).length;
  const inProg = withData.filter(x=>x.pct>=30 && x.pct<90).length;
  const pending = withData.filter(x=>x.pct<30).length;
  const show = withData.slice(0,6);
  return `
    <div class="panel">
      <div class="panel-head">
        <div><div class="panel-title">Syllabus Status</div><div class="panel-sub">Unit completion across courses</div></div>
        <button class="btn btn-sm" data-act="nav" data-route="syllabus">View all ${icon('arrowLeft')}</button>
      </div>
      <div class="mini-stats">
        <div class="mini-stat" style="border-color:var(--ok)"><div class="v" style="color:var(--ok)">${completed}</div><div class="l">Completed</div></div>
        <div class="mini-stat" style="border-color:var(--warn)"><div class="v" style="color:var(--warn)">${inProg}</div><div class="l">In Progress</div></div>
        <div class="mini-stat" style="border-color:var(--bad)"><div class="v" style="color:var(--bad)">${pending}</div><div class="l">Pending</div></div>
        <div class="mini-stat"><div class="v">${withData.length}</div><div class="l">Total Tracked</div></div>
      </div>
      ${show.map(x => `
        <div class="prog-row" data-act="open-drawer" data-type="course" data-id="${x.c.code}" style="cursor:pointer">
          <div class="pn">${x.c.code} · ${esc(x.c.name)}</div>
          <div class="prog-track"><div class="prog-fill" style="width:${x.pct}%;background:${x.pct>=90?'var(--ok)':x.pct>=30?'var(--warn)':'var(--bad)'}"></div></div>
          <div class="prog-pct">${x.pct}%</div>
        </div>`).join('') || emptyState('syllabus','No syllabus data for current filters')}
    </div>`;
}
function syllabusPct(code){
  const s = SYL[code]; if (!s) return 0;
  const planned = s.units.reduce((a,u)=>a+u.planned,0), done = s.units.reduce((a,u)=>a+u.done,0);
  return planned ? Math.round(done/planned*100) : 0;
}

/* ---------- Timetable Control ---------- */
function panelTimetableControl(tt, courses){
  const conf = computeConflicts(tt);
  const roomsUsed = new Set(tt.map(e=>e.roomId)).size;
  const unassigned = courses.filter(c=>!c.facultyId);
  return `
    <div class="panel">
      <div class="panel-head">
        <div><div class="panel-title">Timetable Control</div><div class="panel-sub">Live conflict &amp; coverage check</div></div>
        <button class="btn btn-sm" data-act="nav" data-route="timetable">Open ${icon('arrowLeft')}</button>
      </div>
      <div class="mini-stats">
        <div class="mini-stat"><div class="v">${tt.length}</div><div class="l">Total Classes</div></div>
        <div class="mini-stat" style="border-color:${conf.total?'var(--bad)':'var(--border-2)'}"><div class="v" style="color:${conf.total?'var(--bad)':'var(--text)'}">${conf.total}</div><div class="l">Conflicts</div></div>
        <div class="mini-stat" style="border-color:${unassigned.length?'var(--warn)':'var(--border-2)'}"><div class="v" style="color:${unassigned.length?'var(--warn)':'var(--text)'}">${unassigned.length}</div><div class="l">Unassigned</div></div>
        <div class="mini-stat"><div class="v">${roomsUsed}</div><div class="l">Rooms Used</div></div>
      </div>
      <div class="status-list">
        ${statusRow(conf.faculty?'bad':'ok', conf.faculty ? `${conf.faculty} Faculty Conflict${conf.faculty>1?'s':''}` : 'No Faculty Conflict')}
        ${statusRow(conf.room?'bad':'ok', conf.room ? `${conf.room} Room Conflict${conf.room>1?'s':''}` : 'No Room Conflict')}
        ${statusRow(conf.section?'bad':'ok', conf.section ? `${conf.section} Section Conflict${conf.section>1?'s':''}` : 'No Section Conflict')}
        ${statusRow(unassigned.length?'warn':'ok', unassigned.length ? `${unassigned.length} Unassigned Course${unassigned.length>1?'s':''}` : 'All courses assigned', {act: unassigned.length ? 'nav':'', data:'data-route="courses"'})}
      </div>
    </div>`;
}
function computeConflicts(tt){
  const fac={}, room={}, sec={}; let fC=0,rC=0,sC=0;
  tt.forEach(e => {
    const k = e.day+'-'+e.period;
    const fk=e.facultyId+'|'+k; if(fac[fk]) fC++; fac[fk]=(fac[fk]||0)+1;
    const rk=e.roomId+'|'+k; if(room[rk]) rC++; room[rk]=(room[rk]||0)+1;
    const sk=e.sectionId+'|'+k; if(sec[sk]) sC++; sec[sk]=(sec[sk]||0)+1;
  });
  return {faculty:fC, room:rC, section:sC, total:fC+rC+sC};
}

/* ---------- Faculty Overload Status ---------- */
function panelOverload(fac){
  const active = fac.filter(f=>f.status==='Active');
  const bands = {Normal:0, High:0, Overloaded:0};
  active.forEach(f => bands[workloadBand(facultyWeeklyLoad(f.id))]++);
  const total = active.length || 1;
  const colors = {Normal:'var(--ok)', High:'var(--warn)', Overloaded:'var(--bad)'};
  let acc = 0;
  const segs = Object.keys(bands).map(k => {
    const pct = bands[k]/total*100; const seg = {k, pct, start:acc}; acc += pct; return seg;
  });
  const gradient = segs.map(s => `${colors[s.k]} ${s.start}% ${s.start+s.pct}%`).join(', ');
  return `
    <div class="panel">
      <div class="panel-head">
        <div><div class="panel-title">Faculty Workload Status</div><div class="panel-sub">Normal ≤ ${State.settings.normalMax}h · High ≤ ${State.settings.highMax}h · Overloaded above</div></div>
        <button class="btn btn-sm" data-act="nav" data-route="settings">Thresholds</button>
      </div>
      <div class="donut-wrap">
        <svg width="132" height="132" viewBox="0 0 42 42" style="flex-shrink:0">
          <circle cx="21" cy="21" r="15.9" fill="transparent" stroke="var(--border-2)" stroke-width="6"></circle>
          <circle cx="21" cy="21" r="15.9" fill="transparent" stroke-width="6" stroke-dasharray="${bands.Normal/total*100} ${100-bands.Normal/total*100}" stroke-dashoffset="25" stroke="${colors.Normal}"></circle>
          <circle cx="21" cy="21" r="15.9" fill="transparent" stroke-width="6" stroke-dasharray="${bands.High/total*100} ${100-bands.High/total*100}" stroke-dashoffset="${25-bands.Normal/total*100}" stroke="${colors.High}"></circle>
          <circle cx="21" cy="21" r="15.9" fill="transparent" stroke-width="6" stroke-dasharray="${bands.Overloaded/total*100} ${100-bands.Overloaded/total*100}" stroke-dashoffset="${25-bands.Normal/total*100-bands.High/total*100}" stroke="${colors.Overloaded}"></circle>
          <text x="21" y="19.5" text-anchor="middle" font-size="7" font-weight="800" fill="var(--text)">${active.length}</text>
          <text x="21" y="26" text-anchor="middle" font-size="3.4" fill="var(--text-2)">faculty</text>
        </svg>
        <div class="donut-legend">
          ${Object.keys(bands).map(k => `
            <div class="dl-row" data-act="overload-drill" data-band="${k}">
              <span class="dl-dot" style="background:${colors[k]}"></span><span class="n">${k}</span><span class="v">${bands[k]}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>`;
}

/* ---------- Room Utilization ---------- */
function panelRoomUtilization(tt){
  const rooms = ROOMS.filter(r=>r.dept===State.activeDept);
  const util = rooms.map(r => {
    const used = tt.filter(e=>e.roomId===r.id).length;
    return {r, pct: Math.round(used/SLOTS*100), used};
  }).sort((a,b)=>b.pct-a.pct);
  const conf = computeConflicts(tt).room;
  const occupied = util.filter(u=>u.used>0).length;
  return `
    <div class="panel">
      <div class="panel-head">
        <div><div class="panel-title">Room Utilization &amp; Conflicts</div><div class="panel-sub">${rooms.length} rooms · ${occupied} occupied · ${rooms.length-occupied} available</div></div>
        <button class="btn btn-sm" data-act="nav" data-route="rooms">View all ${icon('arrowLeft')}</button>
      </div>
      ${conf ? statusRow('bad', `${conf} room conflict${conf>1?'s':''} detected`) : statusRow('ok','No room conflicts')}
      <div class="bar-chart mt12" style="max-height:230px">
        ${util.slice(0,7).map(u => `<div class="bar-row" data-act="open-drawer" data-type="room" data-id="${u.r.id}">
            <div class="bn">${esc(u.r.name)}</div>
            <div class="bar-track"><div class="bar-fill" style="width:${u.pct}%;background:${u.pct>85?'var(--bad)':u.pct>60?'var(--blue)':'var(--ok)'}"></div></div>
            <div class="bar-val">${u.pct}%</div>
          </div>`).join('')}
      </div>
    </div>`;
}

/* ---------- Alerts / Unassigned courses / activity ---------- */
function panelAlertsActivity(courses){
  const unassigned = courses.filter(c=>!c.facultyId);
  const alert = unassigned.length ? `
    <div class="alert-card mb12">
      ${icon('alertTriangle')}
      <div style="flex:1">
        <div class="at">UNASSIGNED COURSES</div>
        <div class="ad">${unassigned.length} course${unassigned.length>1?'s':''} require${unassigned.length>1?'':'s'} faculty allocation</div>
        <div class="chip-list">
          ${unassigned.map(c => `<span class="chip" data-act="open-drawer" data-type="course" data-id="${c.code}">${c.code} — ${esc(c.name)}</span>`).join('')}
        </div>
      </div>
      ${gated('assign-faculty', `<button class="btn btn-primary btn-sm" data-act="assign-faculty" data-code="${unassigned[0].code}">Assign Faculty</button>`)}
    </div>` : '';
  return `
    <div class="grid-2">
      <div>${alert || `<div class="panel" style="height:100%">${statusRow('ok','All courses have faculty assigned')}</div>`}</div>
      <div class="panel">
        <div class="panel-head"><div class="panel-title">Recent Activity</div></div>
        <div class="status-list">
          ${AUDIT_SEED.slice(0,4).map(a => `
            <div class="status-row" style="background:var(--surface-2)">
              ${icon('activity')}<span class="lbl"><b>${esc(a.action)}</b> · ${esc(a.rec)}</span><span class="fs11 text-3">${relTime(a.mins)}</span>
            </div>`).join('')}
        </div>
        <button class="btn btn-sm mt12" data-act="nav" data-route="reports" data-param="audit" style="width:100%;justify-content:center">View audit log</button>
      </div>
    </div>`;
}

function emptyState(ic, msg){
  return `<div class="empty-state">${icon(ic)}<div class="et">Nothing to show</div><div>${esc(msg)}</div></div>`;
}
'use strict';
/* =========================================================================
   GENERIC DATA TABLE
   cols: [{key,label,sortable,render(row)}]
   ========================================================================= */
function getTableState(id){
  if (!State.table[id]) State.table[id] = {q:'', sort:null, dir:1, page:1, pageSize:10};
  return State.table[id];
}
function dataTable(id, cols, rows, opts){
  opts = opts || {};
  const st = getTableState(id);
  let filtered = rows;
  if (st.q && opts.searchKeys){
    const q = st.q.toLowerCase();
    filtered = filtered.filter(r => opts.searchKeys.some(k => String(r[k]||'').toLowerCase().includes(q)));
  }
  if (st.sort){
    filtered = filtered.slice().sort((a,b) => {
      let av = a[st.sort], bv = b[st.sort];
      if (typeof av === 'string') { av = av.toLowerCase(); bv = String(bv).toLowerCase(); }
      return av > bv ? st.dir : av < bv ? -st.dir : 0;
    });
  }
  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / st.pageSize));
  st.page = Math.min(st.page, pages);
  const start = (st.page-1)*st.pageSize;
  const pageRows = filtered.slice(start, start+st.pageSize);

  const head = cols.map(c => `<th data-act="${c.sortable?'sort-table':'noop'}" data-id="${id}" data-key="${c.key}">${c.label}${st.sort===c.key ? `<span class="sarr">${st.dir===1?'▲':'▼'}</span>` : ''}</th>`).join('');
  const body = pageRows.map(r => `<tr data-act="${opts.rowAct||'noop'}" data-id="${opts.rowId ? opts.rowId(r) : ''}">${cols.map(c => `<td>${c.render ? c.render(r) : esc(r[c.key])}</td>`).join('')}</tr>`).join('');

  return `
    <div class="table-toolbar">
      ${opts.searchKeys ? `<div class="table-search">${icon('search')}<input placeholder="${opts.searchPlaceholder||'Search…'}" value="${esc(st.q)}" data-act="table-search" data-id="${id}"></div>` : ''}
      ${opts.extraToolbar || ''}
      <div class="header-spacer"></div>
      ${opts.exportable !== false ? `<button class="btn btn-sm" data-act="export-table" data-id="${id}">${icon('download')}Export CSV</button>` : ''}
    </div>
    <div class="table-wrap">
      <table class="dtable"><thead><tr>${head}</tr></thead><tbody>${body || `<tr><td colspan="${cols.length}"><div class="empty-state">${icon('search')}<div class="et">No matching records</div><div>Try a different search or reset filters.</div></div></td></tr>`}</tbody></table>
      ${total ? `<div class="pagination">
        <span>Showing ${start+1}–${Math.min(start+st.pageSize,total)} of ${total}</span>
        <div class="pg-btns">
          <button class="btn btn-sm" ${st.page<=1?'disabled':''} data-act="table-page" data-id="${id}" data-dir="-1">Prev</button>
          <button class="btn btn-sm" ${st.page>=pages?'disabled':''} data-act="table-page" data-id="${id}" data-dir="1">Next</button>
        </div>
      </div>` : ''}
    </div>`;
}
function tableExportRows(id){
  // Recomputed by caller via window._lastTableExport[id] set at render time.
  return window._lastTableExport && window._lastTableExport[id];
}
function toCSV(cols, rows){
  const esc2 = v => { v = String(v==null?'':v); return /[",\n]/.test(v) ? '"'+v.replace(/"/g,'""')+'"' : v; };
  const head = cols.map(c=>esc2(c.label)).join(',');
  const body = rows.map(r => cols.map(c => esc2(c.csv ? c.csv(r) : (c.render ? c.render(r).replace(/<[^>]+>/g,'') : r[c.key]))).join(',')).join('\n');
  return head+'\n'+body;
}
function downloadCSV(filename, csv){
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 1500);
}
'use strict';
/* =========================================================================
   STUDENTS PAGE
   ========================================================================= */
function attColor(a){ return a>=85?'var(--ok)':a>=75?'var(--warn)':'var(--bad)'; }
/* Real, Firestore-backed per-subject attendance for a student, computed from
   ATTENDANCE records (Module 1). Returns null when nothing has been marked
   yet for that student+course so callers can fall back to the demo estimate
   — never silently reports 0% for a class that simply hasn't started. */
function realSubjectAttendance(studentId, courseCode){
  const recs = ATTENDANCE.filter(a => a.studentId===studentId && a.courseCode===courseCode);
  if (!recs.length) return null;
  const present = recs.filter(a=>a.status==='present').length;
  const absent = recs.filter(a=>a.status==='absent').length;
  const leave = recs.filter(a=>a.status==='leave').length;
  const total = present + absent + leave; // "Not Marked" is never in ATTENDANCE, so this is always totalMarkedClasses
  return {present, absent, leave, total, pct: total ? Math.round((present/total)*1000)/10 : 0};
}
function pageStudents(){
  const rows = filteredStudentsList();
  const cols = [
    {key:'erpNo', label:'ERP / Roll No', sortable:true, render:r=>`<div class="cell-strong mono">${r.erpNo}</div><div class="cell-sub mono">${r.rollNo}</div>`},
    {key:'name', label:'Student Name', sortable:true, render:r=>`<div class="tr-flex"><div class="avatar-sm">${initials(r.name)}</div><div><div class="cell-strong">${esc(r.name)}</div><div class="cell-sub">${r.gender}</div></div></div>`},
    {key:'programId', label:'Program', sortable:true, render:r=>PROGRAMS.find(p=>p.id===r.programId).short},
    {key:'semester', label:'Semester', sortable:true, render:r=>'Sem '+r.semester},
    {key:'section', label:'Section', sortable:true, render:r=>r.section},
    {key:'att', label:'Attendance', sortable:true, render:r=>`<span class="fw7" style="color:${attColor(r.att)}">${r.att}%</span>`},
    {key:'marks', label:'Internal Marks', sortable:true, render:r=>`${r.marks}/40`},
    {key:'status', label:'Status', sortable:true, render:r=>statusBadge(r.status)},
    {key:'_actions', label:'Actions', sortable:false, render:r=>`
      <span class="icon-action" title="View" data-act="row-view" data-type="student" data-id="${r.id}">${icon('eye')}</span>
      <span class="icon-action" title="View attendance" data-act="row-tab" data-type="student" data-id="${r.id}" data-tab="Academic">${icon('activity')}</span>
      ${gated('mark-attendance', `<span class="icon-action" title="Mark attendance / marks" data-act="modal-update-academic" data-id="${r.id}">${icon('edit')}</span>`)}
      <span class="icon-action" title="Documents" data-act="row-tab" data-type="student" data-id="${r.id}" data-tab="Documents">${icon('doc')}</span>
    `},
  ];
  window._lastTableExport = window._lastTableExport || {};
  window._lastTableExport['students'] = {cols: cols.slice(0,8), rows};
  const table = dataTable('students', cols, rows, {
    searchKeys:['name','erpNo','rollNo','email'], searchPlaceholder:'Search name, ERP no, roll no…',
    rowAct:'open-drawer-row', rowId: r=>'student:'+r.id,
  });
  return `
    <div class="page-head">
      <div><h1>Students</h1><p>${fmtN(rows.length)} students matching current filters</p></div>
      <div class="head-actions">
        ${gated('erp-validate', `<button class="btn" data-act="nav" data-route="erp">${icon('upload')}Import ERP Data</button>`)}
        ${gated('modal-add-student', `<button class="btn btn-primary" data-act="modal-add-student">${icon('plus')}Add Student</button>`)}
      </div>
    </div>
    ${table}
  `;
}
function statusBadge(s){
  const map = {Active:'ok', Detained:'warn', Dropped:'bad', Inactive:'neutral', 'On Leave':'warn'};
  return `<span class="badge-pill badge-${map[s]||'neutral'}">${s}</span>`;
}

function studentDrawer(id){
  const s = STUDENTS.find(x=>x.id===id); if (!s) return '';
  const prog = PROGRAMS.find(p=>p.id===s.programId);
  const subj = studentSubjects(s);
  const courses = COURSES.filter(c=>c.programId===s.programId && c.semester===s.semester);
  const tab = State.drawer.tab || 'Basic';
  const tabs = ['Basic','Academic','Subjects','Documents'];
  return `
    <div class="drawer-head">
      <div class="tr-flex"><div class="avatar-sm" style="width:40px;height:40px;font-size:13px">${initials(s.name)}</div>
        <div><div class="fw7" style="font-size:15px">${esc(s.name)}</div><div class="fs12 text-2">${prog.short} · Sem ${s.semester} · Sec ${s.section} · ${statusBadge(s.status)}</div></div>
      </div>
      <button class="drawer-close" data-act="close-drawer">${icon('x')}</button>
    </div>
    <div class="drawer-body">
      <div class="section-tabs">${tabs.map(t=>`<button class="${tab===t?'active':''}" data-act="drawer-tab" data-tab="${t}">${t}</button>`).join('')}</div>
      ${tab==='Basic' ? `
        <div class="dl-grid">
          ${dlItem('ERP Number', s.erpNo)}${dlItem('Roll Number', s.rollNo)}
          ${dlItem("Father's Name", s.father)}${dlItem("Mother's Name", s.mother)}
          ${dlItem('Program', prog.name)}${dlItem('Department', s.dept)}
          ${dlItem('Semester', 'Semester '+s.semester)}${dlItem('Section', 'Section '+s.section)}
          ${dlItem('Academic Year', s.academicYear)}${dlItem('Admission Year', s.admissionYear)}
          ${dlItem('Admission Type', s.admissionType)}${dlItem('Category', s.category)}
          ${dlItem('Gender', s.gender)}${dlItem('Date of Birth', fmtDate(s.dob))}
          ${dlItem('Email', s.email)}${dlItem('Mobile', s.mobile)}
        </div>
        <div class="mt16"><div class="field-label">Address</div><div class="fs12">${esc(s.address)}</div></div>
      ` : tab==='Academic' ? `
        <div class="mini-stats">
          <div class="mini-stat"><div class="v" style="color:${attColor(s.att)}">${s.att}%</div><div class="l">Attendance</div></div>
          <div class="mini-stat"><div class="v">${s.marks}/40</div><div class="l">Internal Marks</div></div>
          <div class="mini-stat"><div class="v">${s.assign}/10</div><div class="l">Assignments</div></div>
          <div class="mini-stat" style="border-color:${s.backlogs?'var(--bad)':'var(--border-2)'}"><div class="v" style="color:${s.backlogs?'var(--bad)':'var(--text)'}">${s.backlogs}</div><div class="l">Backlogs</div></div>
        </div>
        ${gated('mark-attendance', `<button class="btn btn-primary mt12" style="width:100%;justify-content:center" data-act="modal-update-academic" data-id="${s.id}">${icon('edit')}Mark Attendance / Update Marks</button>`)}
        <div class="field-label mt16">Result Summary</div>
        <div class="fs12 text-2">Semester ${s.semester} · ${s.backlogs===0?'All subjects cleared':s.backlogs+' subject(s) pending clearance'} · Provisional CGPA ${(6.2+hrand(s.id+'cg')*3.2).toFixed(2)}</div>
      ` : tab==='Subjects' ? `
        <div class="table-wrap"><table class="dtable"><thead><tr><th>Course Code</th><th>Course</th><th>Faculty</th><th>Attendance</th><th>Classes</th><th>Marks</th></tr></thead><tbody>
        ${courses.map(c => { const sd = subj[c.code]||{att:0,marks:0}; const f=FACULTY.find(x=>x.id===c.facultyId);
          const real = realSubjectAttendance(s.id, c.code);
          const pct = real ? real.pct : sd.att;
          const classesLabel = real ? `${real.present}/${real.total}` : `<span class="text-3">Not marked yet</span>`;
          return `<tr data-act="open-drawer" data-type="course" data-id="${c.code}"><td class="cell-strong">${c.code}</td><td>${esc(c.name)}</td><td>${f?esc(f.name):'<span class="text-3">Unassigned</span>'}</td><td style="color:${attColor(pct)}">${pct}%</td><td>${classesLabel}</td><td>${sd.marks}/40</td></tr>`; }).join('')}
        </tbody></table></div>
        <div class="fs11 text-3 mt8">Attendance % here reflects real marked classes from the Attendance module when available, falling back to the demo estimate otherwise.</div>
      ` : `
        ${window.Backend && window.Backend.supabaseConfigured ? renderRealDocuments(s.id) : `
          ${docRow('id','ID Card', 'JBKP-ID-'+s.erpNo+'.pdf')}
          ${docRow('fileText','Admission Documents', 'Admission-Form-'+s.erpNo+'.pdf')}
          ${docRow('award','Certificates', s.category+'-Certificate.pdf')}
          ${docRow('doc','Other Documents', 'Migration-Certificate.pdf')}
          <div class="fs11 text-3 mt8">Demo document records — connect Supabase Storage (see README) to enable real uploads.</div>
        `}
      `}
    </div>
  `;
}
function dlItem(k,v){ return `<div class="dl-item"><div class="k">${k}</div><div class="v">${esc(v)}</div></div>`; }
function docRow(ic,name,sub){ return `<div class="doc-row">${icon(ic)}<div><div class="dn">${esc(name)}</div><div class="ds">${esc(sub)}</div></div><span class="icon-action" data-act="noop">${icon('eye')}</span></div>`; }

/* ---- Real Supabase-backed documents (used when a backend is connected) ---- */
const docsCache = {};
function renderRealDocuments(studentId){
  if (docsCache[studentId] === undefined){
    docsCache[studentId] = 'loading';
    window.Backend.listStudentDocuments(studentId).then(list => {
      docsCache[studentId] = list;
      if (State.drawer && State.drawer.type==='student' && State.drawer.id===studentId) renderApp();
    }).catch(err => { docsCache[studentId] = 'error'; console.error(err); });
  }
  const state = docsCache[studentId];
  const canUpload = canAct('upload-doc');
  const canDelete = canAct('delete-doc');
  return `
    ${canUpload ? `
      <div class="field-row">
        <label class="field-label">Upload a document or photo (ID card, admission form, certificate, student photo…)</label>
        <input type="file" id="doc-upload-input" data-student="${studentId}" class="text-input" style="padding:6px"
          accept="image/*,.pdf,.doc,.docx,.csv,.xlsx,.xls">
        <div class="fs11 text-3 mt8">Images, PDFs, Word and spreadsheet files up to 10&nbsp;MB.</div>
      </div>
    ` : ''}
    ${state==='loading' ? `<div class="fs12 text-2">Loading documents…</div>` :
      state==='error' ? statusRow('bad','Could not load documents — check Supabase configuration.') :
      (state && state.length) ? state.map(f => `
        <div class="doc-row">
          ${icon('doc')}<div><div class="dn">${esc(f.name)}</div><div class="ds">${f.size?Math.round(f.size/1024)+' KB · ':''}${f.created?fmtDate(f.created.slice(0,10)):''}</div></div>
          <span class="icon-action" title="View" data-act="doc-view" data-path="${esc(f.path)}">${icon('eye')}</span>
          ${canDelete ? `<span class="icon-action" title="Delete" data-act="doc-delete" data-path="${esc(f.path)}" data-student="${studentId}">${icon('trash')}</span>` : ''}
        </div>`).join('') :
      `<div class="fs12 text-2">No documents on file yet.</div>`
    }
  `;
}

/* =========================================================================
   FACULTY PAGE
   ========================================================================= */
function pageFaculty(){
  let rows = filteredFacultyList();
  if (overloadFilterActive) rows = rows.filter(f => workloadBand(facultyWeeklyLoad(f.id))===overloadFilterActive);
  const cols = [
    {key:'name', label:'Faculty', sortable:true, render:r=>`<div class="tr-flex"><div class="avatar-sm">${initials(r.name)}</div><div><div class="cell-strong">${esc(r.name)}</div><div class="cell-sub">${r.id}</div></div></div>`},
    {key:'designation', label:'Designation', sortable:true},
    {key:'qualification', label:'Qualification', sortable:true},
    {key:'expertise', label:'Expertise', sortable:true},
    {key:'_load', label:'Weekly Hrs', sortable:false, render:r=>{ const h=facultyWeeklyLoad(r.id); const b=workloadBand(h); return `<span class="fw7" style="color:${bandColor(b)}">${h}h</span> <span class="fs11 text-2">${b}</span>`; }},
    {key:'status', label:'Status', sortable:true, render:r=>statusBadge(r.status)},
    {key:'_actions', label:'Actions', sortable:false, render:r=>`<span class="icon-action" title="View" data-act="row-view" data-type="faculty" data-id="${r.id}">${icon('eye')}</span>`},
  ];
  window._lastTableExport = window._lastTableExport || {};
  window._lastTableExport['faculty'] = {cols: cols.slice(0,6).map(c=>({...c, csv: c.key==='_load' ? (r=>facultyWeeklyLoad(r.id)+'h') : undefined})), rows};
  const table = dataTable('faculty', cols, rows, {searchKeys:['name','id','expertise'], searchPlaceholder:'Search faculty name or ID…', rowAct:'open-drawer-row', rowId:r=>'faculty:'+r.id});
  return `
    <div class="page-head">
      <div><h1>Faculty</h1><p>${rows.length} faculty ${overloadFilterActive?`· filtered by workload: <b>${overloadFilterActive}</b> <span class="reset-link" data-act="clear-overload-filter">clear</span>`:'matching current filters'}</p></div>
      ${gated('modal-add-faculty', `<button class="btn btn-primary" data-act="modal-add-faculty">${icon('plus')}Add Faculty</button>`)}
    </div>
    ${table}
  `;
}

function facultyDrawer(id){
  const f = FACULTY.find(x=>x.id===id); if (!f) return '';
  const courses = COURSES.filter(c=>c.facultyId===id);
  const h = facultyWeeklyLoad(id); const band = workloadBand(h);
  const theory = courses.reduce((s,c)=>s+c.theory*groupSections(c).length,0);
  const lab = courses.reduce((s,c)=>s+c.lab*groupSections(c).length,0);
  const tab = State.drawer.tab || 'Basic';
  const tabs = ['Basic','Courses','Timetable','Research'];
  const myTT = TT.filter(e=>e.facultyId===id);
  return `
    <div class="drawer-head">
      <div class="tr-flex"><div class="avatar-sm" style="width:40px;height:40px;font-size:13px">${initials(f.name)}</div>
        <div><div class="fw7" style="font-size:15px">${esc(f.name)}</div><div class="fs12 text-2">${f.designation} · ${statusBadge(f.status)}</div></div></div>
      <button class="drawer-close" data-act="close-drawer">${icon('x')}</button>
    </div>
    <div class="drawer-body">
      <div class="section-tabs">${tabs.map(t=>`<button class="${tab===t?'active':''}" data-act="drawer-tab" data-tab="${t}">${t}</button>`).join('')}</div>
      ${tab==='Basic' ? `
        <div class="mini-stats">
          <div class="mini-stat"><div class="v" style="color:${bandColor(band)}">${h}h</div><div class="l">Total Hours</div></div>
          <div class="mini-stat"><div class="v">${theory}h</div><div class="l">Theory Hours</div></div>
          <div class="mini-stat"><div class="v">${lab}h</div><div class="l">Lab Hours</div></div>
          <div class="mini-stat"><div class="v">${courses.length}</div><div class="l">Courses</div></div>
        </div>
        <div class="dl-grid mt16">
          ${dlItem('Faculty ID', f.id)}${dlItem('Qualification', f.qualification)}
          ${dlItem('Department', f.dept)}${dlItem('Joining Date', fmtDate(f.joinDate))}
          ${dlItem('Email', f.email)}${dlItem('Phone', f.phone)}
          ${dlItem('Expertise', f.expertise)}${dlItem('Workload Band', band)}
        </div>
      ` : tab==='Courses' ? `
        <div class="table-wrap"><table class="dtable"><thead><tr><th>Code</th><th>Course</th><th>Sections</th><th>T/L</th></tr></thead><tbody>
        ${courses.map(c=>`<tr data-act="open-drawer" data-type="course" data-id="${c.code}"><td class="cell-strong">${c.code}</td><td>${esc(c.name)}</td><td>${courseSectionsLabel(c)}</td><td>${c.theory}/${c.lab}</td></tr>`).join('') || `<tr><td colspan="4" class="text-2">No courses assigned</td></tr>`}
        </tbody></table></div>
      ` : tab==='Timetable' ? miniTimetable(myTT, 'faculty') : `
        <div class="field-label">Publications</div>
        <div class="fs12 text-2 mb16">${2+Math.floor(hrand(f.id+'pub')*9)} peer-reviewed papers · last published ${2022+Math.floor(hrand(f.id+'yr')*4)}</div>
        <div class="field-label">Activities</div>
        <div class="fs12 text-2 mb16">${pick(['FDP coordinator','NBA documentation lead','Student counselling in-charge','Technical fest coordinator','Placement liaison'])}</div>
        <div class="field-label">Leave Balance</div>
        <div class="fs12 text-2">${8+Math.floor(hrand(f.id+'lv')*10)} days remaining this year</div>
      `}
    </div>
  `;
}
function miniTimetable(entries, kind, opts){
  opts = opts || {};
  const editable = !!opts.editable;
  const byKey = {}; entries.forEach(e => { byKey[e.day+'-'+e.period] = e; });
  let html = `<div class="tt-scroll"><div class="tt-grid">` + `<div></div>` + DAYS.map(d=>`<div class="tt-head">${d}</div>`).join('');
  PERIODS.forEach((p,pi) => {
    html += `<div class="tt-time">${p.n}</div>`;
    DAYS.forEach((d,di) => {
      const e = byKey[di+'-'+pi];
      if (e){
        const c = COURSES.find(x=>x.code===e.courseCode);
        const editAttrs = editable ? `data-act="tt-edit-cell" data-entry="${e.id}"` : `data-act="open-drawer" data-type="course" data-id="${e.courseCode}"`;
        html += `<div class="tt-cell filled ${e.kind==='Lab'?'lab':''} ${editable?'editable':''}" ${editAttrs}><div class="cc">${e.courseCode}</div><div class="cd">${kind==='faculty'?SECTIONS.find(s=>s.id===e.sectionId).name:esc(ROOMS.find(r=>r.id===e.roomId).name)}</div></div>`;
      } else {
        const editAttrs = editable ? `data-act="tt-edit-cell" data-day="${di}" data-period="${pi}" data-section="${opts.sectionId||''}"` : '';
        html += `<div class="tt-cell empty ${editable?'editable':''}" ${editAttrs}>${editable?'+':''}</div>`;
      }
    });
  });
  html += `</div></div><div class="tt-legend"><span><i style="background:var(--blue)"></i>Theory</span><span><i style="background:var(--ok)"></i>Lab</span>${editable?`<span><i style="background:var(--border)"></i>Click + to add · click a class to remove</span>`:''}</div>`;
  return html;
}
'use strict';
/* =========================================================================
   PROGRAMS PAGE
   ========================================================================= */
function pagePrograms(){
  const depPrograms = PROGRAMS.filter(p=>p.dept===State.activeDept);
  const cards = depPrograms.map(p => {
    const secs = SECTIONS.filter(s=>s.programId===p.id);
    const stu = STUDENTS.filter(s=>s.programId===p.id).length;
    const crs = COURSES.filter(c=>c.programId===p.id).length;
    const facIds = new Set(COURSES.filter(c=>c.programId===p.id && c.facultyId).map(c=>c.facultyId));
    return `
      <div class="panel" style="cursor:pointer" data-act="open-drawer" data-type="program" data-id="${p.id}">
        <div class="flex-between mb12">
          <div class="kpi-ic" style="background:#2F75B51a;color:#2F75B5">${icon('programs')}</div>
          <span class="badge-pill badge-ok">${p.status}</span>
        </div>
        <div class="fw7" style="font-size:15px">${p.name}</div>
        <div class="fs12 text-2 mb12">${p.degree} · ${p.duration}</div>
        <div class="mini-stats" style="grid-template-columns:repeat(4,1fr)">
          <div class="mini-stat"><div class="v">${secs.length}</div><div class="l">Sections</div></div>
          <div class="mini-stat"><div class="v">${crs}</div><div class="l">Courses</div></div>
          <div class="mini-stat"><div class="v">${facIds.size}</div><div class="l">Faculty</div></div>
          <div class="mini-stat"><div class="v">${fmtN(stu)}</div><div class="l">Students</div></div>
        </div>
      </div>`;
  }).join('');
  return `
    <div class="page-head"><div><h1>Programs</h1><p>${depPrograms.length} degree programs offered by ${activeDeptObj().name}</p></div>
    ${gated('modal-add-program', `<button class="btn btn-primary" data-act="modal-add-program">${icon('plus')}Add Program</button>`)}</div>
    <div class="grid-2">${cards}</div>
  `;
}
function programDrawer(id){
  const p = PROGRAMS.find(x=>x.id===id); if (!p) return '';
  const secs = SECTIONS.filter(s=>s.programId===p.id);
  const courses = COURSES.filter(c=>c.programId===p.id);
  const stu = STUDENTS.filter(s=>s.programId===p.id).length;
  const facIds = [...new Set(courses.filter(c=>c.facultyId).map(c=>c.facultyId))];
  return `
    <div class="drawer-head">
      <div><div class="fw7" style="font-size:15px">${p.name}</div><div class="fs12 text-2">${p.degree}</div></div>
      <button class="drawer-close" data-act="close-drawer">${icon('x')}</button>
    </div>
    <div class="drawer-body">
      <div class="mini-stats">
        <div class="mini-stat"><div class="v">${secs.length}</div><div class="l">Sections</div></div>
        <div class="mini-stat"><div class="v">${courses.length}</div><div class="l">Courses</div></div>
        <div class="mini-stat"><div class="v">${facIds.length}</div><div class="l">Faculty</div></div>
        <div class="mini-stat"><div class="v">${fmtN(stu)}</div><div class="l">Students</div></div>
      </div>
      <div class="dl-grid mt16 mb16">
        ${dlItem('Program ID', p.id)}${dlItem('Duration', p.duration)}
        ${dlItem('Intake', p.intake)}${dlItem('Department', p.dept)}
      </div>
      <div class="field-label">Sections &amp; Semesters</div>
      <div class="table-wrap mb16"><table class="dtable"><thead><tr><th>Section</th><th>Semester</th><th>Strength</th></tr></thead><tbody>
      ${secs.map(s=>`<tr data-act="dist-drill" data-mode="Section" data-key="${esc(s.label.replace(/^.*Sec /,'Sec '))}"><td class="cell-strong">${s.label}</td><td>Sem ${s.semester}</td><td>${s.strength}</td></tr>`).join('')}
      </tbody></table></div>
      <div class="field-label">Faculty Teaching This Program</div>
      <div class="fs12 text-2">${facIds.map(fid=>FACULTY.find(f=>f.id===fid).name).join(', ') || 'None assigned'}</div>
    </div>`;
}

/* =========================================================================
   COURSES PAGE
   ========================================================================= */
function pageCourses(){
  const rows = filteredCoursesList();
  const cols = [
    {key:'code', label:'Course Code', sortable:true, render:r=>`<span class="cell-strong mono">${r.code}</span>`},
    {key:'name', label:'Course Name', sortable:true},
    {key:'programId', label:'Program', sortable:true, render:r=>PROGRAMS.find(p=>p.id===r.programId).short},
    {key:'semester', label:'Semester', sortable:true, render:r=>'Sem '+r.semester},
    {key:'credits', label:'Credits', sortable:true},
    {key:'type', label:'Type', sortable:true},
    {key:'_faculty', label:'Faculty', sortable:false, render:r=> r.facultyId ? esc(FACULTY.find(f=>f.id===r.facultyId).name) : `<span class="badge-pill badge-warn">Unassigned</span>`},
    {key:'status', label:'Status', sortable:true, render:r=>statusBadge(r.status)},
    {key:'_actions', label:'Actions', sortable:false, render:r=>`
      <span class="icon-action" title="View" data-act="row-view" data-type="course" data-id="${r.code}">${icon('eye')}</span>
      ${!r.facultyId && canAct('assign-faculty') ? `<span class="icon-action" title="Assign faculty" data-act="assign-faculty" data-code="${r.code}">${icon('userCheck')}</span>` : ''}
    `},
  ];
  window._lastTableExport = window._lastTableExport || {};
  window._lastTableExport['courses'] = {cols: cols.slice(0,7).map(c=>({...c, csv: c.key==='_faculty' ? (r=>r.facultyId?FACULTY.find(f=>f.id===r.facultyId).name:'Unassigned') : undefined})), rows};
  const table = dataTable('courses', cols, rows, {searchKeys:['code','name'], searchPlaceholder:'Search course code or name…', rowAct:'open-drawer-row', rowId:r=>'course:'+r.code});
  return `
    <div class="page-head">
      <div><h1>Courses</h1><p>${rows.length} courses · ${rows.filter(c=>!c.facultyId).length} unassigned</p></div>
      ${gated('modal-add-course', `<button class="btn btn-primary" data-act="modal-add-course">${icon('plus')}Add Course</button>`)}
    </div>
    ${table}
  `;
}
function courseDrawer(code){
  const c = COURSES.find(x=>x.code===code); if (!c) return '';
  const f = c.facultyId ? FACULTY.find(x=>x.id===c.facultyId) : null;
  const secs = groupSections(c);
  const stu = STUDENTS.filter(s=>s.programId===c.programId && s.semester===c.semester);
  const pct = syllabusPct(c.code);
  const syl = SYL[c.code];
  const tab = State.drawer.tab || 'Info';
  const tabs = ['Info','Syllabus','Students','CO/PO'];
  return `
    <div class="drawer-head">
      <div><div class="fw7" style="font-size:15px">${c.code}</div><div class="fs12 text-2">${esc(c.name)}</div></div>
      <button class="drawer-close" data-act="close-drawer">${icon('x')}</button>
    </div>
    <div class="drawer-body">
      <div class="section-tabs">${tabs.map(t=>`<button class="${tab===t?'active':''}" data-act="drawer-tab" data-tab="${t}">${t}</button>`).join('')}</div>
      ${tab==='Info' ? `
        ${!f ? `<div class="alert-card mb16">${icon('alertTriangle')}<div><div class="at">Faculty not assigned</div><div class="ad">Assign a faculty member to enable timetable and syllabus tracking.</div></div></div>` : ''}
        <div class="dl-grid">
          ${dlItem('Program', PROGRAMS.find(p=>p.id===c.programId).short)}${dlItem('Semester', 'Semester '+c.semester)}
          ${dlItem('Sections', courseSectionsLabel(c))}${dlItem('Credits', c.credits)}
          ${dlItem('Theory Hours/wk', c.theory)}${dlItem('Lab Hours/wk', c.lab)}
          ${dlItem('Course Type', c.type)}${dlItem('Status', c.status)}
          ${dlItem('Faculty', f ? f.name : 'Unassigned')}${dlItem('Students Enrolled', stu.length)}
        </div>
        ${!f && canAct('assign-faculty') ? `<button class="btn btn-primary mt16" style="width:100%;justify-content:center" data-act="assign-faculty" data-code="${c.code}">${icon('userCheck')}Assign Faculty</button>` : ''}
      ` : tab==='Syllabus' ? `
        <div class="flex-between mb8"><div class="fw7">Overall completion</div><div class="fw7" style="color:${pct>=90?'var(--ok)':pct>=30?'var(--warn)':'var(--bad)'}">${pct}%</div></div>
        <div class="prog-track mb16"><div class="prog-fill" style="width:${pct}%;background:${pct>=90?'var(--ok)':pct>=30?'var(--warn)':'var(--bad)'}"></div></div>
        ${syl ? syl.units.map(u => `
          <div class="mb12">
            <div class="flex-between fs12"><span class="fw7">Unit ${u.n} · ${u.title}</span><span class="text-2">${u.done}/${u.planned} hrs</span></div>
            <div class="prog-track" style="height:6px;margin-top:4px"><div class="prog-fill" style="height:100%;width:${Math.round(u.done/u.planned*100)}%;background:var(--blue)"></div></div>
          </div>`).join('') : ''}
        <div class="fs11 text-3 mt12">Last updated ${syl?fmtDate(syl.updated):'—'}</div>
      ` : tab==='Students' ? `
        <div class="table-wrap"><table class="dtable"><thead><tr><th>ERP No</th><th>Name</th><th>Section</th><th>Attendance</th></tr></thead><tbody>
        ${stu.slice(0,60).map(s=>`<tr data-act="open-drawer" data-type="student" data-id="${s.id}"><td class="mono">${s.erpNo}</td><td>${esc(s.name)}</td><td>${s.section}</td><td style="color:${attColor(s.att)}">${s.att}%</td></tr>`).join('')}
        </tbody></table></div>
        ${stu.length>60?`<div class="fs11 text-3 mt8">Showing 60 of ${stu.length} students.</div>`:''}
      ` : `
        <div class="fs12 text-2 mb12">Course Outcome to Program Outcome mapping (demo strengths, 1–3 scale).</div>
        <div class="table-wrap"><table class="dtable"><thead><tr><th>CO</th>${[1,2,3,4,5].map(i=>`<th>PO${i}</th>`).join('')}</tr></thead><tbody>
        ${[1,2,3].map(co=>`<tr><td class="cell-strong">CO${co}</td>${[1,2,3,4,5].map(po=>`<td>${ri(1,3)}</td>`).join('')}</tr>`).join('')}
        </tbody></table></div>
      `}
    </div>`;
}

/* =========================================================================
   WORKLOAD PAGE (full)
   ========================================================================= */
function pageWorkload(){
  const fac = filteredFacultyList();
  const rows = fac.map(f => ({f, h: facultyWeeklyLoad(f.id), band: workloadBand(facultyWeeklyLoad(f.id))})).sort((a,b)=>b.h-a.h);
  const max = Math.max(1, ...rows.map(r=>r.h));
  const avg = rows.length ? (rows.reduce((s,r)=>s+r.h,0)/rows.length).toFixed(1) : 0;
  return `
    <div class="page-head"><div><h1>Faculty Workload</h1><p>Weekly teaching hours across ${rows.length} faculty · average ${avg}h</p></div>
    <button class="btn" data-act="export-workload">${icon('download')}Export CSV</button></div>
    <div class="mini-stats mb16">
      <div class="mini-stat" style="border-color:var(--ok)"><div class="v" style="color:var(--ok)">${rows.filter(r=>r.band==='Normal').length}</div><div class="l">Normal</div></div>
      <div class="mini-stat" style="border-color:var(--warn)"><div class="v" style="color:var(--warn)">${rows.filter(r=>r.band==='High').length}</div><div class="l">High</div></div>
      <div class="mini-stat" style="border-color:var(--bad)"><div class="v" style="color:var(--bad)">${rows.filter(r=>r.band==='Overloaded').length}</div><div class="l">Overloaded</div></div>
      <div class="mini-stat"><div class="v">${max}h</div><div class="l">Peak Load</div></div>
    </div>
    <div class="panel">
      <div class="bar-chart" style="max-height:640px">
        ${rows.map(r => `<div class="bar-row" data-act="open-drawer" data-type="faculty" data-id="${r.f.id}">
            <div class="bn wide">${esc(r.f.name)}</div>
            <div class="bar-track tall"><div class="bar-fill" style="width:${Math.round(r.h/max*100)}%;background:${bandColor(r.band)}"></div></div>
            <div class="bar-val wide">${r.h}h · ${r.band}</div>
          </div>`).join('') || emptyState('faculty','No faculty match current filters')}
      </div>
    </div>
  `;
}
'use strict';
/* =========================================================================
   TIMETABLE PAGE
   ========================================================================= */
let ttView = 'Section';
let ttViewId = null;
let ttEditMode = false;
function ttDefaultId(){
  if (ttView==='Section') return (State.filters.section) || SECTIONS[0].id;
  if (ttView==='Faculty') return State.filters.faculty || FACULTY[0].id;
  if (ttView==='Room') return State.filters.room || ROOMS[0].id;
  return null;
}
function pageTimetable(){
  if (!ttViewId || ttView==='Day' || ttView==='Week') ttViewId = ttDefaultId();
  const conf = computeConflicts(filteredTTList());
  const picker = ttView==='Section' ? SECTIONS.map(s=>({v:s.id,l:s.label})) :
                 ttView==='Faculty' ? FACULTY.map(f=>({v:f.id,l:f.name})) :
                 ttView==='Room' ? ROOMS.map(r=>({v:r.id,l:r.name})) : null;
  let entries;
  if (ttView==='Section') entries = TT.filter(e=>e.sectionId===ttViewId);
  else if (ttView==='Faculty') entries = TT.filter(e=>e.facultyId===ttViewId);
  else if (ttView==='Room') entries = TT.filter(e=>e.roomId===ttViewId);
  else entries = filteredTTList();

  return `
    <div class="page-head">
      <div><h1>Timetable</h1><p>${entries.length} scheduled classes in this view · ${conf.total?`<span style="color:var(--bad);font-weight:700">${conf.total} conflicts detected</span>`:'<span style="color:var(--ok);font-weight:700">No conflicts</span>'}</p></div>
      <div class="head-actions">
        ${gated('tt-toggle-edit', `<button class="btn ${ttEditMode?'btn-primary':''}" data-act="tt-toggle-edit">${icon('edit')}${ttEditMode?'Editing…':'Edit Mode'}</button>`)}
        <button class="btn btn-primary" data-act="export-timetable">${icon('download')}Export</button>
      </div>
    </div>
    <div class="panel mb16">
      <div class="flex-between" style="flex-wrap:wrap;gap:10px">
        <div class="seg">${['Day','Week','Faculty','Section','Room'].map(v=>`<button class="${ttView===v?'active':''}" data-act="tt-view" data-view="${v}">${v}</button>`).join('')}</div>
        ${picker ? `<select class="select-input" style="width:220px" data-act="tt-pick">${picker.map(o=>`<option value="${esc(o.v)}" ${ttViewId===o.v?'selected':''}>${esc(o.l)}</option>`).join('')}</select>` : ''}
      </div>
    </div>
    ${ttEditMode ? (ttView==='Section' ? `
      <div class="status-row ok mb12">${icon('checkCircle')}<span class="lbl">Edit mode: click + to add a theory class (only faculty and rooms free at that slot are offered — conflicting choices aren't shown), click a class to remove it. Lab blocks are scheduled automatically and aren't edited here.</span></div>
    ` : `
      <div class="alert-card mb12">${icon('alertTriangle')}<div><div class="at">Switch to Section view to edit</div><div class="ad">Manual editing works one section at a time — pick "Section" above and choose a section to start.</div></div></div>
    `) : ''}
    <div class="panel">
      ${entries.length || (ttEditMode && ttView==='Section') ? miniTimetable(entries, ttView==='Faculty'?'faculty':'section', {editable: ttEditMode && ttView==='Section', sectionId: ttView==='Section'?ttViewId:null}) : emptyState('timetable','No classes scheduled for this selection')}
    </div>
  `;
}

/* =========================================================================
   SYLLABUS PAGE
   ========================================================================= */
function pageSyllabus(){
  const courses = filteredCoursesList().filter(c=>c.facultyId);
  const data = courses.map(c => ({c, pct: syllabusPct(c.code), f: FACULTY.find(f=>f.id===c.facultyId), syl: SYL[c.code]}));
  const completed = data.filter(x=>x.pct>=90).length, inProg = data.filter(x=>x.pct>=30&&x.pct<90).length, pending = data.filter(x=>x.pct<30).length;
  const cols = [
    {key:'code', label:'Code', sortable:true, render:r=>`<span class="cell-strong mono">${r.c.code}</span>`},
    {key:'name', label:'Course', sortable:true, render:r=>esc(r.c.name)},
    {key:'faculty', label:'Faculty', sortable:true, render:r=>esc(r.f.name)},
    {key:'units', label:'Units', sortable:false, render:r=>r.syl.units.length},
    {key:'completed', label:'Completed', sortable:false, render:r=>r.syl.units.reduce((a,u)=>a+u.done,0)+'/'+r.syl.units.reduce((a,u)=>a+u.planned,0)},
    {key:'pct', label:'Completion', sortable:true, render:r=>`<div style="display:flex;align-items:center;gap:8px;min-width:120px"><div class="prog-track" style="width:70px"><div class="prog-fill" style="width:${r.pct}%;background:${r.pct>=90?'var(--ok)':r.pct>=30?'var(--warn)':'var(--bad)'}"></div></div><span class="fw7">${r.pct}%</span></div>`},
    {key:'updated', label:'Last Updated', sortable:true, render:r=>fmtDate(r.syl.updated)},
  ];
  data.forEach(d=>{d.name=d.c.name; d.code=d.c.code; d.faculty=d.f.name; d.updated=d.syl.updated;});
  window._lastTableExport = window._lastTableExport || {};
  window._lastTableExport['syllabus'] = {cols: cols.map(c=>({...c, csv: c.key==='pct'?(r=>r.pct+'%'):undefined})), rows:data};
  const table = dataTable('syllabus', cols, data, {searchKeys:['code','name','faculty'], searchPlaceholder:'Search course or faculty…', rowAct:'open-drawer-row', rowId:r=>'course:'+r.c.code});
  return `
    <div class="page-head"><div><h1>Syllabus</h1><p>Unit-wise completion tracking across ${data.length} courses</p></div></div>
    <div class="mini-stats mb16">
      <div class="mini-stat" style="border-color:var(--ok)"><div class="v" style="color:var(--ok)">${completed}</div><div class="l">Completed (≥90%)</div></div>
      <div class="mini-stat" style="border-color:var(--warn)"><div class="v" style="color:var(--warn)">${inProg}</div><div class="l">In Progress</div></div>
      <div class="mini-stat" style="border-color:var(--bad)"><div class="v" style="color:var(--bad)">${pending}</div><div class="l">Pending (&lt;30%)</div></div>
      <div class="mini-stat"><div class="v">${data.length?Math.round(data.reduce((a,x)=>a+x.pct,0)/data.length):0}%</div><div class="l">Average</div></div>
    </div>
    ${table}
  `;
}

/* =========================================================================
   ROOMS PAGE
   ========================================================================= */
function pageRooms(){
  const deptRooms = ROOMS.filter(r=>r.dept===State.activeDept);
  const rows = deptRooms.map(r => {
    const tt = TT.filter(e=>e.roomId===r.id);
    const used = tt.length;
    return {r, pct: Math.round(used/SLOTS*100), used, tt};
  });
  const conf = computeConflicts(filteredTTList()).room;
  const cols = [
    {key:'name', label:'Room', sortable:true, render:x=>`<div class="tr-flex"><div class="kpi-ic" style="width:28px;height:28px;background:#2F75B51a;color:#2F75B5">${icon(x.r.type==='Laboratory'?'droplet':'rooms')}</div><div><div class="cell-strong">${x.r.name}</div><div class="cell-sub">${x.r.desc||x.r.type}</div></div></div>`, csv:x=>x.r.name},
    {key:'type', label:'Type', sortable:true, render:x=>x.r.type, csv:x=>x.r.type},
    {key:'capacity', label:'Capacity', sortable:true, render:x=>x.r.capacity, csv:x=>x.r.capacity},
    {key:'pct', label:'Utilization', sortable:true, render:x=>`<div style="display:flex;align-items:center;gap:8px;min-width:110px"><div class="prog-track" style="width:70px"><div class="prog-fill" style="width:${x.pct}%;background:${x.pct>85?'var(--bad)':x.pct>60?'var(--blue)':'var(--ok)'}"></div></div><span class="fw7">${x.pct}%</span></div>`, csv:x=>x.pct+'%'},
    {key:'status', label:'Status', sortable:true, render:x=>statusBadge(x.r.status), csv:x=>x.r.status},
    {key:'_actions', label:'Actions', sortable:false, render:x=>`<span class="icon-action" data-act="row-view" data-type="room" data-id="${x.r.id}">${icon('eye')}</span>`},
  ];
  cols.forEach(c=>{}); // sort keys align to synthetic 'name'/'type'/'capacity'/'pct'/'status'
  rows.forEach(x=>{x.name=x.r.name; x.type=x.r.type; x.capacity=x.r.capacity; x.status=x.r.status;});
  window._lastTableExport = window._lastTableExport || {};
  window._lastTableExport['rooms'] = {cols, rows};
  const table = dataTable('rooms', cols, rows, {searchKeys:['name','type'], searchPlaceholder:'Search room…', rowAct:'open-drawer-row', rowId:x=>'room:'+x.r.id});
  return `
    <div class="page-head"><div><h1>Rooms</h1><p>${deptRooms.length} rooms · ${rows.filter(x=>x.used>0).length} occupied · ${conf?conf+' conflicts':'no conflicts'}</p></div>
    ${gated('modal-add-room', `<button class="btn btn-primary" data-act="modal-add-room">${icon('plus')}Add Room</button>`)}</div>
    ${table}
  `;
}
function roomDrawer(id){
  const r = ROOMS.find(x=>x.id===id); if (!r) return '';
  const tt = TT.filter(e=>e.roomId===id);
  const pct = Math.round(tt.length/SLOTS*100);
  return `
    <div class="drawer-head">
      <div><div class="fw7" style="font-size:15px">${r.name}</div><div class="fs12 text-2">${r.type}${r.desc?' · '+r.desc:''}</div></div>
      <button class="drawer-close" data-act="close-drawer">${icon('x')}</button>
    </div>
    <div class="drawer-body">
      <div class="mini-stats">
        <div class="mini-stat"><div class="v">${r.capacity}</div><div class="l">Capacity</div></div>
        <div class="mini-stat"><div class="v">${pct}%</div><div class="l">Utilization</div></div>
        <div class="mini-stat"><div class="v">${tt.length}</div><div class="l">Classes/wk</div></div>
        <div class="mini-stat"><div class="v">${SLOTS-tt.length}</div><div class="l">Free Periods</div></div>
      </div>
      <div class="field-label mt16 mb8">Weekly Timetable</div>
      ${miniTimetable(tt, 'room')}
    </div>`;
}
'use strict';
/* =========================================================================
   REPORTS PAGE
   ========================================================================= */
const REPORT_DEFS = [
  {id:'workload', name:'Faculty Workload Report', ic:'workload', desc:'Weekly hours, bands and course load per faculty'},
  {id:'students', name:'Student List', ic:'students', desc:'Full ERP roster with attendance and marks'},
  {id:'attendance', name:'Attendance Report', ic:'activity', desc:'Section-wise attendance snapshot'},
  {id:'timetable', name:'Timetable', ic:'timetable', desc:'Published weekly timetable, all sections'},
  {id:'rooms', name:'Room Utilization', ic:'rooms', desc:'Occupancy % and conflicts by room'},
  {id:'syllabus', name:'Syllabus Progress', ic:'syllabus', desc:'Unit completion across all courses'},
  {id:'courses', name:'Course Allocation', ic:'courses', desc:'Course-to-faculty mapping and status'},
  {id:'faculty', name:'Faculty List', ic:'faculty', desc:'Roster with designation and contact details'},
  {id:'programs', name:'Program Report', ic:'programs', desc:'Enrollment and section summary by program'},
];
function pageReports(){
  if (State.routeParam === 'audit') return pageAuditLog();
  return `
    <div class="page-head"><div><h1>Reports</h1><p>Generate and export department reports as CSV</p></div>
    <button class="btn" data-act="nav" data-route="reports" data-param="audit">${icon('activity')}View Audit Log</button></div>
    <div class="grid-3">
      ${REPORT_DEFS.map(r => `
        <div class="panel">
          <div class="kpi-ic mb12" style="background:#2F75B51a;color:#2F75B5">${icon(r.ic)}</div>
          <div class="fw7 mb8">${r.name}</div>
          <div class="fs12 text-2 mb16">${r.desc}</div>
          <div class="head-actions">
            <button class="btn btn-sm" data-act="gen-report" data-id="${r.id}" data-fmt="csv">${icon('download')}CSV</button>
            <button class="btn btn-sm" data-act="gen-report" data-id="${r.id}" data-fmt="excel">${icon('download')}Excel</button>
            <button class="btn btn-sm" data-act="gen-report" data-id="${r.id}" data-fmt="pdf">${icon('download')}PDF</button>
          </div>
        </div>`).join('')}
    </div>
  `;
}
function pageAuditLog(){
  const rows = AUDIT_SEED.map((a,i)=>({...a, id:i}));
  const cols = [
    {key:'user', label:'User', sortable:true},
    {key:'action', label:'Action', sortable:true},
    {key:'module', label:'Module', sortable:true},
    {key:'rec', label:'Record', sortable:true, render:r=>`<span class="mono">${r.rec}</span>`},
    {key:'old', label:'Old Value', sortable:false},
    {key:'nw', label:'New Value', sortable:false},
    {key:'mins', label:'When', sortable:true, render:r=>relTime(r.mins)},
  ];
  window._lastTableExport = window._lastTableExport || {};
  window._lastTableExport['audit'] = {cols, rows};
  return `
    <div class="page-head"><div><h1>Audit Log</h1><p>Every significant change across the department system</p></div>
    <button class="btn" data-act="nav" data-route="reports">${icon('arrowLeft')}Back to Reports</button></div>
    ${dataTable('audit', cols, rows, {searchKeys:['user','action','module','rec']})}
  `;
}
function genReport(id, fmt){
  const dept = State.activeDept;
  const dFaculty = FACULTY.filter(f=>f.dept===dept);
  const dStudents = STUDENTS.filter(s=>s.dept===dept);
  const dSections = SECTIONS.filter(s=>deptOfSection(s)===dept);
  const dRooms = ROOMS.filter(r=>r.dept===dept);
  const dCourses = COURSES.filter(c=>deptOfCourse(c)===dept);
  const dPrograms = PROGRAMS.filter(p=>p.dept===dept);
  const dSectionIds = new Set(dSections.map(s=>s.id));
  const dTT = TT.filter(e=>dSectionIds.has(e.sectionId));
  const map = {
    workload:{cols:[{label:'Faculty',csv:r=>r.f.name},{label:'Designation',csv:r=>r.f.designation},{label:'Weekly Hours',csv:r=>facultyWeeklyLoad(r.f.id)},{label:'Band',csv:r=>workloadBand(facultyWeeklyLoad(r.f.id))}], rows:dFaculty.map(f=>({f}))},
    students:{cols:[{label:'ERP No',csv:r=>r.erpNo},{label:'Name',csv:r=>r.name},{label:'Program',csv:r=>PROGRAMS.find(p=>p.id===r.programId).short},{label:'Semester',csv:r=>r.semester},{label:'Section',csv:r=>r.section},{label:'Attendance',csv:r=>r.att+'%'},{label:'Marks',csv:r=>r.marks}], rows:dStudents},
    attendance:{cols:[{label:'Section',csv:r=>r.label},{label:'Avg Attendance %',csv:r=>{const st=STUDENTS.filter(s=>s.sectionId===r.id); return st.length?Math.round(st.reduce((a,s)=>a+s.att,0)/st.length):0;}}], rows:dSections},
    timetable:{cols:[{label:'Day',csv:r=>DAY_FULL[r.day]},{label:'Period',csv:r=>PERIODS[r.period].n},{label:'Course',csv:r=>r.courseCode},{label:'Section',csv:r=>SECTIONS.find(s=>s.id===r.sectionId).name},{label:'Faculty',csv:r=>FACULTY.find(f=>f.id===r.facultyId).name},{label:'Room',csv:r=>ROOMS.find(x=>x.id===r.roomId).name}], rows:dTT},
    rooms:{cols:[{label:'Room',csv:r=>r.name},{label:'Type',csv:r=>r.type},{label:'Utilization %',csv:r=>Math.round(TT.filter(e=>e.roomId===r.id).length/SLOTS*100)}], rows:dRooms},
    syllabus:{cols:[{label:'Course',csv:r=>r.code},{label:'Name',csv:r=>r.name},{label:'Completion %',csv:r=>syllabusPct(r.code)}], rows:dCourses.filter(c=>c.facultyId)},
    courses:{cols:[{label:'Code',csv:r=>r.code},{label:'Name',csv:r=>r.name},{label:'Program',csv:r=>r.programId},{label:'Faculty',csv:r=>r.facultyId?FACULTY.find(f=>f.id===r.facultyId).name:'Unassigned'}], rows:dCourses},
    faculty:{cols:[{label:'ID',csv:r=>r.id},{label:'Name',csv:r=>r.name},{label:'Designation',csv:r=>r.designation},{label:'Email',csv:r=>r.email},{label:'Phone',csv:r=>r.phone}], rows:dFaculty},
    programs:{cols:[{label:'Program',csv:r=>r.name},{label:'Students',csv:r=>STUDENTS.filter(s=>s.programId===r.id).length},{label:'Sections',csv:r=>SECTIONS.filter(s=>s.programId===r.id).length}], rows:dPrograms},
  };
  const def = map[id]; if (!def) return;
  if (fmt !== 'csv'){ toast(`${fmt.toUpperCase()} export is coming soon — exporting as CSV instead.`, 'warn'); }
  downloadCSV(id+'-report.csv', toCSV(def.cols, def.rows));
  toast('Report generated: '+REPORT_DEFS.find(r=>r.id===id).name, 'ok');
}

/* =========================================================================
   ERP IMPORT PAGE
   ========================================================================= */
let erpState = {stage:'idle', rows:[], errors:[], dup:0};
function pageErp(){
  const st = erpState;
  const deptStudents = STUDENTS.filter(s=>s.dept===State.activeDept);
  return `
    <div class="page-head"><div><h1>ERP Data</h1><p>Import and manage student ERP records</p></div></div>
    <div class="panel mb16">
      <div class="panel-title mb8">Import ERP Data</div>
      <div class="fs12 text-2 mb12">Paste CSV data with headers: <span class="mono">erpNo,rollNo,name,programId,semester,section,academicYear</span>. Program codes for ${activeDeptObj().name}: ${PROGRAMS.filter(p=>p.dept===State.activeDept).map(p=>p.id).join(', ')}.</div>
      <textarea id="erp-paste" rows="6" style="width:100%;border:1px solid var(--border);border-radius:8px;padding:10px;font-family:var(--font-num);font-size:12px;resize:vertical" placeholder="erpNo,rollNo,name,programId,semester,section,academicYear
26CSE00501,26271050,Aman Verma,BTECH,3,A,2026-27"></textarea>
      <div style="display:flex;gap:8px;margin-top:10px">
        <button class="btn" data-act="erp-sample">${icon('fileText')}Load Sample</button>
        ${canAct('erp-validate') ? `<button class="btn btn-primary" data-act="erp-validate">${icon('upload')}Validate &amp; Preview</button>` : `<div class="fs11 text-3">Your role does not have permission to import ERP data.</div>`}
      </div>
    </div>
    ${st.stage==='preview' ? `
      <div class="panel mb16">
        <div class="panel-head"><div class="panel-title">Preview (${st.rows.length} records)</div>
          ${st.errors.length ? `<span class="badge-pill badge-bad">${st.errors.length} errors</span>` : `<span class="badge-pill badge-ok">All rows valid</span>`}
        </div>
        ${st.dup ? statusRow('warn', `${st.dup} record(s) match an existing ERP number — these will be skipped, not overwritten.`) : ''}
        ${st.errors.length ? `<div class="mb12">${st.errors.slice(0,5).map(e=>statusRow('bad', e)).join('')}</div>` : ''}
        <div class="table-wrap"><table class="dtable"><thead><tr><th>ERP No</th><th>Roll No</th><th>Name</th><th>Program</th><th>Sem</th><th>Section</th></tr></thead><tbody>
        ${st.rows.slice(0,10).map(r=>`<tr><td class="mono">${esc(r.erpNo)}</td><td class="mono">${esc(r.rollNo)}</td><td>${esc(r.name)}</td><td>${esc(r.programId)}</td><td>${esc(r.semester)}</td><td>${esc(r.section)}</td></tr>`).join('')}
        </tbody></table></div>
        <div style="display:flex;gap:8px;margin-top:12px">
          ${gated('erp-confirm', `<button class="btn btn-primary" data-act="erp-confirm" ${st.errors.length?'disabled':''}>${icon('check')}Confirm Import</button>`)}
          <button class="btn" data-act="erp-cancel">Cancel</button>
        </div>
      </div>` : ''}
    <div class="panel">
      <div class="panel-title mb12">ERP Record Summary — ${esc(activeDeptObj().name)}</div>
      <div class="mini-stats">
        <div class="mini-stat"><div class="v">${fmtN(deptStudents.length)}</div><div class="l">Total Records</div></div>
        <div class="mini-stat"><div class="v">${deptStudents.filter(s=>s.status==='Active').length}</div><div class="l">Active</div></div>
        <div class="mini-stat"><div class="v">${deptStudents.filter(s=>s.status==='Dropped').length}</div><div class="l">Dropped</div></div>
        <div class="mini-stat"><div class="v">${deptStudents.filter(s=>s.status==='Detained').length}</div><div class="l">Detained</div></div>
      </div>
    </div>
  `;
}
function erpValidate(){
  const text = document.getElementById('erp-paste').value.trim();
  if (!text){ toast('Paste CSV data first', 'warn'); return; }
  const lines = text.split('\n').filter(l=>l.trim());
  const head = lines[0].split(',').map(h=>h.trim());
  const required = ['erpNo','rollNo','name','programId','semester','section','academicYear'];
  const missing = required.filter(r=>!head.includes(r));
  const errors = [];
  if (missing.length){ errors.push('Missing required column(s): '+missing.join(', ')); erpState = {stage:'preview', rows:[], errors, dup:0}; renderApp(); return; }
  const idx = {}; required.forEach(r=>idx[r]=head.indexOf(r));
  const existing = new Set(STUDENTS.map(s=>s.erpNo));
  let dup = 0;
  const rows = lines.slice(1).map((l,i)=>{
    const parts = l.split(',');
    const row = {}; required.forEach(r=>row[r]=(parts[idx[r]]||'').trim());
    if (!row.erpNo || !row.name) errors.push(`Row ${i+2}: missing ERP number or name`);
    const validProgIds = PROGRAMS.filter(p=>p.dept===State.activeDept).map(p=>p.id);
    if (!validProgIds.includes(row.programId)) errors.push(`Row ${i+2}: unknown program code "${row.programId}" for ${activeDeptObj().name}`);
    if (existing.has(row.erpNo)) { dup++; }
    return row;
  });
  erpState = {stage:'preview', rows, errors, dup};
  renderApp();
}
function erpConfirm(){
  const touchedSections = new Set();
  let imported = 0, skippedDup = 0, skippedNoSection = 0;
  const existing = new Set(STUDENTS.map(s => s.erpNo));

  erpState.rows.forEach(row => {
    if (!row.erpNo || !row.name) return; // already flagged as an error, confirm button is disabled when errors exist anyway
    if (existing.has(row.erpNo)) { skippedDup++; return; }

    const semester = parseInt(row.semester, 10) || 1;
    const sectionName = (row.section || 'A').trim().toUpperCase().slice(0, 1);
    let section = SECTIONS.find(s => s.programId === row.programId && s.semester === semester && s.name === sectionName);
    if (!section) section = SECTIONS.find(s => s.programId === row.programId && s.semester === semester);
    if (!section) { skippedNoSection++; return; }

    const erpNo = row.erpNo;
    const student = {
      id: 'ST' + pad(STUDENTS.length + 1, 4), erpNo, rollNo: row.rollNo || erpNo, name: row.name,
      father: '—', mother: '—', programId: row.programId, dept: State.activeDept, semester,
      section: section.name, sectionId: section.id, academicYear: row.academicYear || State.filters.ay,
      admissionYear: new Date().getFullYear(), email: erpNo.toLowerCase() + '@students.jbkp-demo.example',
      mobile: '—', gender: '—', dob: '—', address: '—', category: '—', admissionType: 'Regular', status: 'Active',
      att: 85, marks: 28, assign: 7, backlogs: 0, subj: null
    };
    STUDENTS.push(student);
    existing.add(erpNo);
    section.strength++;
    touchedSections.add(section.id);
    syncBackend('addStudent', student);
    imported++;
  });
  touchedSections.forEach(sid => {
    const s = SECTIONS.find(x => x.id === sid);
    if (s) syncBackend('setSectionStrength', s.id, s.strength);
  });

  const persistNote = State.backendMode === 'auth' ? 'saved to your database' : 'added for this session — connect Firebase (see README) to persist permanently';
  const skippedNote = (skippedDup || skippedNoSection)
    ? ` (${[skippedDup ? skippedDup + ' duplicate ERP number(s)' : null, skippedNoSection ? skippedNoSection + ' with no matching section' : null].filter(Boolean).join(', ')} skipped)`
    : '';
  toast(`${imported} student record(s) imported, ${persistNote}${skippedNote}.`, imported ? 'ok' : 'warn');

  erpState = {stage:'idle', rows:[], errors:[], dup:0};
  renderApp();
}

/* =========================================================================
   SETTINGS PAGE
   ========================================================================= */
const ROLES = [
  {n:'Super Admin', d:'Full access to every module, including system configuration.'},
  {n:'HOD', d:'Full CSE department access: approvals, workload, timetable overrides.'},
  {n:'Department Coordinator', d:'Manages academics, timetable and workload allocation.'},
  {n:'Faculty', d:'Access limited to own courses, timetable, attendance, syllabus and marks.'},
  {n:'Data Entry Operator', d:'Enters and updates student, faculty and ERP data.'},
  {n:'Viewer', d:'Read-only access to the dashboard and reports.'},
];
function pageSettings(){
  const s = State.settings;
  return `
    <div class="page-head"><div><h1>Settings</h1><p>Workload thresholds, roles and preferences</p></div></div>
    <div class="grid-2">
      <div class="panel settings-grp">
        <h3>Workload Thresholds</h3>
        <div class="settings-row">
          <div><div class="st">Normal — up to</div><div class="sd">Weekly hours considered a normal teaching load</div></div>
          <input type="number" class="num-input" value="${s.normalMax}" min="1" max="40" data-act="set-threshold" data-key="normalMax" ${canAct('set-threshold')?'':'disabled'}>
        </div>
        <div class="settings-row">
          <div><div class="st">High — up to</div><div class="sd">Above this is flagged Overloaded</div></div>
          <input type="number" class="num-input" value="${s.highMax}" min="1" max="40" data-act="set-threshold" data-key="highMax" ${canAct('set-threshold')?'':'disabled'}>
        </div>
        <div class="settings-row">
          <div><div class="st">Working days / week</div><div class="sd">Used for timetable scheduling</div></div>
          <input type="number" class="num-input" value="${s.workingDays}" min="1" max="7" data-act="set-threshold" data-key="workingDays" ${canAct('set-threshold')?'':'disabled'}>
        </div>
        <div class="settings-row">
          <div><div class="st">Auto-approve timetable overrides</div><div class="sd">Allow coordinators to override conflicts without HOD sign-off</div></div>
          <div class="switch ${s.autoApprove?'on':''} ${canAct('toggle-setting')?'':'disabled'}" data-act="${canAct('toggle-setting')?'toggle-setting':'noop'}" data-key="autoApprove"><div class="kn"></div></div>
        </div>
      </div>
      <div class="panel settings-grp">
        <h3>Appearance</h3>
        <div class="settings-row">
          <div><div class="st">Theme</div><div class="sd">Switch between light and dark mode</div></div>
          <div class="seg">
            <button class="${State.theme==='light'?'active':''}" data-act="set-theme" data-t="light">Light</button>
            <button class="${State.theme==='dark'?'active':''}" data-act="set-theme" data-t="dark">Dark</button>
          </div>
        </div>
        <h3 class="mt20">Academic Year</h3>
        <div class="settings-row">
          <div><div class="st">Active year</div><div class="sd">Applies across dashboard, reports and imports</div></div>
          <span class="badge-pill badge-info">${State.filters.ay}</span>
        </div>
      </div>
    </div>
    <div class="panel mt16">
      <div class="panel-title mb12">Roles &amp; Permissions</div>
      <div class="grid-3">
        ${ROLES.map(r=>`<div class="role-card"><div class="rn">${r.n}</div><div class="rd">${r.d}</div></div>`).join('')}
      </div>
    </div>
  `;
}
'use strict';
/* =========================================================================
   DRAWER / MODAL DISPATCH
   ========================================================================= */
function openDrawer(type, id, tab){
  State.drawer = {type, id, tab: tab || null};
  renderApp();
}
function drawerContent(){
  if (!State.drawer) return '';
  const {type, id} = State.drawer;
  if (type==='student') return studentDrawer(id);
  if (type==='faculty') return facultyDrawer(id);
  if (type==='program') return programDrawer(id);
  if (type==='course') return courseDrawer(id);
  if (type==='room') return roomDrawer(id);
  return '';
}

function openModal(kind, data){ State.modal = {kind, data: data||{}}; renderApp(); }
function modalContent(){
  if (!State.modal) return '';
  const {kind, data} = State.modal;
  if (kind==='assign-faculty') return modalAssignFaculty(data.code);
  if (kind==='add-student') return modalAddStudent();
  if (kind==='add-faculty') return modalAddFaculty();
  if (kind==='add-program') return modalAddProgram();
  if (kind==='add-course') return modalAddCourse();
  if (kind==='add-room') return modalAddRoom();
  if (kind==='tt-edit-empty') return modalTTEditEmpty(data);
  if (kind==='tt-edit-filled') return modalTTEditFilled(data);
  if (kind==='update-academic') return modalUpdateAcademic(data.studentId);
  if (kind==='add-department') return modalAddDepartment();
  if (kind==='edit-department') return modalEditDepartment(data.deptId);
  if (kind==='delete-department') return modalDeleteDepartmentConfirm(data.deptId);
  if (kind==='att-note') return modalAttNote(data.studentId);
  if (kind==='att-confirm') return modalAttConfirm(data);
  return '';
}
function fv(id){ const el = document.getElementById(id); return el ? el.value.trim() : ''; }
function syncBackend(fn, ...args){
  if (State.backendMode === 'auth' && window.Backend && window.Backend[fn]){
    window.Backend[fn](...args).catch(err => toast('Sync to server failed: '+err.message, 'bad'));
  }
}

function modalAddProgram(){
  return `
    <div class="modal-head"><div class="fw7" style="font-size:14.5px">Add Program</div><button class="drawer-close" data-act="close-modal">${icon('x')}</button></div>
    <div class="modal-body">
      <div class="field-row"><label class="field-label">Program Name</label><input id="f-prog-name" class="text-input" placeholder="e.g. B.Tech Cyber Security"></div>
      <div class="grid-2">
        <div class="field-row"><label class="field-label">Program ID (short code)</label><input id="f-prog-id" class="text-input" placeholder="e.g. CYSEC" style="text-transform:uppercase"></div>
        <div class="field-row"><label class="field-label">Degree</label><input id="f-prog-degree" class="text-input" placeholder="Bachelor of Technology"></div>
      </div>
      <div class="grid-2">
        <div class="field-row"><label class="field-label">Duration</label><input id="f-prog-duration" class="text-input" placeholder="4 years"></div>
        <div class="field-row"><label class="field-label">Intake</label><input id="f-prog-intake" class="text-input" placeholder="120"></div>
      </div>
      <div class="fs11 text-3">Added programs appear immediately across the dashboard for this session.</div>
    </div>
    <div class="modal-foot"><button class="btn" data-act="close-modal">Cancel</button><button class="btn btn-primary" data-act="save-program">${icon('plus')}Add Program</button></div>
  `;
}
function modalAddCourse(){
  return `
    <div class="modal-head"><div class="fw7" style="font-size:14.5px">Add Course</div><button class="drawer-close" data-act="close-modal">${icon('x')}</button></div>
    <div class="modal-body">
      <div class="field-row"><label class="field-label">Course Name</label><input id="f-crs-name" class="text-input" placeholder="e.g. Blockchain Fundamentals"></div>
      <div class="grid-2">
        <div class="field-row"><label class="field-label">Course Code</label><input id="f-crs-code" class="text-input" placeholder="e.g. CS599"></div>
        <div class="field-row"><label class="field-label">Program</label><select id="f-crs-prog" class="select-input">${PROGRAMS.filter(p=>p.dept===State.activeDept).map(p=>`<option value="${p.id}">${p.short}</option>`).join('')}</select></div>
      </div>
      <div class="grid-2">
        <div class="field-row"><label class="field-label">Semester</label><select id="f-crs-sem" class="select-input">${[1,2,3,4,5,6,7,8].map(s=>`<option ${s===3?'selected':''}>${s}</option>`).join('')}</select></div>
        <div class="field-row"><label class="field-label">Faculty (optional)</label><select id="f-crs-fac" class="select-input"><option value="">Unassigned</option>${FACULTY.filter(f=>f.status==='Active'&&f.dept===State.activeDept).map(f=>`<option value="${f.id}">${esc(f.name)}</option>`).join('')}</select></div>
      </div>
      <div class="grid-2">
        <div class="field-row"><label class="field-label">Theory Hours/wk</label><input id="f-crs-theory" class="text-input" value="3"></div>
        <div class="field-row"><label class="field-label">Lab Hours/wk</label><input id="f-crs-lab" class="text-input" value="0"></div>
      </div>
      <div class="fs11 text-3">New courses appear in the catalog immediately; add to the timetable via Timetable Edit Mode.</div>
    </div>
    <div class="modal-foot"><button class="btn" data-act="close-modal">Cancel</button><button class="btn btn-primary" data-act="save-course">${icon('plus')}Add Course</button></div>
  `;
}
function modalAddRoom(){
  return `
    <div class="modal-head"><div class="fw7" style="font-size:14.5px">Add Room</div><button class="drawer-close" data-act="close-modal">${icon('x')}</button></div>
    <div class="modal-body">
      <div class="field-row"><label class="field-label">Room Name</label><input id="f-room-name" class="text-input" placeholder="e.g. Room 214 or Lab 6"></div>
      <div class="grid-2">
        <div class="field-row"><label class="field-label">Type</label><select id="f-room-type" class="select-input">${ROOM_TYPES.map(t=>`<option>${t}</option>`).join('')}</select></div>
        <div class="field-row"><label class="field-label">Capacity</label><input id="f-room-cap" class="text-input" value="60"></div>
      </div>
      <div class="field-row"><label class="field-label">Description (optional)</label><input id="f-room-desc" class="text-input" placeholder="e.g. Networks Lab"></div>
    </div>
    <div class="modal-foot"><button class="btn" data-act="close-modal">Cancel</button><button class="btn btn-primary" data-act="save-room">${icon('plus')}Add Room</button></div>
  `;
}

function modalUpdateAcademic(studentId){
  const s = STUDENTS.find(x=>x.id===studentId); if (!s) return '';
  return `
    <div class="modal-head"><div class="fw7" style="font-size:14.5px">Mark Attendance / Update Marks</div><button class="drawer-close" data-act="close-modal">${icon('x')}</button></div>
    <div class="modal-body">
      <div class="fs12 text-2 mb16">${esc(s.name)} · ${s.erpNo} · ${PROGRAMS.find(p=>p.id===s.programId).short}, Sem ${s.semester}, Sec ${s.section}</div>
      <div class="grid-2">
        <div class="field-row">
          <label class="field-label">Attendance %</label>
          <input id="f-aca-att" type="number" min="0" max="100" class="text-input" value="${s.att}">
        </div>
        <div class="field-row">
          <label class="field-label">Internal Marks (/40)</label>
          <input id="f-aca-marks" type="number" min="0" max="40" class="text-input" value="${s.marks}">
        </div>
      </div>
      <div class="grid-2">
        <div class="field-row">
          <label class="field-label">Assignments (/10)</label>
          <input id="f-aca-assign" type="number" min="0" max="10" class="text-input" value="${s.assign}">
        </div>
        <div class="field-row">
          <label class="field-label">Backlogs</label>
          <input id="f-aca-backlogs" type="number" min="0" max="10" class="text-input" value="${s.backlogs}">
        </div>
      </div>
      <div class="fs11 text-3">Updates this student's overall record. Per-course, per-class attendance logs are a natural next step if you need day-by-day tracking — this covers the quick, roll-up update most faculty/data-entry workflows need.</div>
    </div>
    <div class="modal-foot"><button class="btn" data-act="close-modal">Cancel</button><button class="btn btn-primary" data-act="save-academic-update" data-id="${s.id}">${icon('check')}Save</button></div>
  `;
}

/* ---- Timetable manual edit modals ---- */
function modalTTEditEmpty(data){
  const {sectionId, day, period} = data;
  const s = SECTIONS.find(x=>x.id===sectionId);
  const candidates = COURSES.filter(c => c.programId===s.programId && c.semester===s.semester && c.facultyId).filter(c => {
    return !TT.some(e => e.facultyId===c.facultyId && e.day===day && e.period===period);
  });
  const deptId = deptOfSection(s);
  const freeRooms = ROOMS.filter(r => r.dept===deptId && (r.type==='Classroom'||r.type==='Seminar Hall') && !TT.some(e=>e.roomId===r.id && e.day===day && e.period===period));
  return `
    <div class="modal-head"><div class="fw7" style="font-size:14.5px">Add Class — ${s.label}</div><button class="drawer-close" data-act="close-modal">${icon('x')}</button></div>
    <div class="modal-body">
      <div class="fs12 text-2 mb12">${DAY_FULL[day]} · ${PERIODS[period].n} (${PERIODS[period].t})</div>
      ${candidates.length ? `
        <div class="field-row"><label class="field-label">Course (only courses whose faculty is free at this slot are shown)</label>
          <select id="f-tt-course" class="select-input">${candidates.map(c=>`<option value="${c.code}">${c.code} — ${esc(c.name)} (${FACULTY.find(f=>f.id===c.facultyId).name})</option>`).join('')}</select>
        </div>
        <div class="field-row"><label class="field-label">Room (only free rooms shown)</label>
          <select id="f-tt-room" class="select-input">${freeRooms.map(r=>`<option value="${r.id}">${esc(r.name)} (cap. ${r.capacity})</option>`).join('')}</select>
        </div>
      ` : `<div class="alert-card">${icon('alertTriangle')}<div><div class="at">No eligible course</div><div class="ad">Every course's faculty for this section is already teaching another class at this slot — nothing can be scheduled here without a conflict.</div></div></div>`}
    </div>
    <div class="modal-foot"><button class="btn" data-act="close-modal">Cancel</button>${candidates.length && freeRooms.length ? `<button class="btn btn-primary" data-act="save-tt-add" data-section="${sectionId}" data-day="${day}" data-period="${period}">${icon('plus')}Add Class</button>` : ''}</div>
  `;
}
function modalTTEditFilled(data){
  const e = TT.find(x=>x.id===data.entryId); if (!e) return '';
  const c = COURSES.find(x=>x.code===e.courseCode);
  return `
    <div class="modal-head"><div class="fw7" style="font-size:14.5px">${e.courseCode} — ${esc(c.name)}</div><button class="drawer-close" data-act="close-modal">${icon('x')}</button></div>
    <div class="modal-body">
      <div class="dl-grid">
        ${dlItem('Day', DAY_FULL[e.day])}${dlItem('Period', PERIODS[e.period].n)}
        ${dlItem('Faculty', FACULTY.find(f=>f.id===e.facultyId).name)}${dlItem('Room', ROOMS.find(r=>r.id===e.roomId).name)}
        ${dlItem('Section', SECTIONS.find(s=>s.id===e.sectionId).label)}${dlItem('Kind', e.kind)}
      </div>
      ${e.kind==='Lab' ? `<div class="fs11 text-3 mt12">This is part of an auto-scheduled lab block — remove it from the block's first period.</div>` : ''}
    </div>
    <div class="modal-foot"><button class="btn" data-act="close-modal">Cancel</button><button class="btn btn-danger" data-act="save-tt-remove" data-entry="${e.id}">${icon('trash')}Remove Class</button></div>
  `;
}
function modalAssignFaculty(code){
  const c = COURSES.find(x=>x.code===code);
  const eligible = FACULTY.filter(f=>f.status==='Active').map(f=>({f, h:facultyWeeklyLoad(f.id)})).sort((a,b)=>a.h-b.h);
  return `
    <div class="modal-head"><div class="fw7" style="font-size:14.5px">Assign Faculty — ${code}</div><button class="drawer-close" data-act="close-modal">${icon('x')}</button></div>
    <div class="modal-body">
      <div class="fs12 text-2 mb12">${esc(c.name)} · ${PROGRAMS.find(p=>p.id===c.programId).short} · Semester ${c.semester} · ${courseSectionsLabel(c)}</div>
      <div class="field-label">Select faculty (sorted by current load)</div>
      <div style="max-height:320px;overflow-y:auto;border:1px solid var(--border);border-radius:9px">
        ${eligible.map(x => `
          <div class="doc-row" style="margin:8px;cursor:pointer" data-act="pick-assign-faculty" data-fid="${x.f.id}" data-code="${code}">
            <div class="avatar-sm">${initials(x.f.name)}</div>
            <div style="flex:1"><div class="dn">${esc(x.f.name)}</div><div class="ds">${x.f.designation} · ${x.f.expertise}</div></div>
            <span class="badge-pill ${workloadBand(x.h)==='Overloaded'?'badge-bad':workloadBand(x.h)==='High'?'badge-warn':'badge-ok'}">${x.h}h</span>
          </div>`).join('')}
      </div>
    </div>
    <div class="modal-foot"><button class="btn" data-act="close-modal">Cancel</button></div>
  `;
}
function modalAddStudent(){
  const sems = [1,2,3,4,5,6,7,8];
  return `
    <div class="modal-head"><div class="fw7" style="font-size:14.5px">Add Student</div><button class="drawer-close" data-act="close-modal">${icon('x')}</button></div>
    <div class="modal-body">
      <div class="field-row"><label class="field-label">Full Name</label><input id="f-stu-name" class="text-input" placeholder="e.g. Aditi Sharma"></div>
      <div class="grid-2">
        <div class="field-row"><label class="field-label">Program</label><select id="f-stu-prog" class="select-input">${PROGRAMS.filter(p=>p.dept===State.activeDept).map(p=>`<option value="${p.id}">${p.short}</option>`).join('')}</select></div>
        <div class="field-row"><label class="field-label">Semester</label><select id="f-stu-sem" class="select-input">${sems.map(s=>`<option>${s}</option>`).join('')}</select></div>
      </div>
      <div class="grid-2">
        <div class="field-row"><label class="field-label">ERP Number</label><input id="f-stu-erp" class="text-input" placeholder="26CSE00501"></div>
        <div class="field-row"><label class="field-label">Section</label><input id="f-stu-sec" class="text-input" placeholder="A" style="text-transform:uppercase" maxlength="1"></div>
      </div>
      <div class="field-row"><label class="field-label">Email (optional)</label><input id="f-stu-email" class="text-input" placeholder="student@jbkp-demo.example"></div>
      <div class="fs11 text-3">Added students appear in the Students table and search immediately for this session.</div>
    </div>
    <div class="modal-foot"><button class="btn" data-act="close-modal">Cancel</button><button class="btn btn-primary" data-act="save-student">${icon('plus')}Add Student</button></div>
  `;
}
function modalAddFaculty(){
  return `
    <div class="modal-head"><div class="fw7" style="font-size:14.5px">Add Faculty</div><button class="drawer-close" data-act="close-modal">${icon('x')}</button></div>
    <div class="modal-body">
      <div class="field-row"><label class="field-label">Full Name</label><input id="f-fac-name" class="text-input" placeholder="e.g. Dr. Rakesh Kumar"></div>
      <div class="grid-2">
        <div class="field-row"><label class="field-label">Designation</label><select id="f-fac-des" class="select-input"><option>Assistant Professor</option><option>Associate Professor</option><option>Professor</option></select></div>
        <div class="field-row"><label class="field-label">Qualification</label><input id="f-fac-qual" class="text-input" placeholder="Ph.D. (Computer Science)"></div>
      </div>
      <div class="grid-2">
        <div class="field-row"><label class="field-label">Email (optional)</label><input id="f-fac-email" class="text-input" placeholder="name@jbkp-demo.example"></div>
        <div class="field-row"><label class="field-label">Phone (optional)</label><input id="f-fac-phone" class="text-input" placeholder="+91 9XXXXXXXXX"></div>
      </div>
      <div class="fs11 text-3">Added faculty appear in the Faculty roster and become assignable to courses immediately.</div>
    </div>
    <div class="modal-foot"><button class="btn" data-act="close-modal">Cancel</button><button class="btn btn-primary" data-act="save-faculty">${icon('plus')}Add Faculty</button></div>
  `;
}

/* =========================================================================
   ATTENDANCE MODULE (Coordinator Attendance Management)
   =========================================================================
   AttState holds the currently-loaded marking session (one date + section +
   subject + lecture at a time). "Not Marked" is the true default for every
   student until a Coordinator/Faculty member actually marks them — nothing
   here is ever auto-set to absent. Saving writes to a deterministic
   Firestore doc id (attendanceId() in data.js: section+subject+period+date+
   student), so a save is always a create-or-overwrite for that exact
   combination — duplicates are structurally impossible. */
let AttState = {
  view: 'mark', // 'mark' | 'reports'
  date: todayISO(),
  programId: '', semester: '', sectionId: '', courseCode: '', period: '',
  search: '',
  marks: {},    // studentId -> {status:'unmarked'|'present'|'absent'|'leave', note}
  original: {}, // last-loaded/last-saved snapshot, for dirty-checking
  loaded: false,
};
let attSelected = {};
let pendingNavRoute = null;
const NOTE_PRESETS = ['Medical leave','Late arrival','Parent informed','Left campus early','Approved leave'];

function attCanMark(){ return canAct('mark-class-attendance'); }
function attSessionReady(){
  return !!(AttState.programId && AttState.semester && AttState.sectionId && AttState.courseCode && AttState.period !== '' && AttState.date);
}
function attFilterOpts(){ return PROGRAMS.filter(p=>p.dept===State.activeDept); }
function attSemesterOpts(){
  if (!AttState.programId) return [];
  return [...new Set(SECTIONS.filter(s=>s.programId===AttState.programId).map(s=>s.semester))].sort((a,b)=>a-b);
}
function attSectionOpts(){
  if (!AttState.programId || !AttState.semester) return [];
  return SECTIONS.filter(s=>s.programId===AttState.programId && s.semester===+AttState.semester);
}
function attCourseOpts(){
  if (!AttState.programId || !AttState.semester) return [];
  let list = COURSES.filter(c=>c.programId===AttState.programId && c.semester===+AttState.semester);
  if (State.currentUser && State.currentUser.role==='Faculty') list = list.filter(c=>c.facultyId===State.currentUser.facultyId);
  return list;
}
function attRoster(){ return AttState.sectionId ? STUDENTS.filter(s=>s.sectionId===AttState.sectionId) : []; }
function attFilterRoster(){
  let list = attRoster();
  if (AttState.search){
    const q = AttState.search.toLowerCase();
    list = list.filter(s => s.name.toLowerCase().includes(q) || s.erpNo.toLowerCase().includes(q) || s.rollNo.toLowerCase().includes(q));
  }
  return list;
}
function attLoadSession(){
  if (!attSessionReady()){ AttState.marks = {}; AttState.original = {}; AttState.loaded = false; return; }
  const marks = {}, original = {};
  attRoster().forEach(s => {
    const id = attendanceId(AttState.sectionId, AttState.courseCode, AttState.period, AttState.date, s.id);
    const rec = ATTENDANCE.find(a => a.id===id);
    const status = rec ? rec.status : 'unmarked';
    const note = rec ? (rec.note||'') : '';
    marks[s.id] = {status, note};
    original[s.id] = {status, note};
  });
  AttState.marks = marks; AttState.original = original; AttState.loaded = true;
}
function attDirtyCount(){
  if (!AttState.loaded) return 0;
  return Object.keys(AttState.marks).filter(sid => {
    const m = AttState.marks[sid] || {status:'unmarked', note:''};
    const o = AttState.original[sid] || {status:'unmarked', note:''};
    return m.status !== o.status || (m.note||'') !== (o.note||'');
  }).length;
}
function attCounts(roster){
  let present=0, absent=0, leave=0, notMarked=0;
  roster.forEach(s => {
    const st = (AttState.marks[s.id]||{status:'unmarked'}).status;
    if (st==='present') present++; else if (st==='absent') absent++; else if (st==='leave') leave++; else notMarked++;
  });
  const totalMarked = present+absent+leave; // the formula below NEVER divides by roster.length — only by totalMarkedClasses
  const pct = totalMarked ? Math.round((present/totalMarked)*1000)/10 : 0;
  return {total:roster.length, present, absent, leave, notMarked, pct};
}
function attBuildRecord(studentId){
  const m = AttState.marks[studentId] || {status:'unmarked', note:''};
  return {
    id: attendanceId(AttState.sectionId, AttState.courseCode, AttState.period, AttState.date, studentId),
    studentId, sectionId: AttState.sectionId, courseCode: AttState.courseCode,
    period: +AttState.period, date: AttState.date, status: m.status, note: m.note || '',
    markedBy: (State.currentUser && State.currentUser.name) || 'Demo User',
    markedAt: new Date().toISOString(),
  };
}
function attPersist(force){
  if (!attSessionReady()) return;
  const roster = attRoster();
  const unmarkedCount = roster.filter(s => (AttState.marks[s.id]||{status:'unmarked'}).status==='unmarked').length;
  if (unmarkedCount && !force){ openModal('att-confirm', {kind:'unmarked-save', count:unmarkedCount}); return; }
  const touched = roster.filter(s => {
    const m = AttState.marks[s.id] || {status:'unmarked', note:''};
    const o = AttState.original[s.id] || {status:'unmarked', note:''};
    return m.status !== o.status || (m.note||'') !== (o.note||'');
  });
  if (!touched.length){ toast('No changes to save', 'warn'); State.modal = null; renderApp(); return; }
  const toSave = touched.filter(s => (AttState.marks[s.id]||{}).status !== 'unmarked');
  const toDelete = touched.filter(s => (AttState.marks[s.id]||{}).status === 'unmarked');
  const records = toSave.map(s => attBuildRecord(s.id));
  records.forEach(rec => {
    const idx = ATTENDANCE.findIndex(a => a.id===rec.id);
    if (idx > -1) ATTENDANCE[idx] = rec; else ATTENDANCE.push(rec);
  });
  toDelete.forEach(s => {
    const id = attendanceId(AttState.sectionId, AttState.courseCode, AttState.period, AttState.date, s.id);
    const idx = ATTENDANCE.findIndex(a => a.id===id);
    if (idx > -1){ ATTENDANCE.splice(idx,1); syncBackend('deleteAttendanceRecord', id); }
  });
  if (records.length) syncBackend('saveAttendanceBatch', records);
  touched.forEach(s => { AttState.original[s.id] = {status:(AttState.marks[s.id]||{}).status||'unmarked', note:(AttState.marks[s.id]||{}).note||''}; });
  State.modal = null; renderApp();
  toast(`Attendance saved for ${touched.length} student${touched.length>1?'s':''}`, 'ok');
}

function attSelect(label, inner){ return `<div class="field-row" style="margin-bottom:0"><label class="field-label">${label}</label>${inner}</div>`; }
function attOptSelect(id, key, opts, val, act){
  act = act || 'att-filter-change';
  return `<select id="${id}" class="select-input" data-act="${act}" data-key="${key}">
    <option value="">${key==='period'?'Select lecture':'Select…'}</option>
    ${opts.map(o=>`<option value="${esc(o.v)}" ${String(val)===String(o.v)?'selected':''}>${esc(o.l)}</option>`).join('')}
  </select>`;
}
function pageAttendance(){
  if (AttState.view === 'reports') return pageAttendanceReports();
  const ready = attSessionReady();
  if (ready && !AttState.loaded) attLoadSession();
  const allRoster = ready ? attRoster() : [];
  const counts = attCounts(allRoster);
  return `
    <div class="page-head">
      <div><h1>Student Attendance</h1><p>Mark and manage daily student attendance by section, subject and lecture</p></div>
      <div class="head-actions">
        <button class="btn btn-primary" data-act="att-view" data-view="mark">${icon('userCheck')}Mark Attendance</button>
        <button class="btn" data-act="att-view" data-view="reports">${icon('barChart')}Attendance Reports</button>
      </div>
    </div>
    <div class="panel mb16">
      <div class="grid-2" style="grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px">
        ${attSelect('Date', `<input type="date" class="text-input" value="${AttState.date}" data-act="att-filter-change" data-key="date">`)}
        ${attSelect('Program', attOptSelect('att-f-program','programId', attFilterOpts().map(p=>({v:p.id,l:p.short})), AttState.programId))}
        ${attSelect('Semester', attOptSelect('att-f-semester','semester', attSemesterOpts().map(s=>({v:String(s),l:'Semester '+s})), AttState.semester))}
      </div>
      <div class="grid-2" style="grid-template-columns:repeat(3,1fr);gap:10px">
        ${attSelect('Section', attOptSelect('att-f-section','sectionId', attSectionOpts().map(s=>({v:s.id,l:'Section '+s.name})), AttState.sectionId))}
        ${attSelect('Subject', attOptSelect('att-f-course','courseCode', attCourseOpts().map(c=>({v:c.code,l:c.code+' — '+c.name})), AttState.courseCode))}
        ${attSelect('Lecture / Period', attOptSelect('att-f-period','period', PERIODS.map((p,i)=>({v:String(i),l:p.n+' ('+p.t+')'})), AttState.period))}
      </div>
    </div>
    ${!ready
      ? `<div class="empty-state">${icon('filter')}<div class="et">Select date, program, semester, section, subject and lecture</div><div>Pick every filter above to load the class register.</div></div>`
      : attendanceWorkspace(allRoster, counts)}
  `;
}
function attStatusDots(sid, status, canMark){
  const opts = [['present','ok','P'],['absent','bad','A'],['leave','warn','L']];
  return `<div class="att-dots">${opts.map(([v,c,l]) => `<span class="att-dot ${c} ${status===v?'active':''}" ${canMark?`data-act="att-mark" data-student="${sid}" data-status="${v}"`:''} role="radio" aria-checked="${status===v}" aria-label="${v}" tabindex="${canMark?0:-1}">${l}</span>`).join('')}</div>`;
}
function attendanceRow(s, canMark){
  const m = AttState.marks[s.id] || {status:'unmarked', note:''};
  return `<tr>
    ${canMark ? `<td><input type="checkbox" data-act="att-select-row" data-student="${s.id}" ${attSelected[s.id]?'checked':''}></td>` : ''}
    <td class="mono">${s.erpNo}</td>
    <td><div class="tr-flex"><div class="avatar-sm">${initials(s.name)}</div><div class="cell-strong">${esc(s.name)}</div></div></td>
    <td>${attStatusDots(s.id, m.status, canMark)}</td>
    <td>${canMark ? `<span class="icon-action" title="Note" data-act="att-note" data-student="${s.id}">${icon('fileText')}</span>` : ''} ${m.note ? `<span class="fs11 text-2">${esc(m.note)}</span>` : ''}</td>
  </tr>`;
}
function attendanceCard(s, canMark){
  const m = AttState.marks[s.id] || {status:'unmarked', note:''};
  return `<div class="att-card">
    <div class="tr-flex" style="justify-content:space-between">
      <div class="tr-flex"><div class="avatar-sm">${initials(s.name)}</div><div><div class="cell-strong">${esc(s.name)}</div><div class="cell-sub mono">${s.erpNo}</div></div></div>
      ${canMark ? `<input type="checkbox" data-act="att-select-row" data-student="${s.id}" ${attSelected[s.id]?'checked':''}>` : ''}
    </div>
    <div class="mt8">${attStatusDots(s.id, m.status, canMark)}</div>
    ${canMark ? `<button class="btn btn-sm mt8" data-act="att-note" data-student="${s.id}">${icon('fileText')}${m.note?'Edit note':'Add note'}</button>` : ''}
    ${m.note ? `<div class="fs11 text-2 mt8">${esc(m.note)}</div>` : ''}
  </div>`;
}
function attendanceWorkspace(allRoster, counts){
  const canMark = attCanMark();
  const shown = attFilterRoster();
  const selCount = Object.keys(attSelected).filter(id=>attSelected[id]).length;
  const dirty = attDirtyCount();
  return `
    <div class="mini-stats mb16" style="grid-template-columns:repeat(6,1fr)">
      <div class="mini-stat"><div class="v">${counts.total}</div><div class="l">Total</div></div>
      <div class="mini-stat"><div class="v" style="color:var(--ok)">${counts.present}</div><div class="l">Present</div></div>
      <div class="mini-stat"><div class="v" style="color:var(--bad)">${counts.absent}</div><div class="l">Absent</div></div>
      <div class="mini-stat"><div class="v" style="color:var(--warn)">${counts.leave}</div><div class="l">Leave</div></div>
      <div class="mini-stat"><div class="v">${counts.notMarked}</div><div class="l">Not Marked</div></div>
      <div class="mini-stat"><div class="v" style="color:${attColor(counts.pct)}">${counts.pct}%</div><div class="l">Attendance %</div></div>
    </div>
    ${canMark ? `
    <div class="table-toolbar">
      <div class="table-search">${icon('search')}<input placeholder="Search name, ERP no, roll no…" value="${esc(AttState.search)}" data-act="att-search" id="att-search-input"></div>
      <label class="fs12" style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" data-act="att-select-all" ${shown.length && shown.every(s=>attSelected[s.id])?'checked':''}> Select all (${shown.length})</label>
      ${selCount ? `
        <button class="btn btn-sm" data-act="att-bulk" data-status="present">${icon('checkCircle')}Present (${selCount})</button>
        <button class="btn btn-sm" data-act="att-bulk" data-status="absent">${icon('x')}Absent</button>
        <button class="btn btn-sm" data-act="att-bulk" data-status="leave">${icon('clock')}Leave</button>
      ` : ''}
      <div class="header-spacer"></div>
      <button class="btn btn-sm" data-act="att-mark-all">${icon('users')}Mark All Present</button>
      <button class="btn btn-sm btn-primary" data-act="att-save">${icon('check')}Save Attendance${dirty?' ('+dirty+')':''}</button>
    </div>` : `<div class="alert-card mb16">${icon('shield')}<div><div class="at">Read-only</div><div class="ad">Your role can view this register but not mark attendance.</div></div></div>`}
    <div class="att-desktop table-wrap"><table class="dtable"><thead><tr>
      ${canMark?'<th></th>':''}<th>ERP No</th><th>Student Name</th><th>Status</th><th>Note</th>
    </tr></thead><tbody>
      ${shown.map(s=>attendanceRow(s, canMark)).join('') || `<tr><td colspan="5"><div class="empty-state">${icon('search')}<div class="et">No matching students</div></div></td></tr>`}
    </tbody></table></div>
    <div class="att-mobile">${shown.map(s=>attendanceCard(s, canMark)).join('') || `<div class="empty-state">${icon('search')}<div class="et">No matching students</div></div>`}</div>
  `;
}
function modalAttNote(studentId){
  const s = STUDENTS.find(x=>x.id===studentId); if (!s) return '';
  const current = (AttState.marks[studentId]||{}).note || '';
  return `
    <div class="modal-head"><div class="fw7" style="font-size:14.5px">Note — ${esc(s.name)}</div><button class="drawer-close" data-act="close-modal">${icon('x')}</button></div>
    <div class="modal-body">
      <div class="field-row"><label class="field-label">Quick presets</label>
        <div style="display:flex;flex-wrap:wrap;gap:6px">
          ${NOTE_PRESETS.map(p=>`<button class="btn btn-sm" data-act="att-note-preset" data-note="${esc(p)}" type="button">${p}</button>`).join('')}
        </div>
      </div>
      <div class="field-row"><label class="field-label">Note</label><textarea id="f-att-note" class="text-input" style="height:76px;padding:8px">${esc(current)}</textarea></div>
    </div>
    <div class="modal-foot"><button class="btn" data-act="close-modal">Cancel</button><button class="btn btn-primary" data-act="att-note-save" data-student="${studentId}">${icon('check')}Save Note</button></div>
  `;
}
function confirmShell(title, body, footBtn){
  return `
    <div class="modal-head"><div class="fw7" style="font-size:14.5px">${title}</div><button class="drawer-close" data-act="close-modal">${icon('x')}</button></div>
    <div class="modal-body"><div class="alert-card">${icon('alertTriangle')}<div class="ad">${body}</div></div></div>
    <div class="modal-foot"><button class="btn" data-act="close-modal">Cancel</button>${footBtn}</div>
  `;
}
function modalAttConfirm(data){
  const kind = data.kind;
  if (kind==='bulk') return confirmShell('Confirm bulk update', `Mark ${data.count} selected student(s) as <b>${esc(data.status)}</b>?`, `<button class="btn btn-primary" data-act="att-bulk-confirm" data-status="${data.status}">${icon('check')}Confirm</button>`);
  if (kind==='mark-all'){
    const sec = SECTIONS.find(x=>x.id===AttState.sectionId);
    return confirmShell('Mark All Present', `This marks every student in <b>${esc(sec?sec.label:'')}</b> for <b>${esc(AttState.courseCode)}</b>, <b>${esc(PERIODS[+AttState.period].n)}</b>, on <b>${fmtDate(AttState.date)}</b> as Present. This only affects this exact class — section, subject, lecture and date — nothing else.`, `<button class="btn btn-primary" data-act="att-mark-all-confirm">${icon('check')}Mark All Present</button>`);
  }
  if (kind==='unmarked-save') return confirmShell('Unmarked students', `${data.count} student(s) are still Not Marked and will stay Not Marked (never auto-counted as absent). Save the rest now?`, `<button class="btn btn-primary" data-act="att-save-anyway">${icon('check')}Save Anyway</button>`);
  if (kind==='leave-unsaved') return confirmShell('Unsaved changes', `You have ${attDirtyCount()} unsaved attendance change(s) on this page. Leave without saving?`, `<button class="btn btn-danger" data-act="att-leave-discard">${icon('x')}Discard &amp; Leave</button>`);
  return '';
}

/* ---- Attendance Reports ---- */
let attReportState = { tab:'class', from:'', to:'', programId:'', semester:'', sectionId:'', courseCode:'', studentQ:'' };
function attReportRangeBar(){
  return `<div class="panel mb16"><div class="grid-2" style="grid-template-columns:repeat(4,1fr);gap:10px">
    <div class="field-row" style="margin-bottom:0"><label class="field-label">From</label><input type="date" class="text-input" value="${attReportState.from}" data-act="att-report-range" data-key="from"></div>
    <div class="field-row" style="margin-bottom:0"><label class="field-label">To</label><input type="date" class="text-input" value="${attReportState.to}" data-act="att-report-range" data-key="to"></div>
    <div class="field-row" style="margin-bottom:0"><label class="field-label">Program</label>${attOptSelect('rep-prog','programId', PROGRAMS.filter(p=>p.dept===State.activeDept).map(p=>({v:p.id,l:p.short})), attReportState.programId, 'att-report-range')}</div>
    <div class="field-row" style="margin-bottom:0"><label class="field-label">Section</label>${attOptSelect('rep-sec','sectionId', SECTIONS.filter(s=>!attReportState.programId||s.programId===attReportState.programId).map(s=>({v:s.id,l:s.label})), attReportState.sectionId, 'att-report-range')}</div>
  </div></div>`;
}
function pageAttendanceReports(){
  const tabs = [['class','By Class'],['student','By Student'],['subject','By Subject']];
  return `
    <div class="page-head">
      <div><h1>Attendance Reports</h1><p>Daily, student, subject and class-wise attendance — computed only from marked records (never counting "Not Marked" as absent)</p></div>
      <div class="head-actions"><button class="btn" data-act="att-view" data-view="mark">${icon('arrowLeft')}Back to Mark Attendance</button></div>
    </div>
    <div class="section-tabs mb16">${tabs.map(([k,l])=>`<button class="${attReportState.tab===k?'active':''}" data-act="att-report-tab" data-tab="${k}">${l}</button>`).join('')}</div>
    ${attReportState.tab==='class' ? attReportClassView() : attReportState.tab==='student' ? attReportStudentView() : attReportSubjectView()}
  `;
}
function attReportClassView(){
  const recs = ATTENDANCE.filter(a => {
    if (attReportState.from && a.date < attReportState.from) return false;
    if (attReportState.to && a.date > attReportState.to) return false;
    if (attReportState.sectionId && a.sectionId !== attReportState.sectionId) return false;
    const sec = SECTIONS.find(s=>s.id===a.sectionId);
    if (!sec || deptOfSection(sec)!==State.activeDept) return false;
    if (attReportState.programId && sec.programId !== attReportState.programId) return false;
    return true;
  });
  const bySection = {};
  recs.forEach(a => { bySection[a.sectionId] = bySection[a.sectionId] || {present:0,absent:0,leave:0}; bySection[a.sectionId][a.status] = (bySection[a.sectionId][a.status]||0) + 1; });
  const rows = Object.keys(bySection).map(sid => {
    const sec = SECTIONS.find(s=>s.id===sid); const c = bySection[sid]; const total = c.present+c.absent+c.leave;
    const pct = total ? Math.round((c.present/total)*1000)/10 : 0;
    return {sec, ...c, total, pct};
  });
  return `${attReportRangeBar()}
    <div class="table-wrap"><table class="dtable"><thead><tr><th>Section</th><th>Present</th><th>Absent</th><th>Leave</th><th>Total Marked</th><th>Attendance %</th></tr></thead><tbody>
    ${rows.length ? rows.map(r=>`<tr><td class="cell-strong">${esc(r.sec?r.sec.label:'')}</td><td>${r.present}</td><td>${r.absent}</td><td>${r.leave}</td><td>${r.total}</td><td style="color:${attColor(r.pct)}">${r.pct}%</td></tr>`).join('') : `<tr><td colspan="6"><div class="empty-state">${icon('search')}<div class="et">No attendance marked for this range yet</div></div></td></tr>`}
    </tbody></table></div>`;
}
function attReportStudentCard(s){
  const courses = COURSES.filter(c=>c.programId===s.programId && c.semester===s.semester);
  const rows = courses.map(c => ({c, r: realSubjectAttendance(s.id, c.code)}));
  const overallRecs = ATTENDANCE.filter(a=>a.studentId===s.id);
  const present = overallRecs.filter(a=>a.status==='present').length;
  const total = overallRecs.length;
  const pct = total ? Math.round((present/total)*1000)/10 : 0;
  return `
    <div class="panel mb16">
      <div class="tr-flex mb12"><div class="avatar-sm">${initials(s.name)}</div><div><div class="fw7">${esc(s.name)}</div><div class="fs12 text-2">${s.erpNo} · Sem ${s.semester} · Sec ${s.section}</div></div>
        <div style="margin-left:auto" class="fw7"><span style="color:${attColor(pct)}">${pct}%</span> overall</div>
      </div>
      <div class="table-wrap"><table class="dtable"><thead><tr><th>Course</th><th>Present</th><th>Absent</th><th>Leave</th><th>Total Marked</th><th>%</th></tr></thead><tbody>
      ${rows.map(({c,r})=>`<tr><td class="cell-strong">${c.code} — ${esc(c.name)}</td><td>${r?r.present:0}</td><td>${r?r.absent:0}</td><td>${r?r.leave:0}</td><td>${r?r.total:0}</td><td style="color:${attColor(r?r.pct:0)}">${r?r.pct:0}%</td></tr>`).join('')}
      </tbody></table></div>
    </div>`;
}
function attReportStudentView(){
  const q = (attReportState.studentQ||'').toLowerCase();
  const matches = q ? STUDENTS.filter(s => { const sec = SECTIONS.find(x=>x.id===s.sectionId); return sec && deptOfSection(sec)===State.activeDept && (s.name.toLowerCase().includes(q) || s.erpNo.toLowerCase().includes(q) || s.rollNo.toLowerCase().includes(q)); }).slice(0,20) : [];
  return `
    <div class="table-search mb16">${icon('search')}<input placeholder="Search student by name, ERP no, roll no…" value="${esc(attReportState.studentQ)}" data-act="att-report-student-search" id="att-report-student-input"></div>
    ${!q ? `<div class="empty-state">${icon('search')}<div class="et">Search for a student to see their attendance</div></div>` :
      !matches.length ? `<div class="empty-state">${icon('search')}<div class="et">No matching students</div></div>` :
      matches.map(s=>attReportStudentCard(s)).join('')}
  `;
}
function attReportSubjectView(){
  const courses = COURSES.filter(c=>deptOfCourse(c)===State.activeDept && (!attReportState.programId || c.programId===attReportState.programId));
  return `
    <div class="panel mb16"><div class="field-row" style="margin-bottom:0"><label class="field-label">Subject</label>
      ${attOptSelect('rep-course','courseCode', courses.map(c=>({v:c.code,l:c.code+' — '+c.name})), attReportState.courseCode, 'att-report-range')}
    </div></div>
    ${!attReportState.courseCode ? `<div class="empty-state">${icon('courses')}<div class="et">Pick a subject to see every enrolled student's attendance for it.</div></div>` : attReportSubjectTable()}
  `;
}
function attReportSubjectTable(){
  const c = COURSES.find(x=>x.code===attReportState.courseCode); if (!c) return '';
  const students = STUDENTS.filter(s=>s.programId===c.programId && s.semester===c.semester);
  const rows = students.map(s=>({s, r: realSubjectAttendance(s.id, c.code)}));
  return `
    <div class="table-wrap"><table class="dtable"><thead><tr><th>ERP No</th><th>Name</th><th>Section</th><th>Present</th><th>Absent</th><th>Leave</th><th>Total Marked</th><th>%</th></tr></thead><tbody>
    ${rows.map(({s,r})=>`<tr><td class="mono">${s.erpNo}</td><td>${esc(s.name)}</td><td>${s.section}</td><td>${r?r.present:0}</td><td>${r?r.absent:0}</td><td>${r?r.leave:0}</td><td>${r?r.total:0}</td><td style="color:${attColor(r?r.pct:0)}">${r?r.pct:0}%</td></tr>`).join('')}
    </tbody></table></div>`;
}

/* =========================================================================
   PAGE ROUTER
   ========================================================================= */
function pageFor(route){
  switch(route){
    case 'dashboard': return pageDashboard();
    case 'students': return pageStudents();
    case 'faculty': return pageFaculty();
    case 'programs': return pagePrograms();
    case 'courses': return pageCourses();
    case 'workload': return pageWorkload();
    case 'timetable': return pageTimetable();
    case 'syllabus': return pageSyllabus();
    case 'rooms': return pageRooms();
    case 'attendance': return pageAttendance();
    case 'reports': return pageReports();
    case 'erp': return pageErp();
    case 'settings': return pageSettings();
    case 'departments': return pageDepartments();
    default: return pageDashboard();
  }
}

/* =========================================================================
   MAIN RENDER
   ========================================================================= */
function renderApp(){
  document.getElementById('sidebar-slot').outerHTML = `<div id="sidebar-slot">${renderSidebar()}</div>`;
  document.getElementById('main').className = State.sidebarCollapsed ? 'full' : '';
  document.getElementById('header-slot').innerHTML = renderHeader();
  document.getElementById('filterbar-slot').innerHTML = renderFilterBar();
  document.getElementById('content').innerHTML = pageFor(State.route);

  // Drawer
  const dOverlay = document.getElementById('drawer-overlay');
  const drawer = document.getElementById('drawer');
  if (State.drawer){
    drawer.innerHTML = drawerContent();
    dOverlay.classList.add('show'); drawer.classList.add('show');
  } else {
    dOverlay.classList.remove('show'); drawer.classList.remove('show');
  }
  // Modal
  const mOverlay = document.getElementById('modal-overlay');
  const modal = document.getElementById('modal');
  if (State.modal){
    modal.innerHTML = modalContent();
    mOverlay.classList.add('show'); modal.classList.add('show');
  } else {
    mOverlay.classList.remove('show'); modal.classList.remove('show');
  }
  document.documentElement.setAttribute('data-theme', State.theme);
}

/* =========================================================================
   EVENT DELEGATION
   ========================================================================= */
function closeAllDropdowns(){ document.querySelectorAll('.dropdown.show').forEach(d=>d.classList.remove('show')); }
function closeAllFilterPops(){ filterPopOpen = null; document.querySelectorAll('.filter-pop.show').forEach(d=>d.classList.remove('show')); }

document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-act]');
  const clickedInDropdown = e.target.closest('.dropdown') || e.target.closest('.hdr-menu');
  const clickedInFilterPop = e.target.closest('.filter-pop') || e.target.closest('.filter-field');
  if (!clickedInDropdown) closeAllDropdowns();
  if (!clickedInFilterPop) closeAllFilterPops();
  const searchWrap = document.getElementById('global-search-wrap');
  if (searchWrap && !searchWrap.contains(e.target)) document.getElementById('search-results').classList.remove('show');

  if (!el) { if(!clickedInDropdown && !clickedInFilterPop) renderChrome(); return; }
  const act = el.dataset.act;

  switch(act){
    case 'noop': break;
    case 'toast-soon': toast('This feature is coming soon.', 'warn'); break;
    case 'nav': {
      if (State.route==='attendance' && attDirtyCount()>0 && el.dataset.route!=='attendance'){
        pendingNavRoute = {route: el.dataset.route, param: el.dataset.param};
        openModal('att-confirm', {kind:'leave-unsaved'});
        break;
      }
      setRoute(el.dataset.route, el.dataset.param);
      break;
    }
    case 'toggle-mobile-nav': State.mobileOpen = !State.mobileOpen; renderApp(); break;
    case 'close-mobile-nav': State.mobileOpen = false; renderApp(); break;
    case 'toggle-theme': State.theme = State.theme==='dark'?'light':'dark'; localStorage.setItem('cse-theme', State.theme); renderApp(); break;
    case 'set-theme': State.theme = el.dataset.t; localStorage.setItem('cse-theme', State.theme); renderApp(); break;
    case 'toggle-dd': {
      const id = 'dd-'+el.dataset.dd; const dd = document.getElementById(id); const wasOpen = dd.classList.contains('show');
      closeAllDropdowns(); if (!wasOpen) dd.classList.add('show');
      break;
    }
    case 'set-ay': State.filters.ay = el.dataset.ay; closeAllDropdowns(); renderApp(); toast('Academic year set to '+el.dataset.ay); break;
    case 'toggle-filter-pop': {
      const key = el.dataset.key; const wasOpen = filterPopOpen===key;
      closeAllFilterPops(); filterPopOpen = wasOpen ? null : key; renderApp();
      if (!wasOpen) setTimeout(()=>{ const inp = document.querySelector(`#fpop-${key} input`); if(inp) inp.focus(); }, 0);
      break;
    }
    case 'filter-search': break; // handled by input event
    case 'set-filter': {
      const key = el.dataset.key; State.filters[key] = el.dataset.val || '';
      if (key==='program'){ State.filters.semester=''; State.filters.section=''; }
      if (key==='semester'){ State.filters.section=''; }
      filterPopOpen = null; filterSearchQ = {};
      renderApp();
      break;
    }
    case 'reset-filters': State.filters = {ay:State.filters.ay, program:'', semester:'', section:'', faculty:'', day:'', room:''}; overloadFilterActive=null; renderApp(); toast('Filters reset'); break;
    case 'open-drawer': openDrawer(el.dataset.type, el.dataset.id); break;
    case 'row-view': openDrawer(el.dataset.type, el.dataset.id); break;
    case 'row-tab': openDrawer(el.dataset.type, el.dataset.id, el.dataset.tab); break;
    case 'open-drawer-row': { const [type,id] = el.dataset.id.split(':'); openDrawer(type, id); break; }
    case 'close-drawer': State.drawer = null; renderApp(); break;
    case 'drawer-tab': State.drawer.tab = el.dataset.tab; renderApp(); break;
    case 'close-modal': State.modal = null; renderApp(); break;
    case 'assign-faculty': openModal('assign-faculty', {code: el.dataset.code}); break;
    case 'modal-update-academic': openModal('update-academic', {studentId: el.dataset.id}); break;
    case 'save-academic-update': {
      const s = STUDENTS.find(x=>x.id===el.dataset.id); if (!s) break;
      const att = Math.max(0, Math.min(100, +fv('f-aca-att') || 0));
      const marks = Math.max(0, Math.min(40, +fv('f-aca-marks') || 0));
      const assign = Math.max(0, Math.min(10, +fv('f-aca-assign') || 0));
      const backlogs = Math.max(0, +fv('f-aca-backlogs') || 0);
      s.att = att; s.marks = marks; s.assign = assign; s.backlogs = backlogs;
      syncBackend('updateStudent', s.id, {att, marks, assign, backlogs});
      State.modal = null; renderApp();
      toast(`${s.name}'s record updated — ${att}% attendance, ${marks}/40 marks`, 'ok');
      break;
    }
    case 'pick-assign-faculty': {
      const code = el.dataset.code, fid = el.dataset.fid;
      const c = COURSES.find(x=>x.code===code); c.facultyId = fid;
      syncBackend('assignFaculty', code, fid);
      State.modal = null; renderApp();
      toast(`${FACULTY.find(f=>f.id===fid).name} assigned to ${code}`, 'ok');
      break;
    }
    case 'modal-add-student': openModal('add-student'); break;
    case 'modal-add-faculty': openModal('add-faculty'); break;
    case 'modal-add-department': openModal('add-department'); break;
    case 'edit-department': openModal('edit-department', {deptId: el.dataset.dept}); break;
    case 'delete-department': openModal('delete-department', {deptId: el.dataset.dept}); break;
    case 'set-dept': {
      State.activeDept = el.dataset.dept;
      State.filters.program=''; State.filters.semester=''; State.filters.section=''; State.filters.faculty=''; State.filters.room='';
      overloadFilterActive = null; closeAllDropdowns();
      setRoute('dashboard');
      break;
    }
    case 'save-department': {
      const name = fv('f-dept-name'); const short = fv('f-dept-short');
      if (!name){ toast('Enter a department name', 'warn'); break; }
      const dept = createDepartment({name, short});
      State.modal = null;
      State.activeDept = dept.id;
      renderApp();
      toast(dept.name+' created with a starter program, section, rooms and courses', 'ok');
      break;
    }
    case 'save-department-edit': {
      const d = DEPARTMENTS.find(x=>x.id===el.dataset.dept); if (!d) break;
      d.name = fv('f-dept-edit-name') || d.name;
      d.short = fv('f-dept-edit-short') || d.short;
      d.status = document.getElementById('f-dept-edit-status').value;
      syncBackend('updateDepartment', d.id, {name:d.name, short:d.short, status:d.status});
      State.modal = null; renderApp();
      toast(d.name+' updated', 'ok');
      break;
    }
    case 'confirm-delete-department': {
      const deptId = el.dataset.dept; const d = DEPARTMENTS.find(x=>x.id===deptId);
      const nm = d ? d.name : deptId;
      deleteDepartment(deptId);
      State.modal = null; renderApp();
      toast(nm+' and all its data were deleted', 'ok');
      break;
    }
    case 'modal-add-program': openModal('add-program'); break;
    case 'modal-add-course': openModal('add-course'); break;
    case 'modal-add-room': openModal('add-room'); break;
    case 'save-student': {
      const name = fv('f-stu-name'); if (!name){ toast('Enter a name first', 'warn'); break; }
      const progId = document.getElementById('f-stu-prog').value;
      const sem = +document.getElementById('f-stu-sem').value;
      const sec = (fv('f-stu-sec')||'A').toUpperCase().slice(0,1);
      let section = SECTIONS.find(s=>s.programId===progId && s.semester===sem && s.name===sec);
      if (!section){ section = SECTIONS.find(s=>s.programId===progId && s.semester===sem); }
      if (!section){ toast('No matching section for that program/semester', 'warn'); break; }
      const erp = fv('f-stu-erp') || ('NEW'+pad(STUDENTS.length+1,5));
      STUDENTS.push({
        id:'ST'+pad(STUDENTS.length+1,4), erpNo:erp, rollNo:erp, name, father:'—', mother:'—',
        programId:progId, dept:State.activeDept, semester:sem, section:section.name, sectionId:section.id,
        academicYear:State.filters.ay, admissionYear:new Date().getFullYear(),
        email: fv('f-stu-email') || (erp.toLowerCase()+'@students.jbkp-demo.example'), mobile:'—',
        gender:'—', dob:'—', address:'—', category:'—', admissionType:'Regular', status:'Active',
        att: 85, marks: 28, assign: 7, backlogs: 0, subj:null
      });
      section.strength++;
      syncBackend('addStudent', STUDENTS[STUDENTS.length-1]);
      syncBackend('setSectionStrength', section.id, section.strength);
      State.modal = null; renderApp();
      toast(name+' added to Students', 'ok');
      break;
    }
    case 'save-faculty': {
      const name = fv('f-fac-name'); if (!name){ toast('Enter a name first', 'warn'); break; }
      const id = 'FAC'+pad(FACULTY.length+1,3);
      FACULTY.push({
        id, name, designation: document.getElementById('f-fac-des').value,
        qualification: fv('f-fac-qual') || 'M.Tech (CSE)', dept:State.activeDept,
        email: fv('f-fac-email') || (name.split(' ').pop().toLowerCase()+'@jbkp-demo.example'),
        phone: fv('f-fac-phone') || '—', joinDate: new Date().toISOString().slice(0,10),
        status:'Active', expertise: pick(EXPERTISE)
      });
      syncBackend('addFaculty', FACULTY[FACULTY.length-1]);
      State.modal = null; renderApp();
      toast(name+' added to Faculty', 'ok');
      break;
    }
    case 'save-program': {
      const name = fv('f-prog-name'); const id = fv('f-prog-id').toUpperCase();
      if (!name || !id){ toast('Enter a program name and ID', 'warn'); break; }
      if (PROGRAMS.some(p=>p.id===id)){ toast('Program ID already exists', 'warn'); break; }
      PROGRAMS.push({id, name, short:name.length>16?id:name, degree: fv('f-prog-degree')||'—', dept:State.activeDept,
        duration: fv('f-prog-duration')||'—', intake: +fv('f-prog-intake')||0, status:'Active'});
      syncBackend('addProgram', PROGRAMS[PROGRAMS.length-1]);
      State.modal = null; renderApp();
      toast(name+' added to Programs', 'ok');
      break;
    }
    case 'save-course': {
      const name = fv('f-crs-name'); const code = fv('f-crs-code').toUpperCase();
      if (!name || !code){ toast('Enter a course name and code', 'warn'); break; }
      if (COURSES.some(c=>c.code===code)){ toast('Course code already exists', 'warn'); break; }
      const programId = document.getElementById('f-crs-prog').value;
      const semester = +document.getElementById('f-crs-sem').value;
      const facultyId = document.getElementById('f-crs-fac').value || null;
      const theory = +fv('f-crs-theory')||0, lab = +fv('f-crs-lab')||0;
      const c = {code, name, programId, semester, credits: theory+Math.round(lab/2), theory, lab,
        type: theory&&lab?'Theory + Lab':(lab?'Lab / Project':'Theory'), facultyId, status:'Active'};
      c.weekly = groupSections(c).length * (theory+lab);
      COURSES.push(c);
      SYL[code] = {code, academicYear:State.filters.ay, units:[{n:1,title:'Foundations',planned:8,done:0}], updated: new Date().toISOString().slice(0,10)};
      syncBackend('addCourse', c);
      State.modal = null; renderApp();
      toast(code+' added to Courses', 'ok');
      break;
    }
    case 'save-room': {
      const name = fv('f-room-name'); if (!name){ toast('Enter a room name', 'warn'); break; }
      const id = 'ROOM'+pad(ROOMS.length+1,3);
      ROOMS.push({id, name, type: document.getElementById('f-room-type').value, capacity:+fv('f-room-cap')||40, dept:State.activeDept, status:'Available', desc: fv('f-room-desc')});
      syncBackend('addRoom', ROOMS[ROOMS.length-1]);
      State.modal = null; renderApp();
      toast(name+' added to Rooms', 'ok');
      break;
    }
    case 'tt-toggle-edit': ttEditMode = !ttEditMode; renderApp(); break;
    case 'tt-edit-cell': {
      if (el.dataset.entry){ openModal('tt-edit-filled', {entryId: el.dataset.entry}); }
      else { openModal('tt-edit-empty', {sectionId: el.dataset.section, day:+el.dataset.day, period:+el.dataset.period}); }
      break;
    }
    case 'save-tt-add': {
      const sectionId = el.dataset.section, day = +el.dataset.day, period = +el.dataset.period;
      const code = document.getElementById('f-tt-course').value, roomId = document.getElementById('f-tt-room').value;
      const c = COURSES.find(x=>x.code===code);
      const conflict = TT.some(e => (e.facultyId===c.facultyId || e.roomId===roomId || e.sectionId===sectionId) && e.day===day && e.period===period);
      if (conflict){ toast('That slot is no longer free — pick another.', 'bad'); renderApp(); break; }
      TT.push({id:'T'+pad(TT.length+1,4), sectionId, courseCode:code, facultyId:c.facultyId, roomId, day, period, kind:'Theory'});
      syncBackend('addTTEntry', TT[TT.length-1]);
      State.modal = null; renderApp();
      toast(code+' added to '+DAY_FULL[day]+' '+PERIODS[period].n, 'ok');
      break;
    }
    case 'save-tt-remove': {
      const idx = TT.findIndex(e=>e.id===el.dataset.entry);
      if (idx>-1) TT.splice(idx,1);
      syncBackend('removeTTEntry', el.dataset.entry);
      State.modal = null; renderApp();
      toast('Class removed from timetable', 'ok');
      break;
    }
    case 'sort-table': {
      const id = el.dataset.id, key = el.dataset.key; const st = getTableState(id);
      if (st.sort===key) st.dir *= -1; else { st.sort = key; st.dir = 1; }
      renderApp();
      break;
    }
    case 'table-page': { const st = getTableState(el.dataset.id); st.page += (+el.dataset.dir); renderApp(); break; }
    case 'table-search': break; // handled by input event
    case 'export-table': {
      const id = el.dataset.id; const ex = window._lastTableExport && window._lastTableExport[id];
      if (ex) { downloadCSV(id+'.csv', toCSV(ex.cols, ex.rows)); toast('Exported '+id+'.csv', 'ok'); }
      break;
    }
    case 'dist-mode': distMode = el.dataset.mode; renderApp(); break;
    case 'dist-drill': {
      const mode = el.dataset.mode, key = el.dataset.key;
      if (mode==='Program'){ const p = PROGRAMS.find(p=>p.short===key); if(p) State.filters.program = p.id; }
      else if (mode==='Semester'){ State.filters.semester = key.replace('Sem ',''); }
      else { const s = SECTIONS.find(s=>s.label.endsWith(key)); if (s){ State.filters.program=s.programId; State.filters.semester=String(s.semester); State.filters.section=s.id; } }
      setRoute('students');
      break;
    }
    case 'overload-drill': overloadFilterActive = el.dataset.band; setRoute('faculty'); break;
    case 'clear-overload-filter': overloadFilterActive = null; renderApp(); break;
    case 'tt-view': ttView = el.dataset.view; ttViewId = null; renderApp(); break;
    case 'gen-report': genReport(el.dataset.id, el.dataset.fmt); break;
    case 'export-workload': {
      const rows = filteredFacultyList().map(f=>({f}));
      downloadCSV('faculty-workload.csv', toCSV([{label:'Faculty',csv:r=>r.f.name},{label:'Weekly Hours',csv:r=>facultyWeeklyLoad(r.f.id)},{label:'Band',csv:r=>workloadBand(facultyWeeklyLoad(r.f.id))}], rows));
      toast('Exported faculty-workload.csv', 'ok');
      break;
    }
    case 'export-timetable': {
      downloadCSV('timetable.csv', toCSV([{label:'Day',csv:r=>DAY_FULL[r.day]},{label:'Period',csv:r=>PERIODS[r.period].n},{label:'Course',csv:r=>r.courseCode},{label:'Section',csv:r=>SECTIONS.find(s=>s.id===r.sectionId).name},{label:'Faculty',csv:r=>FACULTY.find(f=>f.id===r.facultyId).name},{label:'Room',csv:r=>ROOMS.find(x=>x.id===r.roomId).name}], filteredTTList()));
      toast('Exported timetable.csv', 'ok');
      break;
    }
    case 'erp-sample': {
      document.getElementById('erp-paste').value = 'erpNo,rollNo,name,programId,semester,section,academicYear\n26CSE00501,26271050,Aman Verma,BTECH,3,A,2026-27\n26CSE00502,26271051,Priya Nanda,BTECH,3,A,2026-27\n26BCA00301,26272031,Rohit Saini,BCA,1,B,2026-27';
      break;
    }
    case 'erp-validate': erpValidate(); break;
    case 'erp-confirm': erpConfirm(); break;
    case 'erp-cancel': erpState = {stage:'idle', rows:[], errors:[], dup:0}; renderApp(); break;
    case 'set-threshold': {
      const key = el.dataset.key; const v = +el.value || State.settings[key];
      State.settings[key] = v; syncBackend('setThreshold', key, v); renderApp(); toast('Threshold updated');
      break;
    }
    case 'toggle-setting': { const key = el.dataset.key; State.settings[key] = !State.settings[key]; syncBackend('setThreshold', key, State.settings[key]); renderApp(); break; }
    case 'att-view': AttState.view = el.dataset.view; renderApp(); break;
    case 'att-mark': {
      if (!attCanMark()) break;
      const sid = el.dataset.student, status = el.dataset.status;
      const cur = AttState.marks[sid] || {status:'unmarked', note:''};
      AttState.marks[sid] = {status: cur.status===status ? 'unmarked' : status, note: cur.note||''};
      renderApp();
      break;
    }
    case 'att-note': openModal('att-note', {studentId: el.dataset.student}); break;
    case 'att-note-preset': { const ta = document.getElementById('f-att-note'); if (ta) ta.value = el.dataset.note; break; }
    case 'att-note-save': {
      const sid = el.dataset.student; const note = fv('f-att-note');
      const cur = AttState.marks[sid] || {status:'unmarked', note:''};
      AttState.marks[sid] = {status: cur.status, note};
      State.modal = null; renderApp();
      toast('Note saved', 'ok');
      break;
    }
    case 'att-bulk': {
      const status = el.dataset.status;
      const count = Object.keys(attSelected).filter(id=>attSelected[id]).length;
      if (!count){ toast('Select at least one student first', 'warn'); break; }
      openModal('att-confirm', {kind:'bulk', status, count});
      break;
    }
    case 'att-bulk-confirm': {
      const status = el.dataset.status;
      Object.keys(attSelected).filter(id=>attSelected[id]).forEach(sid => {
        const cur = AttState.marks[sid] || {status:'unmarked', note:''};
        AttState.marks[sid] = {status, note: cur.note||''};
      });
      State.modal = null; renderApp();
      toast('Bulk update applied', 'ok');
      break;
    }
    case 'att-mark-all': openModal('att-confirm', {kind:'mark-all'}); break;
    case 'att-mark-all-confirm': {
      attRoster().forEach(s => {
        const cur = AttState.marks[s.id] || {status:'unmarked', note:''};
        AttState.marks[s.id] = {status:'present', note: cur.note||''};
      });
      State.modal = null; renderApp();
      toast('All students marked Present', 'ok');
      break;
    }
    case 'att-save': attPersist(false); break;
    case 'att-save-anyway': attPersist(true); break;
    case 'att-leave-discard': {
      AttState.marks = JSON.parse(JSON.stringify(AttState.original));
      State.modal = null;
      const r = pendingNavRoute || {route:'dashboard'};
      pendingNavRoute = null;
      setRoute(r.route, r.param);
      break;
    }
    case 'att-report-tab': attReportState.tab = el.dataset.tab; renderApp(); break;
    default: break;
  }
});

// Input events (search, filter search, table search, threshold typing)
document.addEventListener('input', debounce((e) => {
  const el = e.target;
  if (el.id === 'global-search'){
    const results = searchIndex(el.value);
    const box = document.getElementById('search-results');
    box.innerHTML = results.length ? results.map((r,i) => `
      <div class="search-row" data-search-idx="${i}">
        <div class="si">${icon(r.icon)}</div>
        <div class="st"><div class="n">${esc(r.title)}</div><div class="d">${esc(r.sub)}</div></div>
        <div class="tag">${r.type}</div>
      </div>`).join('') : (el.value.trim() ? `<div class="search-row"><div class="st"><div class="n">No results</div><div class="d">Try a different search term</div></div></div>` : '');
    box.classList.toggle('show', !!el.value.trim());
    window._searchResults = results;
    return;
  }
  if (el.dataset.act === 'filter-search'){ filterSearchQ[el.dataset.key] = el.value; renderApp(); setTimeout(()=>{ filterPopOpen = el.dataset.key; const p=document.getElementById('fpop-'+el.dataset.key); if(p){p.classList.add('show'); const i=p.querySelector('input'); if(i){i.focus(); i.selectionStart=i.selectionEnd=i.value.length;} } },0); return; }
  if (el.dataset.act === 'table-search'){ const st = getTableState(el.dataset.id); st.q = el.value; st.page = 1; renderApp(); setTimeout(()=>{ const i=document.querySelector(`[data-act="table-search"][data-id="${el.dataset.id}"]`); if(i){i.focus(); i.selectionStart=i.selectionEnd=i.value.length;} },0); return; }
  if (el.dataset.act === 'set-threshold'){ const key = el.dataset.key; State.settings[key] = +el.value || State.settings[key]; }
  if (el.dataset.act === 'att-search'){ AttState.search = el.value; renderApp(); setTimeout(()=>{ const i=document.getElementById('att-search-input'); if(i){i.focus(); i.selectionStart=i.selectionEnd=i.value.length;} },0); return; }
  if (el.dataset.act === 'att-report-student-search'){ attReportState.studentQ = el.value; renderApp(); setTimeout(()=>{ const i=document.getElementById('att-report-student-input'); if(i){i.focus(); i.selectionStart=i.selectionEnd=i.value.length;} },0); return; }
}, 160));

document.addEventListener('click', (e) => {
  const row = e.target.closest('.search-row[data-search-idx]');
  if (row){
    const idx = +row.dataset.searchIdx;
    const r = window._searchResults && window._searchResults[idx];
    if (r){ r.act(); document.getElementById('search-results').classList.remove('show'); document.getElementById('global-search').value=''; }
  }
});

// tt view picker (select element -> change event)
document.addEventListener('change', (e) => {
  if (e.target.dataset.act === 'tt-pick'){ ttViewId = e.target.value; renderApp(); }
  if (e.target.dataset.act === 'att-filter-change'){
    const key = e.target.dataset.key, val = e.target.value;
    if (key==='date') AttState.date = val;
    else if (key==='programId'){ AttState.programId = val; AttState.semester=''; AttState.sectionId=''; AttState.courseCode=''; }
    else if (key==='semester'){ AttState.semester = val; AttState.sectionId=''; AttState.courseCode=''; }
    else if (key==='sectionId') AttState.sectionId = val;
    else if (key==='courseCode') AttState.courseCode = val;
    else if (key==='period') AttState.period = val;
    AttState.loaded = false; attSelected = {};
    renderApp();
  }
  if (e.target.dataset.act === 'att-report-range'){
    const key = e.target.dataset.key, val = e.target.value;
    attReportState[key] = val;
    if (key==='programId') attReportState.sectionId = '';
    renderApp();
  }
  if (e.target.dataset.act === 'att-select-all'){
    const shown = attFilterRoster();
    const allChecked = shown.length && shown.every(s=>attSelected[s.id]);
    shown.forEach(s => { attSelected[s.id] = !allChecked; });
    renderApp();
  }
  if (e.target.dataset.act === 'att-select-row'){
    attSelected[e.target.dataset.student] = e.target.checked;
    renderApp();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape'){ State.drawer=null; State.modal=null; closeAllDropdowns(); closeAllFilterPops(); renderApp(); }
});

// Warn before closing/reloading the tab with unsaved attendance changes.
window.addEventListener('beforeunload', (e) => {
  if (State.route==='attendance' && attDirtyCount() > 0){ e.preventDefault(); e.returnValue = ''; }
});

function renderChrome(){ /* placeholder for future partial re-render optimization */ }

/* =========================================================================
   INIT
   ========================================================================= */
window.addEventListener('hashchange', () => { const {r,p} = parseHash(); State.route = r; State.routeParam = p; renderApp(); });
function bootDashboard(){
  document.documentElement.setAttribute('data-theme', State.theme);
  const {r,p} = parseHash(); State.route = r || 'dashboard'; State.routeParam = p;
  renderApp();
}
// If no backend module is present at all (e.g. this file opened stand-alone),
// boot straight into demo mode so the dashboard still works.
setTimeout(() => { if (!window.CSEApp || !window.__cseIntegrationLoaded) { document.getElementById('boot-splash') && document.getElementById('boot-splash').classList.add('hide'); document.getElementById('shell') && document.getElementById('shell').classList.remove('hide'); if (!State._booted){ State._booted = true; bootDashboard(); } } }, 1200);
'use strict';
/* =========================================================================
   DEPARTMENTS — Super Admin create/delete, with automatic feature
   provisioning (a starter program, section, rooms and courses so every
   new department gets a working dashboard immediately — every existing
   module (Students, Faculty, Programs, Courses, Workload, Timetable,
   Syllabus, Rooms, Reports, ERP Data, Settings) already works for ANY
   department, since all of it is filtered by State.activeDept).
   ========================================================================= */
function slugify(s){ return s.toUpperCase().replace(/[^A-Z0-9]+/g,'').slice(0,8) || 'DEPT'+(DEPARTMENTS.length+1); }
function uniqueDeptId(base){
  let id = base, n = 2;
  while (DEPARTMENTS.some(d=>d.id===id)) { id = base + n; n++; }
  return id;
}

function createDepartment({name, short}){
  const deptId = uniqueDeptId(slugify(short || name));
  const dept = {id:deptId, name, short: short || name, hod:'', status:'Active', createdAt: new Date().toISOString().slice(0,10)};
  DEPARTMENTS.push(dept);
  syncBackend('addDepartment', dept);

  // ---- Auto-provision starter features for the new department ----
  const progId = uniqueProgramId(deptId);
  const program = {id: progId, name: `B.Tech ${name}`, short: short || name, degree:'Bachelor of Technology', dept: deptId, duration:'4 years', intake:60, status:'Active'};
  PROGRAMS.push(program);
  syncBackend('addProgram', program);

  const section = {id:`${progId}-S1-A`, programId: progId, semester:1, name:'A', label:`${program.short}, Sem 1, Sec A`, homeRoom:null, strength:0};
  SECTIONS.push(section);
  syncBackend('addSection', section);

  const room1 = {id:`${deptId}-R101`, name:`${short||name} Room 101`, type:'Classroom', capacity:60, dept:deptId, status:'Available', desc:''};
  const room2 = {id:`${deptId}-LAB1`, name:`${short||name} Lab 1`, type:'Laboratory', capacity:30, dept:deptId, status:'Available', desc:''};
  ROOMS.push(room1, room2);
  syncBackend('addRoom', room1); syncBackend('addRoom', room2);
  section.homeRoom = room1.id;

  const starterCourses = [
    [`Introduction to ${name}`, 3, 0],
    ['Engineering Mathematics I', 3, 0],
    ['Communication Skills', 2, 0],
  ];
  starterCourses.forEach((d,i) => {
    const code = `${slugify(short||name).slice(0,4)}1${String(i+1).padStart(2,'0')}`;
    const c = {code, name:d[0], programId:progId, semester:1, credits:d[1], theory:d[1], lab:d[2], type:'Theory', facultyId:null, status:'Active'};
    c.weekly = 1 * (c.theory + c.lab); // one section so far
    COURSES.push(c);
    SYL[code] = {code, academicYear: State.filters.ay, units:[{n:1,title:'Foundations',planned:8,done:0}], updated: new Date().toISOString().slice(0,10)};
    syncBackend('addCourse', c);
  });

  return dept;
}
function uniqueProgramId(deptId){
  let id = deptId+'-BTECH', n = 2;
  while (PROGRAMS.some(p=>p.id===id)) { id = deptId+'-BTECH'+n; n++; }
  return id;
}

function deleteDepartment(deptId){
  const progIds = new Set(PROGRAMS.filter(p=>p.dept===deptId).map(p=>p.id));
  const secIds = new Set(SECTIONS.filter(s=>progIds.has(s.programId)).map(s=>s.id));
  const courseCodes = COURSES.filter(c=>progIds.has(c.programId)).map(c=>c.code);

  for (let i=TT.length-1;i>=0;i--) if (secIds.has(TT[i].sectionId)) { syncBackend('removeTTEntry', TT[i].id); TT.splice(i,1); }
  courseCodes.forEach(code => delete SYL[code]);
  for (let i=COURSES.length-1;i>=0;i--) if (progIds.has(COURSES[i].programId)) COURSES.splice(i,1);
  for (let i=SECTIONS.length-1;i>=0;i--) if (progIds.has(SECTIONS[i].programId)) SECTIONS.splice(i,1);
  for (let i=PROGRAMS.length-1;i>=0;i--) if (PROGRAMS[i].dept===deptId) PROGRAMS.splice(i,1);
  for (let i=ROOMS.length-1;i>=0;i--) if (ROOMS[i].dept===deptId) ROOMS.splice(i,1);
  for (let i=FACULTY.length-1;i>=0;i--) if (FACULTY[i].dept===deptId) FACULTY.splice(i,1);
  for (let i=STUDENTS.length-1;i>=0;i--) if (STUDENTS[i].dept===deptId) STUDENTS.splice(i,1);
  const idx = DEPARTMENTS.findIndex(d=>d.id===deptId);
  if (idx>-1) DEPARTMENTS.splice(idx,1);
  syncBackend('deleteDepartment', deptId);

  if (State.activeDept === deptId) State.activeDept = (DEPARTMENTS[0] || {id:''}).id;
}

function deptStats(deptId){
  const progs = PROGRAMS.filter(p=>p.dept===deptId);
  const progIds = new Set(progs.map(p=>p.id));
  const secs = SECTIONS.filter(s=>progIds.has(s.programId));
  const courses = COURSES.filter(c=>progIds.has(c.programId));
  const fac = FACULTY.filter(f=>f.dept===deptId);
  const stu = STUDENTS.filter(s=>s.dept===deptId);
  const rooms = ROOMS.filter(r=>r.dept===deptId);
  return {programs:progs.length, sections:secs.length, courses:courses.length, faculty:fac.length, students:stu.length, rooms:rooms.length, unassigned:courses.filter(c=>!c.facultyId).length};
}

/* =========================================================================
   SUPER ADMIN DASHBOARD
   ========================================================================= */
function pageDepartments(){
  const rows = DEPARTMENTS.map(d => ({d, s: deptStats(d.id)}));
  const totals = rows.reduce((a,r) => ({
    programs:a.programs+r.s.programs, faculty:a.faculty+r.s.faculty, students:a.students+r.s.students,
    courses:a.courses+r.s.courses, unassigned:a.unassigned+r.s.unassigned
  }), {programs:0,faculty:0,students:0,courses:0,unassigned:0});
  const max = Math.max(1, ...rows.map(r=>r.s.students));

  return `
    <div class="page-head">
      <div><h1>Super Admin Dashboard</h1><p>${DEPARTMENTS.length} department${DEPARTMENTS.length!==1?'s':''} · controls everything across the institution</p></div>
      ${gated('modal-add-department', `<button class="btn btn-primary" data-act="modal-add-department">${icon('plus')}Add Department</button>`)}
    </div>
    <div class="kpi-grid">
      ${kpiCard({icon:'building', color:'#17365D', num:DEPARTMENTS.length, label:'Departments', tip:'Total departments in the institution'})}
      ${kpiCard({icon:'faculty', color:'#2F75B5', num:totals.faculty, label:'Faculty (all depts)', tip:'Across every department'})}
      ${kpiCard({icon:'students', color:'#1E8E5A', num:fmtN(totals.students), label:'Students (all depts)', tip:'Across every department'})}
      ${kpiCard({icon:'courses', color:'#B4790A', num:totals.courses, label:'Courses (all depts)', tip:'Across every department'})}
      ${kpiCard({icon:'programs', color:'#8E5FD6', num:totals.programs, label:'Programs (all depts)', tip:'Across every department'})}
      ${kpiCard({icon:'alertTriangle', color: totals.unassigned?'#C0392B':'#1E8E5A', num:totals.unassigned, label:'Unassigned Courses', tip:'Across every department'})}
    </div>
    <div class="panel mb16">
      <div class="panel-head"><div><div class="panel-title">Students by Department</div><div class="panel-sub">Click a department to open its dashboard</div></div></div>
      <div class="bar-chart" style="max-height:260px">
        ${rows.map(r => `<div class="bar-row" data-act="set-dept" data-dept="${r.d.id}">
            <div class="bn wide">${esc(r.d.short)}</div>
            <div class="bar-track tall"><div class="bar-fill" style="width:${Math.round(r.s.students/max*100)}%;background:#2F75B5"></div></div>
            <div class="bar-val wide">${fmtN(r.s.students)}</div>
          </div>`).join('')}
      </div>
    </div>
    <div class="panel">
      <div class="panel-title mb12">All Departments</div>
      <div class="table-wrap"><table class="dtable"><thead><tr>
        <th>Department</th><th>Programs</th><th>Sections</th><th>Courses</th><th>Faculty</th><th>Students</th><th>Status</th><th>Actions</th>
      </tr></thead><tbody>
      ${rows.map(r => `<tr>
        <td><div class="cell-strong">${esc(r.d.name)}</div><div class="cell-sub">${r.d.id} · created ${fmtDate(r.d.createdAt)}</div></td>
        <td>${r.s.programs}</td><td>${r.s.sections}</td><td>${r.s.courses}${r.s.unassigned?` <span class="badge-pill badge-warn">${r.s.unassigned} unassigned</span>`:''}</td>
        <td>${r.s.faculty}</td><td>${fmtN(r.s.students)}</td><td>${statusBadge(r.d.status)}</td>
        <td>
          <span class="icon-action" title="Open dashboard" data-act="set-dept" data-dept="${r.d.id}">${icon('eye')}</span>
          ${gated('modal-add-department', `<span class="icon-action" title="Rename" data-act="edit-department" data-dept="${r.d.id}">${icon('edit')}</span>`)}
          ${gated('delete-department', DEPARTMENTS.length>1 ? `<span class="icon-action" title="Delete" data-act="delete-department" data-dept="${r.d.id}">${icon('trash')}</span>` : '')}
        </td>
      </tr>`).join('')}
      </tbody></table></div>
    </div>
  `;
}

function modalAddDepartment(){
  return `
    <div class="modal-head"><div class="fw7" style="font-size:14.5px">Add Department</div><button class="drawer-close" data-act="close-modal">${icon('x')}</button></div>
    <div class="modal-body">
      <div class="field-row"><label class="field-label">Department Name</label><input id="f-dept-name" class="text-input" placeholder="e.g. Electronics &amp; Communication Engineering"></div>
      <div class="field-row"><label class="field-label">Short Code</label><input id="f-dept-short" class="text-input" placeholder="e.g. ECE" style="text-transform:uppercase" maxlength="12"></div>
      <div class="alert-card">${icon('checkCircle')}<div>
        <div class="at">Auto-provisioned on create</div>
        <div class="ad">A starter B.Tech program, Semester 1 Section A, one classroom, one lab, and 3 starter courses — every dashboard module (Students, Faculty, Timetable, Syllabus, Reports, etc.) works immediately.</div>
      </div></div>
    </div>
    <div class="modal-foot"><button class="btn" data-act="close-modal">Cancel</button><button class="btn btn-primary" data-act="save-department">${icon('plus')}Create Department</button></div>
  `;
}
function modalEditDepartment(deptId){
  const d = DEPARTMENTS.find(x=>x.id===deptId); if (!d) return '';
  return `
    <div class="modal-head"><div class="fw7" style="font-size:14.5px">Edit Department</div><button class="drawer-close" data-act="close-modal">${icon('x')}</button></div>
    <div class="modal-body">
      <div class="field-row"><label class="field-label">Department Name</label><input id="f-dept-edit-name" class="text-input" value="${esc(d.name)}"></div>
      <div class="field-row"><label class="field-label">Short Code</label><input id="f-dept-edit-short" class="text-input" value="${esc(d.short)}"></div>
      <div class="field-row"><label class="field-label">Status</label>
        <select id="f-dept-edit-status" class="select-input"><option ${d.status==='Active'?'selected':''}>Active</option><option ${d.status==='Inactive'?'selected':''}>Inactive</option></select>
      </div>
    </div>
    <div class="modal-foot"><button class="btn" data-act="close-modal">Cancel</button><button class="btn btn-primary" data-act="save-department-edit" data-dept="${d.id}">${icon('check')}Save Changes</button></div>
  `;
}
function modalDeleteDepartmentConfirm(deptId){
  const d = DEPARTMENTS.find(x=>x.id===deptId); if (!d) return '';
  const s = deptStats(deptId);
  return `
    <div class="modal-head"><div class="fw7" style="font-size:14.5px">Delete ${esc(d.name)}?</div><button class="drawer-close" data-act="close-modal">${icon('x')}</button></div>
    <div class="modal-body">
      <div class="alert-card">${icon('alertTriangle')}<div>
        <div class="at">This cannot be undone</div>
        <div class="ad">This will permanently delete ${s.programs} program(s), ${s.sections} section(s), ${s.courses} course(s), ${s.faculty} faculty member(s), ${fmtN(s.students)} student(s), and all related timetable/syllabus data.</div>
      </div></div>
    </div>
    <div class="modal-foot"><button class="btn" data-act="close-modal">Cancel</button><button class="btn btn-danger" data-act="confirm-delete-department" data-dept="${deptId}">${icon('trash')}Delete Permanently</button></div>
  `;
}
'use strict';
/* =========================================================================
   AUTH + ROLES — bridges the classic-script app to window.Backend
   (set up by backend/integration.mjs). Falls back to full-access demo
   mode automatically when Firebase isn't configured, so the app keeps
   working standalone with zero setup.
   ========================================================================= */
const VALID_ROLES = ['Super Admin','HOD','Department Coordinator','Faculty','Data Entry Operator','Viewer'];
const ROLE_DESCRIPTIONS = {
  'Super Admin': 'Full access to every module, including system configuration.',
  'HOD': 'Full CSE department access: approvals, workload, timetable overrides.',
  'Department Coordinator': 'Manages academics, timetable and workload allocation.',
  'Faculty': 'Access limited to own courses, timetable, attendance, syllabus and marks.',
  'Data Entry Operator': 'Enters and updates student, faculty and ERP data.',
  'Viewer': 'Read-only access to the dashboard and reports.',
};
const ALL_ROUTES_NO_ADMIN = ['dashboard','students','faculty','programs','courses','workload','timetable','syllabus','rooms','attendance','reports','erp','settings'];
const ROLE_NAV = {
  'Super Admin': null, // null = every route, including 'departments'
  'HOD': ALL_ROUTES_NO_ADMIN,
  'Viewer': ALL_ROUTES_NO_ADMIN,
  'Department Coordinator': ['dashboard','students','faculty','programs','courses','workload','timetable','syllabus','rooms','attendance','reports'],
  'Faculty': ['dashboard','students','courses','workload','timetable','syllabus','attendance','reports'],
  'Data Entry Operator': ['dashboard','students','faculty','erp','reports'],
};
const ACTION_ROLES = {
  'modal-add-program':['Super Admin','HOD'], 'save-program':['Super Admin','HOD'],
  'modal-add-course':['Super Admin','HOD','Department Coordinator'], 'save-course':['Super Admin','HOD','Department Coordinator'],
  'modal-add-room':['Super Admin','HOD'], 'save-room':['Super Admin','HOD'],
  'modal-add-student':['Super Admin','HOD','Data Entry Operator'], 'save-student':['Super Admin','HOD','Data Entry Operator'],
  'modal-add-faculty':['Super Admin','HOD','Data Entry Operator'], 'save-faculty':['Super Admin','HOD','Data Entry Operator'],
  'assign-faculty':['Super Admin','HOD','Department Coordinator'], 'pick-assign-faculty':['Super Admin','HOD','Department Coordinator'],
  'tt-toggle-edit':['Super Admin','HOD','Department Coordinator'], 'tt-edit-cell':['Super Admin','HOD','Department Coordinator'],
  'save-tt-add':['Super Admin','HOD','Department Coordinator'], 'save-tt-remove':['Super Admin','HOD','Department Coordinator'],
  'erp-validate':['Super Admin','HOD','Data Entry Operator'], 'erp-confirm':['Super Admin','HOD','Data Entry Operator'],
  'set-threshold':['Super Admin','HOD'], 'toggle-setting':['Super Admin','HOD'],
  'upload-doc':['Super Admin','HOD','Data Entry Operator'], 'delete-doc':['Super Admin','HOD'],
  'mark-attendance':['Super Admin','HOD','Faculty','Data Entry Operator'],
  'mark-class-attendance':['Super Admin','HOD','Department Coordinator','Faculty'],
  'modal-add-department':['Super Admin'], 'save-department':['Super Admin'],
  'edit-department':['Super Admin'], 'save-department-edit':['Super Admin'], 'delete-department':['Super Admin'],
};
const SUPER_ADMIN_ONLY = ['modal-add-department','save-department','edit-department','save-department-edit','delete-department'];
function canAct(action){
  if (State.backendMode !== 'auth' || !State.currentUser) return true; // demo mode: unrestricted, as before
  const role = State.currentUser.role;
  if (SUPER_ADMIN_ONLY.includes(action)) return role === 'Super Admin'; // department management: Super Admin only, no HOD bypass
  if (role==='Super Admin' || role==='HOD') return true;
  const allowed = ACTION_ROLES[action];
  if (!allowed) return role !== 'Viewer';
  return allowed.includes(role);
}
function navAllowed(route){
  if (State.backendMode !== 'auth' || !State.currentUser) return true;
  const list = ROLE_NAV[State.currentUser.role];
  return list === null || list === undefined ? true : list.includes(route);
}
function gated(action, html){ return canAct(action) ? html : ''; }

/* =========================================================================
   LOGIN / SIGN UP SCREEN
   ========================================================================= */
let authMode = 'signin'; // signin | signup
let authError = '';
let authBusy = false;
function renderAuthScreen(){
  const host = document.getElementById('boot-splash');
  host.innerHTML = `
    <div class="auth-card">
      <div class="brand" style="border:none;padding:0 0 18px;justify-content:center">
        <div class="brand-mark">JB</div>
        <div class="brand-txt" style="text-align:left">
          <div class="l1" style="color:var(--text)">JB Knowledge Park</div>
          <div class="l2" style="color:var(--text-2)">Computer Science &amp; Engineering</div>
        </div>
      </div>
      <div class="fw7" style="font-size:16px;margin-bottom:4px">${authMode==='signin'?'Sign in':'Create an account'}</div>
      <div class="fs12 text-2 mb16">${authMode==='signin'?'Use your department credentials to continue.':'New accounts default to Viewer until a Super Admin/HOD updates the role in Firestore.'}</div>
      ${authError ? `<div class="alert-card mb12">${icon('alertTriangle')}<div class="ad">${esc(authError)}</div></div>` : ''}
      ${authMode==='signup' ? `<div class="field-row"><label class="field-label">Full Name</label><input id="auth-name" class="text-input" placeholder="Dr. Jane Doe"></div>` : ''}
      <div class="field-row"><label class="field-label">Email</label><input id="auth-email" class="text-input" placeholder="you@jbkp.example" autocomplete="username"></div>
      <div class="field-row"><label class="field-label">Password</label><input id="auth-password" type="password" class="text-input" placeholder="••••••••" autocomplete="${authMode==='signin'?'current-password':'new-password'}"></div>
      ${authMode==='signup' ? `
      <div class="field-row"><label class="field-label">Department</label>
        <select id="auth-dept" class="select-input">${DEPARTMENTS.map(d=>`<option value="${d.id}">${esc(d.name)}</option>`).join('')}</select>
      </div>
      <div class="alert-card mb12">${icon('shield')}<div>
        <div class="at">New accounts start as Viewer</div>
        <div class="ad">A Super Admin promotes you to the right role afterwards — this is enforced by the security rules, not just the UI, so nobody can self-grant access. Roles: ${VALID_ROLES.map(r=>`<b>${r}</b>`).join(', ')}.</div>
      </div></div>` : ''}
      <button class="btn btn-primary mt12" style="width:100%;justify-content:center" data-act="auth-submit" ${authBusy?'disabled':''}>
        ${authBusy?'Please wait…':(authMode==='signin'?'Sign In':'Create Account')}
      </button>
      <div class="fs12 text-2 mt16" style="text-align:center">
        ${authMode==='signin' ? `New here? <span class="reset-link" data-act="auth-toggle">Create an account</span>` : `Already have an account? <span class="reset-link" data-act="auth-toggle">Sign in</span>`}
      </div>
    </div>
  `;
  host.classList.remove('hide');
  document.getElementById('shell').classList.add('hide');
}
function renderBootSplash(text){
  const host = document.getElementById('boot-splash');
  host.innerHTML = `<div class="auth-card" style="text-align:center"><div class="brand-mark" style="margin:0 auto 14px">JB</div><div class="fw7 mb8">${esc(text||'Connecting…')}</div><div class="fs12 text-2">CSE Department Digital Command Center</div></div>`;
  host.classList.remove('hide');
  document.getElementById('shell').classList.add('hide');
}
function hideBootUI(){
  document.getElementById('boot-splash').classList.add('hide');
  document.getElementById('shell').classList.remove('hide');
}

document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-act]'); if (!el) return;
  const act = el.dataset.act;
  if (act === 'auth-toggle'){ authMode = authMode==='signin'?'signup':'signin'; authError=''; renderAuthScreen(); }
  if (act === 'auth-submit'){ doAuthSubmit(); }
  if (act === 'sign-out'){ if (window.Backend && window.Backend.signOutUser) window.Backend.signOutUser(); }
  if (act === 'doc-view'){
    window.Backend.getSignedUrl(el.dataset.path).then(url => window.open(url, '_blank')).catch(err => toast('Could not open document: '+err.message, 'bad'));
  }
  if (act === 'doc-delete'){
    window.Backend.deleteDocument(el.dataset.path).then(() => {
      delete docsCache[el.dataset.student];
      renderApp();
      toast('Document deleted', 'ok');
    }).catch(err => toast('Could not delete document: '+err.message, 'bad'));
  }
});
document.addEventListener('change', (e) => {
  if (e.target.id === 'doc-upload-input' && e.target.files && e.target.files[0]){
    const studentId = e.target.dataset.student;
    const file = e.target.files[0];
    if (file.size > 10 * 1024 * 1024){ toast(file.name+' is over 10 MB — choose a smaller file.', 'warn'); e.target.value = ''; return; }
    toast('Uploading '+file.name+'…');
    window.Backend.uploadStudentDocument(studentId, file).then(() => {
      delete docsCache[studentId];
      renderApp();
      toast(file.name+' uploaded', 'ok');
    }).catch(err => toast('Upload failed: '+err.message, 'bad'));
  }
});
async function doAuthSubmit(){
  const email = (document.getElementById('auth-email')||{}).value || '';
  const password = (document.getElementById('auth-password')||{}).value || '';
  if (!email || !password){ authError = 'Enter an email and password.'; renderAuthScreen(); return; }
  authBusy = true; authError = ''; renderAuthScreen();
  try {
    if (authMode==='signin'){
      await window.Backend.signIn(email, password);
    } else {
      const name = (document.getElementById('auth-name')||{}).value || email;
      const deptId = (document.getElementById('auth-dept')||{}).value || DEPARTMENTS[0].id;
      await window.Backend.signUp({email, password, name, role:'Viewer', deptId});
    }
    // onAuthed() will be invoked by the auth-state listener in integration.mjs
  } catch (err) {
    authBusy = false;
    authError = friendlyAuthError(err);
    renderAuthScreen();
  }
}
function friendlyAuthError(err){
  const c = err && err.code || '';
  if (c.includes('user-not-found') || c.includes('wrong-password') || c.includes('invalid-credential')) return 'Incorrect email or password.';
  if (c.includes('email-already-in-use')) return 'An account already exists with that email.';
  if (c.includes('weak-password')) return 'Password should be at least 6 characters.';
  if (c.includes('invalid-email')) return 'Enter a valid email address.';
  return (err && err.message) || 'Something went wrong. Please try again.';
}

/* =========================================================================
   BOOT HOOKS — called by backend/integration.mjs
   ========================================================================= */
window.CSEApp = {
  boot(mode){
    State.backendMode = mode;
    if (mode === 'demo'){ hideBootUI(); bootDashboard(); }
    else { renderBootSplash('Connecting…'); }
  },
  onAuthed(profile){
    State.currentUser = profile;
    authBusy = false;
    hideBootUI();
    if (profile.role !== 'Super Admin' && profile.deptId) State.activeDept = profile.deptId;
    if (profile.role === 'Faculty' && profile.facultyId) State.filters.faculty = profile.facultyId;
    if (!State._booted){ bootDashboard(); State._booted = true; }
    else renderApp();
  },
  onSignedOut(){
    State.currentUser = null; State._booted = false;
    authMode = 'signin'; authError=''; authBusy=false;
    renderAuthScreen();
  },
  hydrate(globalName, docs){
    if (!docs || !docs.length) return; // keep local demo data if Firestore collection is still empty
    const target = { PROGRAMS, SECTIONS, COURSES, FACULTY, STUDENTS, ROOMS, TT, DEPARTMENTS, ATTENDANCE }[globalName];
    if (!target) return;
    target.length = 0; docs.forEach(d => target.push(d));
    if (State._booted) renderApp();
  },
  hydrateSyllabus(byId){
    if (!byId || !Object.keys(byId).length) return;
    Object.keys(SYL).forEach(k => delete SYL[k]);
    Object.keys(byId).forEach(k => SYL[k] = byId[k]);
    if (State._booted) renderApp();
  }
};
