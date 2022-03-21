const mongoose=require("mongoose");

const bookSchema=new mongoose.Schema(
    {
    likes:{type:Number,default:0},
    coverImages:{type:String,require:true},
    content:{type:String,require:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
    },
    {
    versionKey:false,
    timestamps:true,
    }
    
);
module.export=mongoose.model("book",bookSchema);