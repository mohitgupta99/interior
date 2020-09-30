const express = require("express");

const app =express();
const port = 3000;
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
    console.log("User is logged in ");
    console.log("Login page has come ");
});

app.get("/admin",isLoggedIn,isAdmin,admin);

app.get("/signup",(req,res) =>{
    return res.send("you are visiting signup route");
    console.log("User is signed up");
    console.log("Login page has come ");
});

app.listen(port,()=>{
    console.log("server is up and running on port ${port}");
});
