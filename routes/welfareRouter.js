import {Router} from "express"
import welfareService from "../services/welfareService.js"

const router = Router()

router.post("/soldiers/:soldierId/benefits", async (req, res)=>{
    try {
    if (req.params.soldierId === welfareService.insertedId) {
        return res.status(409).json({
            success:false,
            message:"an active welfare record already exists for the soldier"
        })
    }
    let BenefitPeriod=[{
        startDate: req.body.startDate ||new Date().toISOString(),
        endDate: req.body.endDate || null,
        decisionReason:req.body.decisionReason,
        budgetApproved:req.body.budgetApproved
    }]
      return res.status(201).json({
        success:true,
        data:{id:welfareService.insertedId,
            soldierId:req.path.id,
            unit:req.body.unit,
            currentbenefitType:req.body.benefitType,
            history:BenefitPeriod
        }
      }) 
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
})

router.get("/soldiers/:soldierId/benefits", async (req, res)=>{
    try {
        return res.status(200).json({
            success:true,
            data:welfareService.getRecord(req.path.soldierId)
        })
    } catch (error) {
        console.error(error)
        return res.status(404).json({
            success:false,
            data:"Sorry, we have no record for your soldier"
        })
    }
})

router.patch("/soldiers/:soldierId/benefits", async (req, res)=>{
    try {
        return res.status(200).json({
            success:true,
            data:req.body
        })
    } catch (error) {
        console.error(error)
        return res.status(404).json({
            success:false,
            data:""
        })
    }
})



export default router