import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://doaclmrfvfixfspqfgut.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvYWNsbXJmdmZpeGZzcHFmZ3V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzNjQyODQsImV4cCI6MjA2NDk0MDI4NH0.Saw_cbQZxw1RBUsaiHXw1ndcRp7_HEEt3A0plxEE-4g";

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
