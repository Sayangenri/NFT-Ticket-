import React, { useEffect, useState, useRef } from "react";

const GeneratedImage = ({ name, address, userClass, price, onImageCreated }) => {
  const [imageUrl, setImageUrl] = useState("");
  const downloadLinkRef = useRef(null); // Create a ref for the download link

  useEffect(() => {
    if (name && address && userClass && price) {
      // Simulate image creation logic here
      console.log("Image created with:", { name, address, userClass, price });

      // Simulate image creation (e.g., creating a simple canvas image)
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = 300; // Set your desired width
      canvas.height = 300; // Set your desired height

      // Example: Fill the canvas with some text
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.font = "20px Arial";
      ctx.fillText(`Name: ${name}`, 10, 50);
      ctx.fillText(`Address: ${address}`, 10, 100);
      ctx.fillText(`User Class: ${userClass}`, 10, 150);
      ctx.fillText(`Class Price: ${price}`, 10, 200);

      // Create a URL for the generated image
      const url = canvas.toDataURL("image/png");
      setImageUrl(url);

      // Trigger the download automatically
      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = `${name}.png`; // Set the filename for download
      downloadLink.click(); // Trigger the click event to download the image

      onImageCreated();
    }
  }, [name, address, userClass, price, onImageCreated]);

  return (
    <div>
      <h2>Generated Image</h2>
      {imageUrl && (
        <div>
          <img src={imageUrl} alt="Generated" style={{ width: "300px", height: "300px" }} />
        </div>
      )}
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      <p>User Class: {userClass}</p>
      <p>Class Price: {price}</p>
    </div>
  );
};

export default GeneratedImage;
