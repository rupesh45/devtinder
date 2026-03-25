const express = require("express")

const app = express();

app.use("/hello",(req,res) => {
    res.send("hello from server dashboard fgdf")
})  
app.use("/test",(req,res) => {
    res.send("hello from server test")
})  

app.use("/",(req,res) => {
    res.send("hello from home")
})  
app.listen(3000,() => {
    console.log("Server is up  on 3000...");
})