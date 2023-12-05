import React from 'react';
import ConnectedAccount from './ConnectedAccount';
import ConnectedNetwork from './ConnectedNetwork';

const Navigation = () => {
  return (
    <header className="w-full h-16 p-4 m-0 flex items-center justify-between bg-[#2F2F36]">
      <div className="flex gap-3 text-sm">
        <ConnectedAccount />
        <ConnectedNetwork />
      </div>
    </header>
  );
};

export default Navigation;
