import React, { useState } from "react";
import "./XModal.css";

function XModal() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, phone, dob } = formData;

    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const dobDate = new Date(dob);
    const today = new Date();
    if (dobDate > today) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    // Reset on success
    setShowModal(false);
    setFormData({ username: "", email: "", phone: "", dob: "" });
  };

  const handleBackdropClick = (e) => {
    if (e.target.className === "modal") {
      setShowModal(false);
    }
  };

  return (
    <div>
      <h1>User Details Modal</h1>
      <button onClick={() => setShowModal(true)}>Open Form</button>

      {showModal && (
        <div className="modal" onClick={handleBackdropClick}>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <h2>Fill Details</h2>

              <label htmlFor="username">Username:</label>
              <input
                id="username"
                type="text"
                value={formData.username}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="email">Email Address:</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="phone">Phone Number:</label>
              <input
                id="phone"
                type="text"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="dob">Date of Birth:</label>
              <input
                id="dob"
                type="date"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />

              <br />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default XModal;
