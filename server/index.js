const express = require('express'); 
const bodyParser = require('body-parser'); 
const router = express.Router(); 
const nodemailer = require('nodemailer'); 
const cors = require('cors'); 
const env = require('dotenv').config(); 
const creds = require('./config'); 
const FormPage = require('./FormPage'); 

const app = express(); 

app.listen(PORT, () => {
    console.log("Listening to port: " + PORT); 
}); 
// if someone else is hosting the server and they are NOT using server 
// 3000, they can still run using their default port
const PORT = process.env.PORT || 3000; 

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 

app.use('/FormPage', FormPage); 

app.get('/', (req, res) => {
    res.send('Hello'); 
    console.log('hi'); 
}); 


var transporter = nodemailer.createTransport({
    // instantiate SMTP server 
    service: 'gmail',  
    port: 465,
    secure: true, 
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
})

// verify SMTP connection is correct 
transporter.verify((error, success) => {
    if (error) {
        console.log(error); 
    } else {
        console.log('Server is ready to take messages uwu'); 
    }
}); 

router.post('/FormPage', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message} `

    var mail = {
        from: name, 
        to: 'quckidon@gmail.com', 
        subject: 'New Message from Contact Form', 
        text: content
    }

// attempt to send the mail 
transporter.sendMail(mail, (err, data) => {
	if (err) {
        res.json({
        status: 'fail'
  	    })
	} else {
        res.json({
        status: 'success'
          })
    }
     
    // autoreply email 
    transporter.sendMail({
        from: "quckidon@gmail.com",
        to: email,
        subject: "Submission was successful",
        text: `Thank you for contacting us!\n\nForm details\nName: ${name}\n Email: ${email}\n Message: ${message}`
    }, function(error, info){
        if(error) {
            console.log(error);
        } else{
            console.log('Message sent: ' + info.response);
        }
    });
  }); 
}) 

