import supabase from "../db/supabase.js"
import { SupabaseClient } from "@supabase/supabase-js"



async function createBudget(supabaseClient, budget) {
  const { data, error } = await supabaseClient.from('Budget Allocation').insert(budget).select()
  if (error) throw error
}

async function getBudget() {
  const { data, error } = await SupabaseClient.from('Budget Allocation').select('*')
  if (error) console.error(error)

}

export default {createBudget, getBudget}