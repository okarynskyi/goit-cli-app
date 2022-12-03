const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            console.log(allContacts);
            break;
        case "getById":
            const oneContact = await contacts.getContactById(id);
            console.log(oneContact);
            break;
        case "add":
            const newContact = await contacts.addContact({ name, email, phone });
            console.log(newContact);
            break;
        case "removeById":
            const removeContact = await contacts.removeContact(id);
            console.log(removeContact);
            break;
        default:
            console.log("Unknown action");
    }
}

// invokeAction({action: "list"})
// invokeAction({ action: "getById", id: "1"})
// invokeAction({ action: "add", name: "Oleh Okaro", email: "okaro@mail.com", phone: "(777) 777-7777" })
invokeAction({ action: "removeById", id: "YY2KPl2pIxANsggcGyH1W"})