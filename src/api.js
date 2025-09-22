import axios from "axios";

const API_URL = "http://localhost:1000/api/contacts"; // backend endpoint

// ✅ Add new contact
export const addContact = async (contactData) => {
  const response = await axios.post(API_URL, contactData);
  return response.data;
};

// ✅ Get all contacts
export const getContacts = async (page = 1, limit = 5) => {
  const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
  return response.data;
};

// ✅ (Optional) Delete contact
export const deleteContact = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
