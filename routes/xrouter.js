import {Router} from "express"
import soldiersRepo from "../repositories/soldiersRepo.js"

const router = Router()

router.post("/soldiers/:soldierId/benefits", async (req, res)=>{
    try {
      return res.status(201).json({
        success:true,
        data:soldiersRepo.createSoldier
      }) 
    } catch (error) {
        console.error(error)
        return res.status(409).json({
            success:false,
            message:"an active welfare record already exists for the soldier"
        })
    }
})

router.get("/soldiers/:soldierId/benefits", async (req, res)=>{
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