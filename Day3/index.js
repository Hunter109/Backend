let express = require("express");
let app = express();
let port = 3000;



app.get('/', (req, res) => {
    res.send('Hello World!')
})

// we can also send html in response 
app.get('/home', (req, res) => {
    let Welcome = `<h1 style= "color:red" >
    welcome to the Home page
    </h1>`
    res.send(Welcome)
})
app.get('/contact', (req, res) => {
    let Welcome = `<h1 style= "color:green" >
    welcome to the contact page
    </h1>`
    res.send(Welcome)
})
// we can also send text in respone 
app.get('/about', (req, res) => {
    res.send('Welcome to the about us page!')
})


app.listen(port, (req, res) => {
    console.log(`server is listenening http://localhost:${port}/`)
})