const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'anaswinners111@gmail.com',
        pass: 'hksf;dky;vhk'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"anas bnr" <anaswinners111@gmail.com>', // sender address
    to: 'anas.bouinghouren@example.com', // list of receivers
    subject: 'Hello from Node.js!', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});

//3bc6e4ad-a5db-47bd-8b0d-0fd29f29e246
//3bc6e4ad-a5db-47bd-8b0d-0fd29f29e246