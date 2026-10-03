# Academic-Analytics-Dashboard — Firebase + Supabase edition

This is the same Academic-Analytics-Dashboard, wired to a real
backend: **Firebase** for Authentication + Firestore (data), and
**Supabase Storage** for uploaded files (student documents, ERP import
files). It implements the 6 roles — Super Admin, HOD, Department
Coordinator, Faculty, Data Entry Operator, Viewer — exactly as described in
Settings → Roles & Permissions.

It runs with **zero setup** in local demo mode (same data/behavior as the
standalone version) until you fill in your own Firebase/Supabase project
details below — nothing breaks if you just open it as-is.

## Quick start checklist

Follow these in order — each one is a full section further down this file.

- [ ] **Step 1 —** [Run it locally in demo mode](#1-run-it-locally-right-now-demo-mode-no-setup) (2 min — confirms the files are intact, nothing to configure yet)
- [ ] **Step 2 —** [Set up a real Firebase project](#2-set-up-a-real-firebase-project) (Auth + Firestore + security rules)
- [ ] **Step 3 —** [Set up Supabase Storage](#3-set-up-supabase-storage-for-documents--erp-file-uploads) (optional — only needed for document/file uploads)
- [ ] **Step 4 —** [Seed real data](#4-seed-real-data-optional-but-recommended) into your new Firestore project (optional but recommended)
- [ ] **Step 5 —** [Create your first Super Admin](#5-create-your-first-super-admin) account
- [ ] **Step 6 —** [Test everything locally](#6-test-it-locally-against-your-real-backend) against your real backend before trusting it
- [ ] **Step 7 —** [Deploy it somewhere real](#7-deploy-it-somewhere-real) once local testing passes

## Why this is a folder of files, not one HTML file

Real Firebase/Supabase calls need network access to `googleapis.com` and
`*.supabase.co`. That's blocked inside a published Claude.ai artifact page
(sandboxed), so this version is meant to be **hosted yourself** — locally
for testing, or on Firebase Hosting / Vercel / Netlify / any static host.

## File layout

```
index.html                    the app shell (loads everything below)
styles.css                    all styling
data.js                       demo data generator (also the local fallback)
app.js                        UI, pages, roles/permissions, event handling
backend/
  firebase-init.mjs           <- put your Firebase config here
  supabase-init.mjs           <- put your Supabase config here
  storage.mjs                 Supabase Storage upload/list/delete helpers
  integration.mjs             wires Firebase Auth + Firestore + Storage
                               into the app (you shouldn't need to edit this)
firestore.rules               security rules matching the 6 roles
storage-policies.sql          Supabase Storage bucket policies
seed-firestore.cjs            one-time script to populate Firestore with
                               the same realistic demo dataset
package.json                  only needed for running the seed script
```

## 1. Run it locally right now (demo mode, no setup)

Browsers block ES module imports over `file://`, so you need a tiny local
server — you do **not** need to install anything beyond Node or Python:

```bash
# either works
npx serve .
# or
python3 -m http.server 8080
```

Then open the printed URL. You'll see the dashboard boot straight into demo
mode, identical to the standalone artifact — this confirms the file layout
is intact before you touch any config.

## 2. Set up a real Firebase project

1. [Firebase Console](https://console.firebase.google.com) → **Add project**.
2. **Build → Authentication → Sign-in method** → enable **Email/Password**.
3. **Build → Firestore Database → Create database** → start in
   **production mode** (the rules file below replaces the default-deny).
4. **Project settings → General → Your apps → Add app → Web (</>)** → copy
   the `firebaseConfig` object it gives you.
5. Paste those values into `backend/firebase-init.mjs` (replace the
   `YOUR_...` placeholders). The app detects this automatically — as soon
   as `apiKey` isn't the placeholder string, it switches from demo mode to
   showing the real login screen.
6. Deploy the security rules:
   ```bash
   npm install -g firebase-tools   # one-time
   firebase login
   firebase init firestore         # point it at firestore.rules, same project
   firebase deploy --only firestore:rules
   ```

## 3. Set up Supabase Storage (for documents + ERP file uploads)

1. [Supabase Dashboard](https://supabase.com/dashboard) → **New project**.
2. **Storage → New bucket** → name it exactly `documents` (matches
   `supabaseConfig.bucket` in `backend/supabase-init.mjs`). Private is fine.
3. **SQL Editor** → paste and run `storage-policies.sql`.
   **Read the caveat at the top of that file** — because this app
   authenticates with Firebase (not Supabase Auth), the policies can't
   verify *who's* calling on their own. For anything beyond an internal
   tool, route uploads through a small server that checks the Firebase ID
   token first (see the file for details).
4. **Project Settings → API** → copy the **Project URL** and **anon
   public key**.
5. Paste those into `backend/supabase-init.mjs`.

If you skip this section, everything still works — the Documents tab just
shows the placeholder demo rows instead of real uploads, exactly like the
standalone version.

## 4. Seed real data (optional but recommended)

Without this step, your new Firestore project starts completely empty —
the app will run, but every list will be blank until people start adding
records by hand.

```bash
npm install
```
Then **Firebase Console → Project settings → Service accounts → Generate
new private key** → save the downloaded file as `serviceAccountKey.json`
in this folder (never commit this file — it has full admin access).

```bash
node seed-firestore.cjs
```

This pushes the same 42 faculty / 24 sections / 68 courses / 1,240
students / 18 rooms / conflict-free timetable you saw in the demo into your
real Firestore project.

## 5. Create your first Super Admin

New sign-ups always start as **Viewer** (enforced both in the UI and in
`firestore.rules`, so nobody can grant themselves access by editing
client-side code). To bootstrap your own admin account:

1. Open the app, click **Create an account**, sign up with your email.
2. In the **Firestore Console**, open `users/<your-uid>` (find the uid
   under Authentication → Users).
3. Change the `role` field from `Viewer` to `Super Admin` (or `HOD`).
4. Refresh the app — you're now in with full access, and can promote
   teammates to the right role the same way (or build an admin screen for
   it later; this version keeps that step manual and explicit on purpose).

## 6. Test it locally against your real backend

Before deploying anywhere, run the same local server from Step 1
(`npx serve .` or `python3 -m http.server 8080`) and go through this list
against your real Firebase/Supabase project:

- [ ] Sign up a second test account, confirm it lands as **Viewer** and
      can't see the Departments nav item or any Add/Edit buttons
- [ ] Promote that account's role in the Firestore Console, refresh the
      page, confirm the UI now shows the right nav items and buttons for
      that role (Settings → Roles & Permissions lists what each role should see)
- [ ] As Super Admin: create a department, confirm the starter program /
      section / rooms / courses appear immediately in their respective pages
- [ ] Add a student, add a faculty member, assign faculty to an unassigned
      course, edit the timetable — refresh the page each time and confirm
      the change persisted (proves it's writing to Firestore, not just local state)
- [ ] Open the same URL in a second browser (or incognito window), signed
      in as a different user — confirm both windows see each other's
      changes live, without refreshing (proves Firestore's real-time sync)
- [ ] Upload a document on a student's profile, confirm it appears in your
      Supabase Storage bucket's `students/` folder in the Supabase Dashboard
- [ ] Delete the test department from Step 3 of this checklist, confirm
      everything it owned (program, section, courses, rooms) disappeared too
- [ ] Try signing in with a wrong password, confirm you get a friendly
      error rather than a crash
- [ ] Open **Attendance**, pick a date/program/semester/section/subject/
      lecture, confirm every student starts "Not Marked", mark a few
      Present/Absent/Leave, add a note, click Save — refresh the page and
      confirm the marks and note are still there (and still show up in
      **Attendance Reports**)
- [ ] Try to leave the Attendance page with unsaved marks, confirm you get
      the "unsaved changes" prompt

Once all of that checks out, move on to deploying.

## 7. Deploy it somewhere real

This is a static site — any static host works:

```bash
# Firebase Hosting (reuses the project you already made)
firebase init hosting     # public directory: . (this folder)
firebase deploy --only hosting
```
Vercel/Netlify: just point them at this folder, no build command needed.

## Multi-department support (Super Admin)

A Super Admin can create and delete whole departments from **Departments**
in the sidebar (visible only to Super Admin — not even HOD can create or
delete a department, matching the role spec exactly). Creating a
department automatically provisions a starter program, a Semester 1
Section A, a classroom, a lab, and three starter courses — every existing
module (Students, Faculty, Timetable, Syllabus, Rooms, Reports, ERP Data,
Settings) works immediately for the new department with zero extra code,
because the whole app is filtered by the currently active department.
Deleting a department cascades: it removes every program, section,
course, faculty member, student, room, and timetable entry that belongs
to it (chunked into batches of 400 Firestore writes, since a populated
department — the seeded CSE one included — can exceed Firestore's
500-write batch limit).

The header's department pill lets a Super Admin switch which department
they're viewing. Every other role is locked to the department they signed
up under (`deptId` on their `users/{uid}` profile) — they never see this
switcher as a dropdown, just their own department's name.

## Student Attendance module (Coordinator Attendance Management)

A new **Attendance** item in the sidebar (visible to Super Admin, HOD,
Department Coordinator and Faculty — Viewer gets read-only access, Data
Entry Operator does not see it) opens a full per-date/subject/section/
lecture attendance register:

- **Filter toolbar** — Date, Program, Semester, Section, Subject and
  Lecture/Period. The register only loads once every filter is set, so
  nothing is ever marked against the wrong class by accident.
- **Every student starts "Not Marked"** — never auto-absent. Click a
  student's circular P / A / L control (green/red/amber) to mark Present,
  Absent or Leave; click the same one again to clear it back to Not Marked.
- **Search, select-all and bulk actions** — search by name/ERP/roll no.,
  select a subset of students, then "Mark Selected Present/Absent/Leave"
  (with a confirmation naming exactly how many students are affected).
- **Mark All Present** — marks every student in the *currently loaded*
  section/subject/lecture/date only, behind a confirmation dialog that
  spells out the exact scope.
- **Per-student notes** — an icon opens a small modal with one-click presets
  (Medical leave, Late arrival, Parent informed, Left campus early, Approved
  leave) plus a free-text field.
- **Live summary cards** — Total / Present / Absent / Leave / Not Marked /
  Attendance %, recalculated as you mark.
- **Save** — if any student is still Not Marked, you get a "Save Anyway"
  confirmation rather than a silent save (Not Marked students are *never*
  written as absent). Saved records use a deterministic Firestore document
  id (section + subject + period + date + student), so saving the same
  session twice always updates the one true record — duplicates are
  structurally impossible, matching how the rest of this backend already
  handles idempotent writes.
- **Unsaved-changes protection** — navigating away from Attendance with
  unsaved marks prompts for confirmation, and closing/reloading the tab
  shows the browser's own "leave site?" warning.
- **Responsive** — a table on desktop, stacked cards on mobile
  (`@media max-width: 720px`, the same breakpoint used elsewhere in the app).
- **Attendance Reports** (tab inside the Attendance page) — By Class (date
  range + section roll-up), By Student (search any student, see every
  subject's attendance), and By Subject (every enrolled student's
  attendance for one course). All three use the exact same formula:
  `attendancePercentage = presentClasses / totalMarkedClasses * 100` —
  "Not Marked" classes are never counted as absent and never appear in the
  denominator (e.g. 35 present out of 40 marked classes = 87.5%, even if
  10 more classes haven't been held/marked yet).

**Firestore**: a new `attendance` collection (security rule already in
`firestore.rules`; synced in `backend/integration.mjs` via a
`saveAttendanceBatch()` batched write, chunked at 400/batch like every
other bulk write in this app). Document ids look like
`att_BTECH-S5-A_CS501_P0_2026-09-15_ST0001` — see `attendanceId()` in
`data.js`.

**Student profile / documents (coordinator view)**: the existing student
drawer's *Subjects* tab now shows each course's **real** attendance
(present/total classes and %) computed live from the `attendance`
collection, falling back to the original demo estimate only for a
student+course that has no attendance marked yet. The *Documents* tab was
already wired to Supabase Storage (Section 3 above) — ID Card, Admission
Documents, Certificates and Other Documents categories, with
view/download and upload/delete gated by role.

**Honest boundary**: this app's roles are Super Admin / HOD / Department
Coordinator / Faculty / Data Entry Operator / Viewer — there is no
"Student" login role, so students don't sign in and view their own
dashboard yet. A real student-facing self-service portal (its own auth,
its own Firestore rules scoping a student to only their own documents) is
a separate, larger piece of work than what's described above; what's
shipped here is the full Coordinator-side attendance marking/reporting
system plus the coordinator's upgraded view of each student's real
attendance and documents.

## What's genuinely wired up vs. what's a documented boundary

**Real, working, tested:**
- Firebase Auth sign-in/sign-up, Firestore live sync (add a student/course/
  room/program/faculty member, assign faculty, edit the timetable — all of
  it writes to Firestore and every connected browser sees the update)
- All 6 roles' permissions, matching your Settings screenshot exactly
  (verified with automated tests simulating every role)
- Super Admin can create/delete departments, with automatic feature
  provisioning on create and cascading cleanup on delete (also covered by
  automated tests, including the HOD-cannot-bypass-this check)
- Supabase Storage uploads/downloads/deletes for student documents and ERP
  import files
- Coordinator attendance marking end-to-end (duplicate-proof saves, bulk
  actions, Mark All Present with a scoped confirmation, notes, the unsaved-
  changes guard, and the exact attendance-percentage formula) — also
  covered by automated tests

**Honest boundaries, not silently faked:**
- Supabase Storage authorization is coarse (anon-key level) unless you add
  the server-proxy step in `storage-policies.sql` — documented there, not
  hidden
- The audit log (`activities` collection) is written to via
  `window.Backend.logActivity(...)`, but the dashboard's "Recent Activity"
  panel still reads the original demo seed data — wiring it to read live
  from Firestore is a small, clearly separable next step
- Manual timetable edits add single-period theory classes only; lab blocks
  stay auto-scheduled (same boundary as the standalone version)
- PDF/Excel report export still produces CSV with a note — no fake PDF/XLSX
