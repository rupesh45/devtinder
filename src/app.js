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


connectDB().then(() => {
    console.log('database connected...');
    app.listen(3000, () => {
        console.log("Server is up  on 3000...");
    })
}).catch(err => {
    console.log(err, 'database connection error.');
}) 

