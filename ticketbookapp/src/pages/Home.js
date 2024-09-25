import React, { useState } from "react";
import Form from "../components/Form";
import GeneratedImage from "../components/GeneratedImage";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    userClass: "",
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Image Generator</h1>
      <Form onSubmit={handleFormSubmit} />
      {formData.name && (
        <GeneratedImage
          name={formData.name}
          address={formData.address}
          userClass={formData.userClass}
        />
      )}
    </div>
  );
};

export default Home;
