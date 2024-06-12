import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://dcyskrcroulilmgohtji.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjeXNrcmNyb3VsaWxtZ29odGppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4ODc0NjYsImV4cCI6MjAyMjQ2MzQ2Nn0.Xah3MxWSsRoQPnN7eIQ5BBh9fSARUBFL6rQqDyP8h6g"

export const supabase = createClient(supabaseUrl, supabaseKey);
