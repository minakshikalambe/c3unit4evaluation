const app =require("./index");

const connect=require("./configs/db");

app.listen(5012,async function(){
    try {
        await connect();
        console.log("listening on port 5012")
    } catch (error) {
        console.log(err.massage);
    }
});