import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import GeneratedImage from "../components/GeneratedImage";
import { useActiveAccount } from "thirdweb/react";
import CB from "../components/CB"; // Import the connect button component

const Home = () => {
  const activeAccount = useActiveAccount();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    userClass: "",
    price: 0, // Add price to form data
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleFormSubmit = (data) => {
    setFormData(data); // Set the form data from the Form component
  };

  const handleImageCreated = () => {
    navigate("/mint", { state: formData }); // Pass formData including price to mint page
  };

  return (
    <div style={{ padding: "20px" }}>
      <CB />
      <Form onSubmit={handleFormSubmit} />
      
      {/* Only display the GeneratedImage component after the form is filled */}
      {formData.name && formData.address && formData.userClass && (
        <GeneratedImage
          name={formData.name}
          address={formData.address}
          userClass={formData.userClass}
          price={formData.price} // Ensure price is passed
          onImageCreated={handleImageCreated} 
        />
      )}
    </div>
  );
};

export default Home;
