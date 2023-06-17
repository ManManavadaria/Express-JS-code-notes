var nodemailer = require('nodemailer');
const http = require('http');


const server = http.createServer((req,resp)=>{
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'manm49061@gmail.com',
        pass: '7016988429'
      }
    });
    
    var mailOptions = {
      from: 'manm49061@gmail.com',
      to: 'manmanavadaria@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

}).listen(8000);
