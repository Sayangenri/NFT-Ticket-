// src/components/Form.js
import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [userClass, setUserClass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, address, userClass });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <br />
      <div>
        <label>Address: </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <br />
      <div>
        <label>Select Class: </label>
        <select
          value={userClass}
          onChange={(e) => setUserClass(e.target.value)}
          required
        >
          <option value="">Select Class</option>
          <option value="1st Class">1st Class</option>
          <option value="2nd Class">2nd Class</option>
          <option value="3rd Class">3rd Class</option>
        </select>
      </div>
      <br />
      <button type="submit">Generate Image</button>
    </form>
  );
};

export default Form;
