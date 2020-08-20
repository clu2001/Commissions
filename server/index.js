var express = require('express'); 
var router = express.Router(); 
var nodemailer = require('nodemailer'); 
var cors = require('cors'); 
const creds = require('./config'); 

var transport = {

    host: 'smtp.gmail.com', 
    port: 465,
    auth: {
        user: "quckidon@gmail.com",
        pass: "xarza6-pyqzax-vaJcah"
    }
}

var transporter = nodemailer.createTransport(transport)


// verify SMTP connection is correct 
transporter.verify((error, success) => {
    if (error) {
        console.log(error); 
    } else {
        console.log('Server is ready to take messages uwu'); 
    }
}); 

router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message}`

    var mail = {
        from: name, 
        to: 'quckidon@gmail.com', 
        subject: 'New Message from Contact Form', 
        text: content
    }

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

        transporter.sendMail({
            from: "quckidon@gmail.com", 
            to: email, 
            subject: "Submission was successful!", 
            text: `Thank you for your order!\n\n Form details\n Name: ${name}\n Email: ${email}\n Message: ${message}`
        }, function(error, info) {
            if (error) {
                console.log(error); 
            } else {
                console.log('Message sent: ' + info.response); 
            }
        }); 
        })
})