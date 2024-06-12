import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://dcyskrcroulilmgohtji.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjeXNrcmNyb3VsaWxtZ29odGppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4ODc0NjYsImV4cCI6MjAyMjQ2MzQ2Nn0.Xah3MxWSsRoQPnN7eIQ5BBh9fSARUBFL6rQqDyP8h6g"
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    const { data, error } = await supabase
      .from('emails')
      .insert([{ email }]);
      console.log("Hello")

    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json({ data });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
