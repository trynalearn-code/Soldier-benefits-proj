import supabase from "../db/supabase.js"
import { SupabaseClient } from "@supabase/supabase-js"



async function getSpend() {
  const { data, error } = await SupabaseClient.from('Spend Transaction').select('*')
  if (error) console.error(error)

}

export default {getSpend}