const sql = require("./../utils/db.js");

// constructor
const Contact = function (contact) {
    this.email = contact.email;
    this.name = contact.name;
    this.active = contact.active;
};

Contact.create = (newContact, result) => {
    sql.query("INSERT INTO contacts SET ?", newContact, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created contact: ", { id: res.insertId, ...newContact });
        result(null, { id: res.insertId, ...newContact });
    });
};

Contact.getAll = result => {
    sql.query("SELECT * FROM contacts", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

       result(null, res);
    });
};

module.exports = Contact;
