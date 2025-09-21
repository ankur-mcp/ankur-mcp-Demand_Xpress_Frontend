import React, { useState } from "react";
import { addContact } from "../api";
import "../styles/App.css"; // import CSS

const ContactForm = ({ onContactAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addContact(formData);
      alert("Contact added successfully!");
      setFormData({ name: "", email: "", phone: "" }); // reset form
      if (onContactAdded) onContactAdded(); // refresh contact list
    } catch (error) {
      console.error("Failed to add contact", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="ContactForm">
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
