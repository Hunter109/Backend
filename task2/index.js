// Task 3: Handling POST Requests

// Create a route /register (POST).

// If the client sends JSON: { username: "hunter", password: "123" },
// respond with: "User hunter registered successfully!".

// Make sure you use express.json() middleware.

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())


app.get("/", (req, res) => {
    res.send("hello world")
})


app.post('/register', (req, res) => {

    let { username, password } = req.body;

    if (username && password) {
        res.send(` user ${username} resgitered sucessfully `)
    }
    else {
        res.Status(404).send(`no json file is send `)
    }


})


app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`)
})