const express=require("express");

const{body,validationResult}=require("express-validator");

const Publication=require("../models/publication.models");

const router=express.Router();

router.post("/",async(req,res)=>{
    try {
        const publication=await Publication.create(req.body);
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send({message:error.massage});
    }
})
module.exports=router