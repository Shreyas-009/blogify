const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendContactEmail = async (contactData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: [
      "darsh@roundtechsquare.com",
      "minakshi@roundtechsquare.com",
      "shreyastungar762@gmail.com",
    ],
    subject: "New Contact Form Submission",
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Phone:</strong> ${contactData.phone}</p>
      <p><strong>Message:</strong></p>
      <p>${contactData.message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Email sending error:", error);
    return false;
  }
};

module.exports = { sendContactEmail };
