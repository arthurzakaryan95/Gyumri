const nodemailer = require('nodemailer');

function sendMail(from, content, title){
  console.log(from);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "arthurzakaryan95@gmail.com",
      pass: 'arthur1995'
    }
  });

  const mailOptions = {
    from: from,
    to: "arthurzakaryan95@gmail.com",
    subject: title,
    html: `${content} <p> ${from} </p>`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
module.exports = sendMail;
