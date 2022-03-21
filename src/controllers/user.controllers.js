const express=require("express");

const{body,validationResult}=require("express-validator");

const User=require("../models/user.models");

const router=express.Router();

router.post(
    "",
    body("firstName").trim().not().isEmpty().withMessage("First name should not be empty")
    .isLength({
        min: 3,
        max:30
    }).withMessage("First name length should be between 3 to 30"),
    body("lastName").trim().isLength({
        min: 3,
        max:30
    }).withMessage("last name is optional but if it is therir then length should be between 3 to 30"),
    body("age").trim().trim().not().isEmpty().withMessage("age should not be empty")
    .custom((val)=>{
        if(val<1||val>150)
        {
            throw new Error("Icorrect age provided");
        }
        return true;
    }),
    body("email").not().isEmail().withMessage("email is required")
    .custom(async (val)=>{
        const user=await User.findOne({email:val});
        if(user)
        {
            throw new Error("Email is already exist");
        }
        return true
    }),
    body("profileImages").trim().not().isEmpty().withMessage("profileimage should not empty"),
    async(req,res)=>{
        try {
            const errors=validationResult(req);
            console.log({errors});
            if(!errors.isEmpty()){
                return res.status(400).send({errors:errors.array()});
            }
            const user=await User.create(req.body);
            return res.status(201).send(user);
        } catch (error) {
            return res.status(500).send({massage:error.massage});
        }
    }
);
module.exports=router