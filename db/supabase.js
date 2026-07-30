import { createClient } from '@supabase/supabase-js'
import "dotenv/config"

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY)

console.log("We've connected to supabase!")

export default supabase