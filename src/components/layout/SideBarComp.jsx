import React, { useState } from 'react';
import { FaHome, FaChartLine, FaBook, FaWallet, FaShoppingBag } from 'react-icons/fa';

const SideBarComp = () => {
  const [active, setActive] = useState('home');

  return (
    <div className="flex flex-col items-center p-4 h-full">
      <FaHome
        size={24}
        className={`my-4 cursor-pointer ${active === 'home' ? 'text-sky-200' : 'text-slate-300'}`}
        onClick={() => setActive('home')}
      />
      <FaChartLine
        size={24}
        className={`my-4 cursor-pointer ${active === 'analytics' ? 'text-sky-200' : 'text-slate-300'}`}
        onClick={() => setActive('analytics')}
      />
      <FaBook
        size={24}
        className={`my-4 cursor-pointer ${active === 'notebook' ? 'text-sky-200' : 'text-slate-300'}`}
        onClick={() => setActive('notebook')}
      />
      <FaWallet
        size={24}
        className={`my-4 cursor-pointer ${active === 'wallet' ? 'text-sky-200' : 'text-slate-300'}`}
        onClick={() => setActive('wallet')}
      />
      <FaShoppingBag
        size={24}
        className={`my-4 cursor-pointer ${active === 'bag' ? 'text-sky-200' : 'text-slate-300'}`}
        onClick={() => setActive('bag')}
      />
    </div>
  );
};

export default SideBarComp;
