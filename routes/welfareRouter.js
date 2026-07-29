import {Router} from "express"
import welfareRepo from "../repositories/welfareRepo.js"


const router = Router()

router.post("/soldiers/:soldierId/benefits", async (req, res)=>{
    try {
    if (req.params.soldierId === insertedId) {
        return res.status(409).json({
            success:false,
            message:"an active welfare record already exists for the soldier"
        })
    }
      return res.status(201).json({
        success:true,
        data:{id:_id,
            soldierId:req.params.id,
            unit:req.body.unit,
            currentbenefitType:req.body.currentbenefitType,
            history:BenefitPeriod[{startDate: new Date().toISOString(), }]
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
            data:welfareRepo.getRecord()
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

router.post("/budget", async (req, res)=>{
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