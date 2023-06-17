const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/db1").then(()=>{
    console.log("connection sucessfull");
}).catch((err)=>{
    console.log("no connection");
});

