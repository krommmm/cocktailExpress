const path = require("path");
const express = require("express");
const cocktailsRoutes = require("./routes/cocktails");
const app = express();

app.use(express.json());

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,PATCH,OPTIONS");
    next();
});

app.use("/api/cocktails",cocktailsRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;