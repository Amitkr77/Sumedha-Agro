const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// POST /api/quote
router.post("/", async (req, res) => {
  try {
    const data = req.body;

    // 🔹 Basic backend validation (important)
    if (!data.name || !data.email || !data.product) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // 🔹 Generate Reference ID
    const referenceId = "SAG-" + Math.floor(10000 + Math.random() * 90000);

    // 🔹 Create Brevo transporter
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_PASS,
      },
    });

    // ============================
    // 📩 EMAIL TO COMPANY
    // ============================
    await transporter.sendMail({
      from: `"Sumedha Agro" <hrishabhadarsh24@gmail.com>`,
      to: process.env.COMPANY_EMAIL,
      subject: `New Quote Request - ${referenceId}`,
      html: `
        <h2>New Wholesale Quote Request</h2>
        <hr/>
        <p><strong>Reference ID:</strong> ${referenceId}</p>

        <h3>Product Details</h3>
        <p><strong>Product:</strong> ${data.product}</p>
        <p><strong>Monthly Volume:</strong> ${data.volume} KG</p>
        <p><strong>Packaging:</strong> ${data.packaging}</p>
        <p><strong>Frequency:</strong> ${data.frequency}</p>

        <h3>Business Details</h3>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>GST:</strong> ${data.gst}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Notes:</strong> ${data.notes}</p>

        <h3>Logistics Details</h3>
        <p><strong>Address:</strong> ${data.address}, ${data.city}, ${data.state}</p>
        <p><strong>Postal Code:</strong> ${data.postalCode}</p>
        <p><strong>Country:</strong> ${data.country}</p>
        <p><strong>Shipping Method:</strong> ${data.shippingMethod}</p>
        <p><strong>Delivery Date:</strong> ${data.deliveryDate}</p>

        <hr/>
        <p>Submitted via Sumedha Agro Website</p>
      `,
    });

    // ============================
    // 📩 CONFIRMATION TO USER
    // ============================
    await transporter.sendMail({
      from: `"Sumedha Agro" <hrishabhadarsh24@gmail.com>`,
      to: data.email,
      subject: `Quote Request Received - ${referenceId}`,
      html: `
        <h2>Hi ${data.name},</h2>

        <p>Thank you for requesting a wholesale quote from <strong>Sumedha Agro</strong>.</p>

        <p><strong>Your Reference ID:</strong> ${referenceId}</p>

        <p>Our team is reviewing your request and will contact you within 24–48 business hours.</p>

        <hr/>

        <p><strong>Selected Product:</strong> ${data.product}</p>
        <p><strong>Requested Volume:</strong> ${data.volume} KG</p>

        <br/>

        <p>If you have any urgent queries, please reply to this email.</p>

        <p>Best Regards,<br/>Sumedha Agro Team</p>
      `,
    });

    // 🔹 Send response to frontend
    res.status(200).json({ referenceId });

  } catch (error) {
    console.error("Quote Email Error:", error);
    res.status(500).json({ message: "Failed to process quote request" });
  }
});

module.exports = router;