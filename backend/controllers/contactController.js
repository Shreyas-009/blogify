const Contact = require("../models/Contact");
const { sendContactEmail } = require("../utils/emailService");

// Get all contact submissions
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching contacts", error: error.message });
  }
};

// Create new contact submission
exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create new contact
    const contact = new Contact({
      name,
      email,
      phone,
      message,
    });

    await contact.save();

    // Send email notification
    const emailSent = await sendContactEmail({ name, email, phone, message });

    res.status(201).json({
      message: "Contact form submitted successfully",
      contact,
      emailSent,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error submitting contact form", error: error.message });
  }
};
