import React, { useContext } from 'react';
import Web3Context from '../../context/Web3Context';

const ConnectedNetwork = () => {
  const { chainId } = useContext(Web3Context);

  if (chainId === null) {
    return (
      <div className="bg-[#2F2F36] p-2 rounded-lg text-gray-200 uppercase">
        Not connected
      </div>
    );
  } else if (chainId === 5) {
    return (
      <div className="bg-teal-500 p-2 rounded-lg text-white uppercase">
        Connected to Goerli
      </div>
    );
  } else {
    return (
      <div className="bg-rose-500 p-2 rounded-lg text-white uppercase">
        Network Not Supported
      </div>
    );
  }
};

export default ConnectedNetwork;
