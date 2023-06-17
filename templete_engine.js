
const express = require('express');
const path = require('path');
const app = express();


app.set("view engine","hbs");
app.get("/",(req,resp)=>{
    resp.render("index",{
        name : "man",
    })
})