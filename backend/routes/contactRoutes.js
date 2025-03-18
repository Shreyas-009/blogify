const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  createContact,
} = require("../controllers/contactController");

router.get("/", getAllContacts);
router.post("/", createContact);

module.exports = router;
