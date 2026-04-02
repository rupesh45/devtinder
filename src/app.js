const express = require("express")
const connectDB = require("./config/database")
const app = express();
const User = require('./models/user')

app.use(express.json())
app.post('/signup', async (req, res) => {
    

    console.log(req.body);
    const userObj = req.body

    const user = new User(userObj)

    try {
        await user.save().then((val) => {

            res.send(val, "user added successfully")
        })
    } catch (err) {
        res.status(400).send('Err saving doc')
    }



})
app.patch('/user', async (req, res) => {

    let userId = req.body.userId
    let data = req.body

    
    try {
        const user = await User.findByIdAndUpdate(userId,data,{returnDocument:'before'})
        console.log(user);
        res.send("updated")
        
    } catch (err) {
        res.status(400).send('Err saving doc')
    }



})

app.get("/user",async (req,res) => {
    let email = req.body.emailId

    try{
        let user = await User.find({"emailId" : email})
        if(user.length === 0 ){
            res.status(404).send("user not found")
        }
        res.send(user)
    }catch(e){
        res.status(400).send("something went wrong!")
    } 
})
app.get("/feed",async (req,res) => {
 
    try{
        let user = await User.find({})
   
        res.send(user)
    }catch(e){
        res.status(400).send("something went wrong!")
    } 
})

app.delete("/user",async (req,res) => {

    let userId = req.body.userId

    try{
        let user = await User.findByIdAndDelete(userId)
   
        res.send('user is now gone!')
    }catch(e){
        res.status(400).send("something went wrong!")
    } 
})


connectDB().then(() => {
    console.log('database connected...');
    app.listen(3000, () => {
        console.log("Server is up  on 3000...");
    })
}).catch(err => {
    console.log(err, 'database connection error.');
}) 

