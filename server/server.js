const express = require('express'); 
const bodyParser = require('body-parser'); 
const nodemailer = require('nodemailer'); 
const cors = require('cors'); 
const env = require('dotenv').config(); 

const router = express.Router(); 
const app = express(); 

// if someone else is hosting the server and they are NOT using server 
// 3000, they can still run using their default port
const PORT = process.env.PORT || 3000; 

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 

app.get('/FormPage', (req, res) => {
    res.send('You are at the form page now lol')
    console.log('form page'); 
});

app.listen(PORT, () => {
    console.log("Listening to port: " + PORT); 
})

