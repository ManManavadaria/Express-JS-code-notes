const express = require('express');
const app = express();

app.get('/',(req,resp)=>{
    resp.send("this is sent by express");
})
app.get('/about',(req,resp)=>{
    resp.send("this is sent by about express");
})
app.get('/contact',(req,resp)=>{
    resp.send("this is sent by contact express");
})

app.listen(8000);