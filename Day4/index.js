import express from 'express'
import 'dotenv/config'
const app = express();

console.log("PORT from env:", process.env.PORT)

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(process.env.PORT, () => {
    console.log(`server is listening as http://localhost:${process.env.PORT}`)
})

