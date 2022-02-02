const express = require('express');
require('./DataBase')
const Testing = require('./Models')
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());


// app.post("/student", (req, res) => {
//     console.log(req.body)
//     const user = new Testing(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }). catch((e) => {
//         res.status(400).send(e)
//     })
    
//     // res.send('hello DDevops');
// })

app.post("/student", async (req, res) => {
    try {
        const user = new Testing(req.body);
        const userData = await user.save()
        res.status(201).send(userData);
            
    } catch (e) {
        res.status(400).send(e)
        
    }

})

app.get("/student", async (req, res) => {
    try {
        const userData = await Testing.find();
        res.send(userData);
    }
    
    catch(e) {
        res.send(e)
    }
    
    // res.send('hello DDevops');
})
app.listen(port, () => {
    console.log(`connection listen port ${port}` )
})