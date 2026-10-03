// supabase-init.mjs
// ---------------------------------------------------------------------------
// Fill in YOUR Supabase project URL + anon key below (Supabase Dashboard ->
// Project Settings -> API). Then create a Storage bucket named "documents"
// (Storage -> New bucket -> name: documents -> can be private) and apply
// the policies in storage-policies.sql (see README.md).
// ---------------------------------------------------------------------------
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

export const supabaseConfig = {
  url: "https://YOUR_PROJECT.supabase.co",
  anonKey: "YOUR_SUPABASE_ANON_KEY",
  bucket: "documents",
};

export const SUPABASE_CONFIGURED = supabaseConfig.url !== "https://YOUR_PROJECT.supabase.co";

export const supabase = SUPABASE_CONFIGURED
  ? createClient(supabaseConfig.url, supabaseConfig.anonKey)
  : null;
