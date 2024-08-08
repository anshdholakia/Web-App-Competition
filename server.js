const { request } = require("express");
const express = require("express");
const app = express()
app.use(express.json());

const nodemailer = require("nodemailer");

app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);

// static images and css
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index.html');
})


app.post('/',(req, res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'anshhiro.dholakia@gmail.com',
            password: '***',
        }
    })
    const mailOptions = {
        from: request.body.email,
        to: 'conornodemailtest@gmail.com',
        subject: `Message from ${req.body.name}: ${req.body.email} | ${req.body.phone}`,
        text: req.body.message,
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    })
})


app.listen(3000);