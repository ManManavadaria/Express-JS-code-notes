const express = require('express');
const path = require('path');
const app = express();

const staticpath = path.join(__dirname,"public");
console.log(staticpath);
app.use(express.static(staticpath));

app.get('/',(req,resp)=>{
    resp.end("server created");
})

app.listen(8000);