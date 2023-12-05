import React, { useContext, useState } from 'react';
import Web3Context from '../../context/Web3Context';

const ConnectedAccount = () => {
  const { selectedAccount } = useContext(Web3Context);

  const maxDisplayLength = 10; // Set the maximum number of characters to display initially
  const [showFullAddress, setShowFullAddress] = useState(false);

  // Check if selectedAccount exists before manipulating its value
  const truncatedAddress = showFullAddress
    ? selectedAccount
    : selectedAccount
    ? `${selectedAccount.substring(0, maxDisplayLength)}...`
    : null;

  const toggleAddressDisplay = () => {
    setShowFullAddress(!showFullAddress);
  };

  return (
    <div className='flex items-center text-gray-200 space-x-2'>
      <div className='flex items-center bg-[#2F2F36] p-2 rounded-lg'>
        <p className="uppercase text-s">{truncatedAddress ? truncatedAddress : "Connect Account"}</p>
        {selectedAccount && (
          <button onClick={toggleAddressDisplay} className='ml-2 text-gray-300 focus:outline-none'>
            {showFullAddress ? 'Hide' : 'Show'} Address
          </button>
        )}
      </div>
    </div>
  );
};

export default ConnectedAccount;
