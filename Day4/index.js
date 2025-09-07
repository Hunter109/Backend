import express from 'express'
import 'dotenv/config'
import path from 'path'
const app = express();


console.log("PORT from env:", process.env.PORT)

app.get("/", (req, res) => {
    res.send("hello world")
})

// path parameter example 

app.get("/user/:username/:id", (req, res) => {
    // console.log(req.params)
    let { username, id } = req.params
    res.send(`welcome to the page ${username} and id ${id}`)
})



app.listen(process.env.PORT, () => {
    console.log(`server is listening as http://localhost:${process.env.PORT}`)
})

