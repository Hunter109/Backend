const express = require('express');
const app = express();
const port = 3000;
const path = require('path')

app.use(express.urlencoded({ extended: true })) //Built-in middleware
app.use(express.json()) // Built-in middleware



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"))
})

app.get('/getform', (req, res) => {
    const { username, password } = req.query;
    res.json(
        {
            username,
            password
        }
    )
})

app.post('/postform', (req, res) => {
    // console.log(req.body)
    const { username, password } = req.body;
    res.json(
        {
            username,
            password
        }
    )
})

app.listen(port, (req, res) => {
    console.log(`server is listening ast http://localhost:${port}`)
})