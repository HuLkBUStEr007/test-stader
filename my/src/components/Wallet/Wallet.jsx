import React, { useEffect, useState } from 'react';
import { connectWallet } from '../../utils/connectWallet';
import Web3Context from '../../context/Web3Context';
import { handleAccountChange } from '../../utils/handleAccountChange';
import { handleChainChange } from '../../utils/handleChainChange';

const Wallet = ({ children }) => {
  const [state, setState] = useState({
    provider: null,
    account: null,
    stakingContract: null,
    withdrawContract: null,
    ethxContract: null,
    chainId: null,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.ethereum.on('accountChanged', () => handleAccountChange(setState));
    window.ethereum.on('chainChanged', () => handleChainChange(setState));

    return () => {
      window.ethereum.removeListener('accountChanged', () => handleAccountChange(setState));
      window.ethereum.removeListener('chainChanged', () => handleChainChange(setState));
    };
  }, []);

  const handleWallet = async () => {
    try {
      setLoading(true);
      const { provider, selectedAccount, stakingContract, withdrawContract, ethxContract, chainId } = await connectWallet();
      setState({ provider, selectedAccount, stakingContract, withdrawContract, ethxContract, chainId });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <Web3Context.Provider value={state}>{children}</Web3Context.Provider>
      <button
        onClick={handleWallet}
        type="button"
        className="fixed top-6 right-6 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
      >
        {/* You can replace the SVG icon with your preferred MetaMask icon or any other suitable icon */}
        <svg
          aria-hidden="true"
          className="w-6 h-5 me-2 -ms-1"
          viewBox="0 0 2405 2501"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Your SVG path here */}
        </svg>
        Connect with MetaMask
      </button>
    </div>
  );
};

export default Wallet;
