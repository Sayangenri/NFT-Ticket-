import React, { useEffect } from "react";
import { useActiveAccount } from "thirdweb/react"; // Import the hook
import { useNavigate } from "react-router-dom"; 
import CB from "../components/CB"; // Import the new component

const ConnectPage = () => {
  const activeAccount = useActiveAccount(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    if (activeAccount) {
      navigate("/home"); 
    }
  }, [activeAccount, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Book Your Ticket</h1> {/* Add heading */}
      <CB /> 
    </div>
  );
};

export default ConnectPage;
