app.get('/*splat', async (req, res) => {
    res.sendFile(path.join(__dirname, "static", "404.html"));
})