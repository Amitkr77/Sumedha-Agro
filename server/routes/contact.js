const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { name, email, company, interest, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_PASS,
      },
    });

    // 1️⃣ Email to YOU (admin)
    await transporter.sendMail({
      from: `"Sumedha Agro Website" <hrishabhadarsh24@gmail.com>`,
      to: "hrishabhadarsh24@gmail.com",
      replyTo: email,
      subject: "New Website Inquiry",
      html: `
        <h3>New Inquiry Received</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Interest:</b> ${interest}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // 2️⃣ Thank You Email to USER
    await transporter.sendMail({
      from: `"Sumedha Agro" <hrishabhadarsh24@gmail.com>`,
      to: email,
      subject: "Thank You for Contacting Sumedha Agro 🌱",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for reaching out to <strong>Sumedha Agro</strong>.</p>
        <p>We have received your inquiry and our team will contact you shortly.</p>
        <br/>
        <p>Best Regards,<br/>Sumedha Agro Team</p>
      `,
    });

    res.status(200).json({ message: "Email sent successfully" });

  } catch (error) {
    console.error("FULL ERROR:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});


router.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_PASS,
      },
    });

    // 1️⃣ Notify you
    await transporter.sendMail({
      from: `"Sumedha Agro Newsletter" <hrishabhadarsh24@gmail.com>`,
      to: "hrishabhadarsh24@gmail.com",
      subject: "New Newsletter Subscription",
      html: `
        <h3>New Subscriber</h3>
        <p><b>Email:</b> ${email}</p>
      `,
    });

    // 2️⃣ Thank user
    await transporter.sendMail({
      from: `"Sumedha Agro" <hrishabhadarsh24@gmail.com>`,
      to: email,
      subject: "Welcome to Sumedha Agro Newsletter 🌱",
      html: `
        <h2>Welcome!</h2>
        <p>Thank you for subscribing to the Sumedha Agro newsletter.</p>
        <p>You will now receive updates about:</p>
        <ul>
          <li>Fresh Mushrooms</li>
          <li>Agri Technology</li>
          <li>New Products</li>
        </ul>
        <br/>
        <p>Stay connected 🌾</p>
        <p>— Sumedha Agro Team</p>
      `,
    });

    res.status(200).json({ message: "Subscribed successfully" });

  } catch (error) {
    console.error("Subscribe FULL ERROR:", error);
    res.status(500).json({ error: "Subscription failed" });
  }
});





module.exports = router;
