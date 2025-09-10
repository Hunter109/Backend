
// 📝 Task 4: Form Handling

// Create a route /login (POST).

// Accept form data (username, password) using express.urlencoded().

// Respond: "Welcome back, <username>".




const express = require('express');
const app = express();
const port = 3000;

const path = require('path')


// built in middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    // res.send("server working correctly")
    res.sendFile(path.join(__dirname, './index.html'))
})

app.post('/login', (req, res) => {
    let { username, password } = req.body;
    res.send(`welcome to the page ${username}`)
})

app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`)
})