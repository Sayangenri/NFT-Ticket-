import React, { useState, useEffect } from "react";

const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [userClass, setUserClass] = useState("");
  const [price, setPrice] = useState(0);

  // Update price based on selected class
  useEffect(() => {
    switch (userClass) {
      case "1st Class":
        setPrice(5000);
        break;
      case "2nd Class":
        setPrice(3000);
        break;
      case "3rd Class":
        setPrice(2000);
        break;
      default:
        setPrice(0);
    }
  }, [userClass]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, address, userClass, price }); // Pass price with form data
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">User Information</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">Select Class:</label>
        <select
          value={userClass}
          onChange={(e) => setUserClass(e.target.value)}
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="">Select Class</option>
          <option value="1st Class">1st Class - ₹5000</option>
          <option value="2nd Class">2nd Class - ₹3000</option>
          <option value="3rd Class">3rd Class - ₹2000</option>
        </select>
      </div>

      <div className="mb-4">
        <p className="text-gray-700">Price: <span className="font-medium">₹{price}</span></p>
      </div>
      
      <button
        type="submit"
        className="w-full py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Buy NOW
      </button>
    </form>
  );
};

export default Form;
