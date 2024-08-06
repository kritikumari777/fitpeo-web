import React from 'react'
import CardComp from './CardComp'
import ActivityComp from './ActivityComp'
import RecentOrdersComp from './RecentOrdersComp'

const LeftSectionComp = () => {
  return (
     <>
     <CardComp/>
     <ActivityComp/>
     <RecentOrdersComp/>
     </>
  )
}

export default LeftSectionComp