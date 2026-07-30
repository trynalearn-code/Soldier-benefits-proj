import supabase from "../db/supabase.js"
import { Router } from "express"
import { SupabaseClient } from "@supabase/supabase-js"
import budgetRepo from "../repositories/budgetRepo.js"
import spendRepo from "../repositories/spendRepo.js"

const router = Router()


router.post("/budget", async (req, res)=>{
    try {
        if (method === 'GET' && pathname === '/budget'){
        const { data, error } = await SupabaseClient
        .from('Budget Allocation')
        .insert({ 
            unit:req.unit,
            benefitType:req.benefitType,
            month:req.month,
            allocatedAmount:req.allocatedAmount 
        })
        .select()

        return res.status(201).json({
            success:true,
            data:data
        })}
    } catch (error) {
        console.error(error)
        return res.status(404).json({
            success:false,
            data:"Sorry, we have no record for your soldier"
        })
    }
})

router.get("/budget", async (req, res)=>{
    try {
    if (method === 'GET' && pathname === '/budget'){
        const {result} = budgetRepo.getBudget()
        const {spend} = spendRepo.getSpend()
        return res.status(201).json({
            success:true,
            data:{...result,
            spentAmount: spend.amount,
            comuted:spend.amount + result.allocatedAmount,
            remainingAmount:result.allocatedAmount - spend.amount }
        })}
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success:false,
            data:"internal service error"
        })
    }
})

router.get("/budget/:id/transactions", async (req, res)=>{
    if (method === 'GET' && pathname === '/budget'){
    const { data, error } = await SupabaseClient.from('Budget Allocation').select('*').eq('id', id)
    if (error) throw error
    return Response.json({ data })}
})

router.post("/budget/:id/spend", (req, res)=>{
    if (method === 'POST' && pathname === '/budget'){
        const { data, error } = await SupabaseClient.from('Budget Allocation').select('*').eq('id', id)
        const {result} = budgetRepo.getBudget()
        if (result.allocatedAmount>req.amount){
            return res.status(409).json({
                error:"Your amount can't be greater than your allocatedAmount",
                remainingAmount:result.remainingAmount
            })
        }

    }
})

export default router