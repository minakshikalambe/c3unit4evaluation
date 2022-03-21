const mongoose=require("mongoose");

const userSchema=new mongoose.Schema(
    {
    firstName:{type:String,require:true},
    lastName:{type:String,require:false},
    age:{type:Number,require:true},
    email:{type:String,require:true,unique:true},
    profileImages:{type:String,require:true},
    },
    {
    versionKey:false,
    timestamps:true,
    }
    
);
module.export=mongoose.model("user",userSchema);