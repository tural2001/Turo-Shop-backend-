const nodemailer = require('nodemailer');
const asyncHandler = require('express-async-handler');

const sendEmail = asyncHandler(async (data, req, res) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_ID, // generated ethereal user
      pass: process.env.MP, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: data.to, // list of receivers
    subject: data.subject, // subject
    text: data.text, // plain text body
    html: data.html, // html body
  });

  console.log('message sent ', info.messageId);

  console.log('preview url ', nodemailer.getTestMessageUrl(info.message));
});

module.exports = sendEmail;
