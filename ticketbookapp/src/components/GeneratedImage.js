import React, { useEffect } from "react";

const GeneratedImage = ({ name, address, userClass, onImageCreated }) => {
  useEffect(() => {
    if (name && address && userClass) {
      // Simulate image creation logic here
      // For example, you might have an API call to generate the image
      console.log("Image created with:", { name, address, userClass });

      // Call the onImageCreated prop to trigger redirection
      onImageCreated();
    }
  }, [name, address, userClass, onImageCreated]);

  return (
    <div>
      <h2>Generated Image</h2>
      {/* Display the generated image here */}
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      <p>User Class: {userClass}</p>
      {/* Replace with actual image if available */}
    </div>
  );
};

export default GeneratedImage;
