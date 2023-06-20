// Assuming you're using Node.js with Express
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Configure your email transport options (e.g., SMTP settings)
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'husseinmalingha@gmail.com',
          pass: 'your-password'
        }
    });

    // Compose the email message
    const mailOptions = {
      from: 'your-email@example.com',
      to: 'your-email@example.com',
      subject: 'New contact form submission',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response to the frontend
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to send email');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
