import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://akcomktszeziznhpgooy.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrY29ta3RzemV6aXpuaHBnb295Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4NTQ3MzcsImV4cCI6MjAyNjQzMDczN30.cGVicYuVovhfaZDFvECvSruRthXBEOz31CvkKMqvIAY";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
