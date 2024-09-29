import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Form from "../components/Form";
import GeneratedImage from "../components/GeneratedImage";
import { useActiveAccount } from "thirdweb/react"; // Import the hook
import CB from "../components/CB"; // Import the connect button component

const Home = () => {
  const activeAccount = useActiveAccount();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    userClass: "",
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  // This function will handle image generation and redirection
  const handleImageCreated = () => {
    // Perform any actions you need after image generation
    navigate("/mint"); // Redirect to the mint page
  };

  return (
    <div style={{ padding: "20px" }}>
      <CB />
      <h1>Image Generator</h1>
      <Form onSubmit={handleFormSubmit} />
      {formData.name && (
        <GeneratedImage
          name={formData.name}
          address={formData.address}
          userClass={formData.userClass}
          onImageCreated={handleImageCreated} // Pass the handler to the GeneratedImage component
        />
      )}
    </div>
  );
};

export default Home;
