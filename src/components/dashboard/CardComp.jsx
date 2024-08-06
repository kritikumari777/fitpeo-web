import React from 'react';
import { cardData } from '../dashboard/CardArray';
import { IoMdArrowDropup } from "react-icons/io";

const CardComp = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.map((item, index) => (
          <div key={index} className="border border-zinc-900 p-4 rounded-lg shadow-lg bg-[#212121] text-start text-white">
            <div className="text-4xl mb-2">{item.icon}</div>
            <h2 className="text-md  mb-2">{item.title}</h2>
            <div className='flex justify-between'>
            <p className="text-2xl font-semibold mb-1">{item.num}</p>
            <div className='flex gap-2 justify-center justify-items-center text-left'>
              <div className='mt-2 text-green-600'>
              <IoMdArrowDropup />
              </div>
            <p className="text-lg text-green-600">{item.pers}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComp;
