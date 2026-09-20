import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jfsoasyxqmrpjegieems.supabase.co'
const supabaseAnonKey = 'sb_publishable_dMzw_m3f4XqFaT-WJqXFpg_UcQYSokI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
