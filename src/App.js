import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./styles/App.css";

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="App">
      <h1>📒 Contact Book</h1>
      <ContactForm onContactAdded={() => setRefresh(!refresh)} />
      <ContactList key={refresh} />
    </div>
  );
}

export default App;
