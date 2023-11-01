const express = require('express');
const bodyparser = require('body-parser');
const nodemailer =require('nodemailer');
const fs = require('fs');



const app =express();
app.use(express.static("style"));
app.use(bodyparser.urlencoded({extended: true}));




app.get("/", function(req ,res){
    res.sendFile(__dirname + "/index.html");
    console.log(__dirname);
});


app.get('/:page', (req, res) => {
    const page = req.params.page; // Get the page parameter from the URL
    const pagePath = __dirname + '/views/'+ page;

    // Check if the requested HTML file exists
    try {
        if (fs.existsSync(pagePath)) {
            res.sendFile(pagePath);
        } else {
            res.status(404).send('Page not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});




app.post("/views/contacusforlive.html",function(req ,res){
    const comm =req.body.message;
    console.log(comm );
    const nm =req.body.name;
    console.log(nm );
    const sub =req.body.subject;
    console.log(sub );
    const em =req.body.email;
    console.log(em );
    const ph =req.body.phone_number;
    console.log(ph );
    const optn1 =req.body.need;
    console.log(optn1);
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'pawan.raj@byte-digital.com.au',
        pass:'otqswjmdhyiwuixw',
        }

});
var mailOptions ={
    from:'pawan.raj@byte-digital.com.au',
    to: em,
    subject: 'Thanks for contacting us' +''+ nm ,
    text:'Thanks you for contacting us. Our team is looking into it and will contact you soon. \n\nRegards,\nTeam Byte Digital', 


};
transporter.sendMail(mailOptions, function(error , info){
    if(error){
        console.log(error);
    }
    else{
        res.redirect('/thankyou.html');
        console.log('email sent' + info.response);
    }
});
var mailOptions ={
    from:'pawan.raj@byte-digital.com.au',
    to: 'pawan.raj@byte-digital.com.au',
    subject: 'information of' + nm ,
    text: `${'name :'}${nm}\n ${'Subject :'}${sub}\n ${'message :'}${comm}\n ${'phone no:'}${ph}\n ${'email:'}${em}\n ${'work-required:'}${optn1}`,


};
transporter.sendMail(mailOptions, function(error , info){
    if(error){
        console.log(error);
    }
    else{
        res.redirect('/thankyou.html');
        console.log('email sent' + info.response);
    }
});
});













app.listen(4000, function(){
    console.log("server started at 4000")
})

