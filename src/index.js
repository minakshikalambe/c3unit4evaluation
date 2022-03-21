const express=require("express");
const userController=require("./controllers/user.controllers")
const bookController=require("./controllers/book.controllers")
const publicationController=require("./controllers/publication.controllers")
const app=express();

app.use(express.json());

app.use("/users",userController)
app.use("/books",bookController)
app.use("/publications",publicationController)
module.exports=app;