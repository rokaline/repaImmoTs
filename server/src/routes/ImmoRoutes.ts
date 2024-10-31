import { Response, Router, Request } from "express";

// chaque fois installer ca dan sle temrinal npm install http-status-codes 
import HttpStatusCodes from "http-status-codes";
import Immo from "../models/ImmoModels";
import { error } from "console";

const router:Router = Router();

router.get("/", async (req:Request, res: Response) => {
    try {
        const immo=await Immo.find();
        res.json(immo);
    } catch(err) {
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({message:'Erreur',error:err});
    }
});

export default router; 