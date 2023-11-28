const nodemailer = require('nodemailer');
require('dotenv').config()




let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.user,
      pass: process.env.pass,
      clientId: process.env.clientId,
      clientSecret: process.env.clientSecret,
      refreshToken: process.env.refreshToken,
    }
  });


// HTML content with embedded image
const htmlContent = `
    <h1>Hello!</h1>
    <p>This is a sample email with an embedded image:</p>
    <img src="cid:uniqueImageId" alt="Embedded Image" width="300" height="200">
`;

// Define the attachment with the image
const attachments = [
    {
        filename: 'image.png',
        path: 'Img/Pixel 7a.png', // Replace with the actual path to your image
        cid: 'uniqueImageId', // Content-ID for the image
    },
];

  // Example usage:
  const mailOptions = {
    from: 'andrew.britain@gmail.com', // Sender address
    to: 'andrew.britain@gmail.com', // Receiver address
    subject: 'Email with Embedded Image',
    html: htmlContent,
    attachments: attachments,
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});


