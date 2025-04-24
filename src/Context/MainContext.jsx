import { createContext, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  checkIfWalletIsConnect, connectMetamask,
} from "../Utils/connectMetamask";
import {
  createCampaign,
  getCampaignsDetail,
  getUserCampaigns,
} from "../Utils/CampaignManager";
import { getCampaignDetail } from "../Utils/CampaignContract";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [account, setAccount] = useState("");

  // connect to metamask
  const connectMetamaskWithAccount = useCallback(async () => {
    const { provider } = await connectMetamask();
    if (!provider) {
      return false;
    }
    const accounts = await provider.send("eth_requestAccounts", []);
    setAccount(accounts[0]);
    window.location.reload();
    return true;
  }, [setAccount]);

  // check if wallet is connected
  useEffect(() => {
    checkIfWalletIsConnect().then(setAccount);
  }, [setAccount]);

  return (
    <MainContext.Provider
      value={{
        account,
        connectMetamaskWithAccount,
        createCampaign,
        getCampaignsDetail,
        getCampaignDetail,
        getUserCampaigns,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
