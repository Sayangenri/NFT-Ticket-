import React from "react";
import { client } from "../client"; // Adjust path as necessary
import { ConnectButton } from "thirdweb/react"; // Import the ConnectButton from thirdweb

const ConnectButtonComponent = () => {
  return (
    <div>
      <ConnectButton client={client} /> {/* Render the connect button */}
    </div>
  );
};

export default ConnectButtonComponent; // Export the component
