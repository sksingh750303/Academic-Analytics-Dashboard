// storage.mjs — Supabase Storage helpers
import { supabase, SUPABASE_CONFIGURED, supabaseConfig } from "./supabase-init.mjs";

function assertReady(){
  if (!SUPABASE_CONFIGURED) throw new Error("Supabase is not configured yet — fill in backend/supabase-init.mjs");
}

// Document categories shown in the Student profile's Documents tab (Module 2).
// Stored one subfolder per category so they can be listed/filtered by type:
// students/{studentId}/{category}/{timestamp}-{filename}
export const DOCUMENT_CATEGORIES = ["ID Card", "Admission Documents", "Certificates", "Other Documents"];

// Upload a file for a student (ID card, admission docs, certificates, etc.)
export async function uploadStudentDocument(studentId, file, category){
  assertReady();
  const cat = DOCUMENT_CATEGORIES.includes(category) ? category : "Other Documents";
  const path = `students/${studentId}/${cat}/${Date.now()}-${file.name}`;
  const { error } = await supabase.storage.from(supabaseConfig.bucket).upload(path, file, { upsert: false });
  if (error) throw error;
  return { path, category: cat, name: file.name, size: file.size, uploadedAt: new Date().toISOString() };
}

// List all documents on file for a student, grouped by category. Supabase's
// list() only returns the immediate children of a path, so we query each
// known category subfolder (plus a legacy flat listing for files uploaded
// before categories existed) and merge the results.
export async function listStudentDocuments(studentId){
  assertReady();
  const results = [];
  for (const cat of DOCUMENT_CATEGORIES) {
    const { data, error } = await supabase.storage.from(supabaseConfig.bucket)
      .list(`students/${studentId}/${cat}`, { sortBy: { column: "created_at", order: "desc" } });
    if (error) continue; // category subfolder may simply not exist yet
    (data || []).filter(f => f.id).forEach(f => {
      results.push({ name: f.name, path: `students/${studentId}/${cat}/${f.name}`, category: cat, size: f.metadata?.size, created: f.created_at });
    });
  }
  // Legacy flat files (uploaded before category subfolders were introduced)
  const { data: legacy } = await supabase.storage.from(supabaseConfig.bucket).list(`students/${studentId}`, { sortBy: { column: "created_at", order: "desc" } });
  (legacy || []).filter(f => f.id).forEach(f => {
    results.push({ name: f.name, path: `students/${studentId}/${f.name}`, category: "Other Documents", size: f.metadata?.size, created: f.created_at });
  });
  return results;
}

// Signed URL (time-limited) so a private bucket can still be viewed/downloaded
export async function getSignedUrl(path, expiresInSeconds){
  assertReady();
  const { data, error } = await supabase.storage.from(supabaseConfig.bucket).createSignedUrl(path, expiresInSeconds || 3600);
  if (error) throw error;
  return data.signedUrl;
}

export async function deleteDocument(path){
  assertReady();
  const { error } = await supabase.storage.from(supabaseConfig.bucket).remove([path]);
  if (error) throw error;
  return true;
}

// Raw ERP import file (CSV/XLSX) kept for audit trail at erp-imports/{timestamp}-{filename}
export async function uploadERPFile(file){
  assertReady();
  const path = `erp-imports/${Date.now()}-${file.name}`;
  const { error } = await supabase.storage.from(supabaseConfig.bucket).upload(path, file, { upsert: false });
  if (error) throw error;
  return path;
}

// Generated report exports (CSV/Excel/PDF), kept at reports/{timestamp}-{filename}
export async function uploadReportExport(filename, blob){
  assertReady();
  const path = `reports/${Date.now()}-${filename}`;
  const { error } = await supabase.storage.from(supabaseConfig.bucket).upload(path, blob, { upsert: false });
  if (error) throw error;
  return path;
}
