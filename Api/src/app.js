const express = require('express');
require('../DB/conn');
const jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');



const port = process.env.PORT || 8000;
// const customer = require('../models/customer');
const customer_router = require('../Router/customer_rout');
const app = express();

app.use(express.json());
app.use(customer_router);
app.use(cookieParser());



// const createToken = async()=>{
//     const token = await jwt.sign({_id:1212154521542},"sfvbajhbuyfgwekbj54685321321gviuqerrgberbgfsdkjbvnjbg",{
//         expiresIn :"2 seconds"
//     });
//     console.log(token);

//     const toketVerification = await jwt.verify(token,"sfvbajhbuyfgwekbj54685321321gviuqerrgberbgfsdkjbvnjbg");
//     console.log(toketVerification);
// }
// createToken();





app.listen(port);