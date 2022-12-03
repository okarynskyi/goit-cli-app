const contacts = require("./contacts");
const argv = require('yargs').argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            console.table(allContacts);
            break;
        case "get":
            const oneContact = await contacts.getContactById(id);
            console.log(oneContact);
            break;
        case "add":
            const newContact = await contacts.addContact({ name, email, phone });
            console.log(newContact);
            break;
        case "remove":
            const removeContact = await contacts.removeContact(id);
            console.log(removeContact);
            break;
        default:
            console.log("Unknown action");
    }
}

invokeAction(argv)