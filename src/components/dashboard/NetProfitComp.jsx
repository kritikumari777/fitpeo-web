import React from 'react';
import GoalCompletionChart from './GoalCompletionChart';
import { IoMdArrowDropup } from 'react-icons/io';

const NetProfitComp = () => {
  return (
    <div className="container mt-5 sm:mt-0 bg-[#212121] lg:p-4 p-8 rounded-lg shadow-lg sm:flex-col flex lg:flex-row justify-between items-center border border-zinc-900">
      <div>
        <div className="text-white">Net Profit</div>
        <div className="text-white text-lg font-semibold py-3">$6759.59</div>
        <div className='sm:flex gap-2 justify-center justify-items-center text-left'>
              <div className='mt-2 text-green-600'>
              <IoMdArrowDropup />
              </div>
            <p className="text-lg text-green-600">3%</p>
        </div>
      </div>
      <div className='lg:mt-0 mt-3'>
        <GoalCompletionChart />
      </div>
    </div>
  );
}

export default NetProfitComp;
