const Contact = require("../models/contact.model.js");

// Create and Save a new Contact
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Contact
    const contact = new Contact({
        email: req.body.email,
        name: req.body.name,
        active: req.body.active
    });

    // Save Contact in the database
    Contact.create(contact, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Contact."
            });
        else res.send(data);
    });
};

// Retrieve all Contacts from the database.
exports.findAll = (req, res) => {
    Contact.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving contacts."
            });
        else res.send(data);
    });
};
