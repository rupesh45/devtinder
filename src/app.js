const express = require("express")

const app = express();


app.get("/user/:userid/:uniqueid",(req,res) => {
    console.log(req.query);
    console.log(req.params);
    res.send({"first.name":"rupesh"})
})
app.post("/user",(req,res) => {
    res.send("saved succesfully")
})
app.delete("/user",(req,res) => {
    res.send("deleted successfully")
})

app.use("/test",(req,res) => {
    res.send("hello from server test")
})  


app.listen(3000,() => {
    console.log("Server is up  on 3000...");
})