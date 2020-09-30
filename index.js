const express = require("express");

const app =express();
const port = 8000;
const admin=(req,res)=>{
    return res.send("this is admin dashboard");
};
const isAdmin=(req,res,next)=>{
    console.log("isAdmin is running")
    next();
};
const isLoggedIn=(req,res,next)=>{
    console.log("isLoggedIn is running")
    next();
};



app.get("/",(req,res) =>{
    return res.send("hello there");
});
app.get("/login",(req,res) =>{
    return res.send("you are visiting login route");
});

app.get("/admin",isLoggedIn,isAdmin,admin);

app.get("/signup",(req,res) =>{
    return res.send("you are visiting signup route");
});

app.listen(port,()=>{
    console.log("server is up and running");
});
