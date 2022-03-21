const mongoose=require("mongoose");

const publicationSchema=new mongoose.Schema(
    {
    name:{type:String,require:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    book_id:{type:mongoose.Schema.Types.ObjectId,ref:"book",required:true}
    },
    {
    versionKey:false,
    timestamps:true,
    }
    
);
module.export=mongoose.model("publication",publicationSchema);