import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kckcmzlpiplxyxoawblo.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtja2NtemxwaXBseHl4b2F3YmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM2MTI0NDYsImV4cCI6MjEwOTE4ODQ0Nn0.G7o_jTnGEHKNq3O7cSy3UgpvZDpQQEWvcRAbT9szRds';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);