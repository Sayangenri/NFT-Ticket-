import { TransactionButton } from "thirdweb/react";
import { useActiveAccount } from "thirdweb/react";
import { client } from "../client";
import { getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { useSendTransaction } from "thirdweb/react";
import { mintTo } from "thirdweb/extensions/erc721";
import {prepareContractCall} from "thirdweb/transaction"
import CB from "../components/CB";

const contract = getContract({
  client,
  chain: defineChain(43113), // Ensure this is the right chain for your contract
  address: "0x8Fe75c2E3b30511Cc579fa75ADE88Af95fdC3B7C",
});

function App() {
	const activeAccount = useActiveAccount();
	console.log("address", activeAccount?.address);
	/*const { data: ownedNFTs } = useReadContract(getOwnedNFTs, {
		contract,
		address: "0x...",
	  });*/

  const { mutate: sendTransaction } = useSendTransaction();

  // Define the mint function
  const onClick = async () => {
    console.log("Mint button clicked");

    // This mint extension handles uploading metadata to IPFS and minting the NFT
    const transaction = await mintTo({
      contract,
      to: `activeAccount.address`, // Use the active address directly
      nft: {
        name: "Try",
        description: "Tryyyy NFT",
        image: "",
      },
    });
    sendTransaction(transaction);
  };

  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
      <CB />
        <div>
          <button onClick={onClick}>Mint</button>
        </div>
		      </div>

       <TransactionButton
      transaction={() => {
        const tx = prepareContractCall({
          contract,
          method: "mint",
          params: [0x998F8Fca5845908E83FFe299b98eC3F5c05b3093n,0.01],
        });
        return tx;
      }}
      onTransactionSent={(result) => {
        console.log("Transaction submitted", result.transactionHash);
      }}
      onTransactionConfirmed={(receipt) => {
        console.log("Transaction confirmed", receipt.transactionHash);
      }}
      onError={(error) => {
        console.error("Transaction error", error);
      }}
    >
      Confirm Transaction
    </TransactionButton>

    </main>
  );
}
export default App;