import React, { useEffect, useState } from "react";
import { getContacts, deleteContact } from "../api";
import "../styles/App.css"; // import CSS

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const data = await getContacts();
      setContacts(data.contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteContact(id);
      fetchContacts(); // refresh list
    } catch (error) {
      console.error("Failed to delete contact", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="ContactListContainer">
      <h2>Contact List</h2>
      <ul className="ContactList">
        {contacts.map((c,index) => (
          <li key={c._id} className="ContactItem">
            <span>{index+1}</span>
            <span>
              {c.name} - {c.email} - {c.phone}
            </span>
            <button onClick={() => handleDelete(c._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
