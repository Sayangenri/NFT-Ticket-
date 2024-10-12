import { useActiveAccount } from "thirdweb/react";
import { client } from "../client";
import { getContract } from "thirdweb";
import { TransactionButton } from "thirdweb/react";
import { toWei } from "thirdweb";
import { prepareTransaction } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { useSendTransaction } from "thirdweb/react";
import { mintTo } from "thirdweb/extensions/erc721";
import CB from "../components/CB";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const contract = getContract({
  client,
  chain: defineChain(43113), // Ensure this is the right chain for your contract
  address: "0x8Fe75c2E3b30511Cc579fa75ADE88Af95fdC3B7C",
});


function App() {
  const [amountInEth, setAmountInEth] = useState(null);
  const location = useLocation();
  const { name, address, userClass, price } = location.state || {};
  const activeAccount = useActiveAccount();
  const INR_AMOUNT = price;
  const TO_ADDRESS = activeAccount?.address || ""; 
  const { mutate: sendTransaction } = useSendTransaction();
  console.log(TO_ADDRESS);
  const onClick = async () => {
     // Amount in INR
    const ethPrice = 2000; // Hardcoded ETH price in INR
    const amountInEth =  INR_AMOUNT / ethPrice; // Convert INR to ETH
    console.log(`Amount in ETH: ${amountInEth}`); // Debugging log
    setAmountInEth(amountInEth);
    if (activeAccount && name && userClass && price) {
      console.log("Minting NFT with the following details:");
    console.log("Name:", name);
    console.log("Description:", `${name} has bought a ticket for ${userClass} class at a price of ₹${price}.`);
    console.log("Image:", "/upload/imge.png"); // Ensure image path is valid
    
      const transaction = await mintTo({
        contract,
        to: TO_ADDRESS, 
        nft: {
          name: name,
          description: `${name} has bought a ticket for ${userClass} class at a price of ₹${price}.`, // Meaningful description
          image: "",
        },
      });
  
      sendTransaction(transaction);
 // Show the "Confirm Transaction" button
    } else {
      console.error("Required information is missing.");
    }
  };

  const amaount = async()=>{
    const ethPrice = 2000; // Hardcoded ETH price in INR
    const amountInEth =  INR_AMOUNT / ethPrice; // Convert INR to ETH
    console.log(`Amount in ETH: ${amountInEth}`); // Debugging log
    setAmountInEth(amountInEth);
  }

  return (
    <main className="p-6 min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Payment Confirm Page</h1>
        <h2 className="text-xl font-semibold mb-2">User Details</h2>
        {name && <p className="mb-1 text-gray-700">Name: <span className="font-medium">{name}</span></p>}
        {address && <p className="mb-1 text-gray-700">Address: <span className="font-medium">{address}</span></p>}
        {userClass && <p className="mb-4 text-gray-700">User Class: <span className="font-medium">{userClass}</span></p>}
        {price && <p className="mb-4 text-gray-700">User Class: <span className="font-medium">{price}</span></p>}

        <CB />
        {amountInEth !== null && (
          <div>
            <p>Ticket Price: {amountInEth} AVAX</p>
          </div>
        )}
        <div className="flex justify-center mt-4">
        <TransactionButton onClick={amaount}
            transaction={() => {
              // Create a transaction object and return it
              const transaction = prepareTransaction({
                to: "0x998F8Fca5845908E83FFe299b98eC3F5c05b3093",
                chain: defineChain(43113),
                client: client,
                value: toWei(amountInEth.toString()),
              });
              return transaction;
            }}


          >
            Confirm Payment 
          </TransactionButton>

          <button
            onClick={onClick}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
            disabled={!activeAccount} // Disable button if activeAccount is not available
          >
            Get Ticket
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
