import { ethers } from "ethers";

export const connectMetamask = async () => {
  if (!("ethereum" in window)) {
    // no wallet extension
    return { signer: null, provider: null };
  }

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return { signer: signer, provider: provider };
  } catch (error) {
    console.log("error", error);
    return { signer: null, provider: null };
  }
};

export const checkIfWalletIsConnect = async () => {
  if (!("ethereum" in window)) {
    // no wallet extension installed
    return "";
  }

  try {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (accounts.length) {
      return accounts[0];
    } else {
      console.log("No accounts found");
      return "";
    }
  } catch (error) {
    console.log(error);
    return "";
  }
};
