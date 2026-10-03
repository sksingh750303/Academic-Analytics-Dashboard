-- ---------------------------------------------------------------------------
-- Supabase Storage policies for the "documents" bucket.
-- Run in Supabase Dashboard -> SQL Editor (or via `supabase db execute`).
--
-- IMPORTANT CAVEAT: this app authenticates users with FIREBASE Auth, not
-- Supabase Auth, and talks to Supabase Storage using the public anon key.
-- That means Supabase's Row Level Security has no reliable way to know
-- "who" is calling — auth.uid() will be null, because Supabase was never
-- told who signed in. The policy below is therefore intentionally
-- permissive (anyone holding the anon key can read/write the bucket),
-- which is fine for an internal tool where the anon key isn't public and
-- the app UI is the enforcement layer (see app.js role gating) — but it is
-- NOT equivalent to real server-side authorization.
--
-- To properly authorize Storage access per-Firebase-user, do ONE of:
--   1. Route uploads/downloads through a small server (Cloud Function /
--      Supabase Edge Function) that verifies the Firebase ID token, then
--      uses the Supabase SERVICE ROLE key server-side to perform the
--      operation — the browser never touches Supabase directly.
--   2. Configure Supabase's "Third-Party Auth" support for Firebase, if
--      available on your Supabase plan, so Supabase can verify Firebase
--      JWTs directly and auth.uid() becomes meaningful in these policies.
--      Check the current Supabase docs for exact setup steps.
-- ---------------------------------------------------------------------------

-- Enable RLS on the storage objects table (usually already enabled by default)
alter table storage.objects enable row level security;

-- Allow anyone with the anon key to read/write inside the "documents" bucket.
create policy "documents_bucket_read"
on storage.objects for select
using ( bucket_id = 'documents' );

create policy "documents_bucket_insert"
on storage.objects for insert
with check ( bucket_id = 'documents' );

create policy "documents_bucket_delete"
on storage.objects for delete
using ( bucket_id = 'documents' );

-- Optional: restrict file size / type at the bucket level from the
-- Dashboard (Storage -> documents -> Configuration) rather than in SQL —
-- e.g. cap uploads to 10 MB and allow image/*, application/pdf,
-- text/csv, and spreadsheet MIME types.
