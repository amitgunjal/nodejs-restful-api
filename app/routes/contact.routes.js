module.exports = app => {
    const contacts = require("../controllers/contact.controller.js");

    // Create a new Contact
    app.post("/contacts", contacts.create);

    // Retrieve all Contacts
    app.get("/contacts", contacts.findAll);
}
