// 📝 Task 1: Basic GET Routes

// Create routes:

// / → Send "Welcome to my Express App"

//     / about → Send an HTML heading

//         / contact → Send a JSON object like { email: "...", phone: "..." }



const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("welcome to task 1")
})

app.get('/about', (req, res) => {
    let heading = `<h1> Heloo its simple get request</h1>`
    res.send(heading)
})

app.get('/contact', (req, res) => {
    let contactDetail = {
        name: "utsav wagle",
        email: "utsav@gmail.com",
        degree: "Engineering"
    }

    res.send(contactDetail)
})


// 📝 Task 2: Serving a File

// Place an index.html file in a static folder.

// Create a route /home that sends this file using res.sendFile().

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, "./static/index.html"))
})

app.listen(port, (req, res) => {
    console.log(`server is listening at http://localhost:${port}`)
})