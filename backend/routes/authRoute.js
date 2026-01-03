import express from "express"
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();

router.get("/me", isAuthenticated, (req, res)=>{
    res.json({success:true, user:req.user})
})

export default router