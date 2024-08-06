import React from 'react'
import LeftSectionComp from './LeftSectionComp'
import RightSectionComp from './RightSectionComp'

const DashbordComp = () => {
  return (
    <div className=''>
    <div className='text-white text-2xl pb-5'>Dashbord</div>
    <div class="sm:flex gap-5">
  <div class="w-full sm:w-3/4">
    <LeftSectionComp />
  </div>
  <div class="w-full sm:w-1/4">
    <RightSectionComp />
  </div>
 </div>
</div>
  )
}

export default DashbordComp