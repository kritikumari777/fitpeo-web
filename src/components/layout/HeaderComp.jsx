import React from 'react';
import { FaEnvelope, FaCog, FaUserCircle, FaBell } from 'react-icons/fa';

const Header = () => {
  return (
    <header style={{height: "64px"}} className="flex justify-between items-center ">
      <input
        style={{width: "20%", height: "30px"}}
        type="text"
        placeholder="Search"
        onChange={(e) => e.target.value}
        className="p-2 rounded border bg-[#212121] border-gray-300  text-white"
      />
      <div className="flex items-center gap-4">
        <FaEnvelope size={24} className="text-slate-300 cursor-pointer" />
        <FaCog size={24} className="text-slate-300 cursor-pointer" />
        <FaBell size={24} className="text-slate-300 cursor-pointer" />
        <FaUserCircle size={30} className="text-[#FFC700] cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
