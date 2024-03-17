const express = require("express")
const app = express()
const authorRouter = require('./authorRouter');

// Middleware for logging
app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString()} - ${req.method} ${req.url}`);
    next();
});

// Link Author router
app.use('/authors', authorRouter);

app.get("/", (req, res) =>{
    res.send("Hello There")
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
