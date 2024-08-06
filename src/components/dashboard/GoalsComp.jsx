import React from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { goleData } from '../dashboard/CardArray';

const GolesComp = () => {
  return (
    <div className='lg:h-[315px] sm: h-[318px] container gole-container-height bg-[#212121] border border-zinc-900 flex flex-col gap-4 my-5'>
      {goleData.map((item, index) => (
        <div key={index} className='flex justify-between items-center md:p-[21.5px] p-[30px] rounded-lg'>
          <div className='flex items-center gap-4'>
            <div className='text-white'>{item.userIcon}</div>
            <div className='font-semibold text-white'>{item.goal}</div>
          </div>
          <div className='text-white'>
          <MdArrowForwardIos />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GolesComp;
