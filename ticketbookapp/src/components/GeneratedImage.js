// src/components/GeneratedImage.js
import React, { useEffect } from "react";
import html2canvas from "html2canvas";

const GeneratedImage = ({ name, address, userClass }) => {
  const printImage = () => {
    const printArea = document.getElementById("printArea");
    html2canvas(printArea).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "generated_image.png";
      link.click();
    });
  };

  useEffect(() => {
    if (name && address && userClass) {
      printImage();
    }
  }, [name, address, userClass]);

  return (
    <div
      id="printArea"
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid black",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h2>Generated Details</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Address:</strong> {address}
      </p>
      <p>
        <strong>Class:</strong> {userClass}
      </p>
    </div>
  );
};

export default GeneratedImage;
