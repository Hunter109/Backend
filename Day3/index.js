let express = require("express");
let app = express();
let port = 3000;
let path = require("path")

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// we can also send html in response
app.get("/home", (req, res) => {
    let welcome = `<h1 style= "color:red" >
    welcome to the Home page
    </h1>`;
    res.send(welcome);
});
app.get("/contact", (req, res) => {
    let welcome = `<h1 style= "color:green" >
    welcome to the contact page
    </h1>`;
    res.send(welcome);
});
// we can also send text in respone
app.get("/about", (req, res) => {
    res.send("Welcome to the about us page!");
});

app.get("/api/user", (req, res) => {
    res.json(
        {
            name: "Utsab",
            age: 23,
            course: "BE Computer"
        }
    );
});

app.get("/about/me", (req, res) => {
    res.redirect('/home');
    // redirecting to home page 


});


app.get("/utsav", (req, res) => {
    // res.sendFile(__dirname + "/static/utsav.html")

    // or i can also use path to give file location
    // res.sendFile(path.join(__dirname, "./static/utsav.html"))

    // else method also while using join 
    // Use path.join(__dirname, ...) whenever you send files.
    // Avoid concatenating strings manually (__dirname + "/...") — it can break on Windows due to \ vs /.
    res.sendFile(path.join(__dirname, "static", "utsav.html"))

})



// app.use((req, res) => {
//     res.status(404).sendFile(path.join(__dirname, "static", "404.html"));
// });

app.get('/*splat', async (req, res) => {
    res.sendFile(path.join(__dirname, "static", "404.html"));
})

app.listen(port, (req, res) => {
    console.log(`server is listenening http://localhost:${port}/`);
});
