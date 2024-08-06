import React from 'react';
import { FaUserCircle, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { feedbackData } from '../dashboard/CardArray';

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div style={{ display: 'flex' }}>
      {[...Array(fullStars)].map((_, i) => <FaStar key={`full-${i}`} style={{ color: 'yellow' }} />)}
      {halfStar && <FaStarHalfAlt style={{ color: 'white' }} />}
      {[...Array(emptyStars)].map((_, i) => <FaRegStar key={`empty-${i}`} style={{ color: 'white' }} />)}
    </div>
  );
};

const FeedbackComp = () => {
  return (
    <div style={{height: "380px"}} className='container rounded-md bg-[#212121] border border-zinc-900 mb-5'>
       <div className='text-white font-medium text-xl sm:font-medium sm:text-sm lg:font-medium lg:text-lg p-3'>Customer's Feedback</div>
      {feedbackData.map((item, index) => (
        <div className='xl:p-[8px] lg:p-[5px] sm:p-[2.5px] p-[8.2PX] bg-[#212121]'  key={index} style={{ borderBottom: '1px solid black' }}>
          <div className='text-white flex ml-1 mt-1 lg:mb-3 sm:mb-2 mb-3' style={{alignItems: 'center',}}>
            <FaUserCircle color="pink" size={30} style={{ marginRight: '10px' }} />
            <span>{item.name}</span>
          </div>
          <div className='lg:mb-3 sm:mb-2 mb-3 ml-1'>
            {renderStars(item.rating)}
          </div>
          <div>
            <p className='text-white ml-1'>{item.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackComp