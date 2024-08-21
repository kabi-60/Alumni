import React from 'react'
import Sidebar from '../../components/University/Sidebar'
import Navbar from '../../components/University/Navbar'
import UniversityFund from './UniversityFund'

const UniversityDashboard = () => {
  return (
    <div className='bg-[#111111] '>
      <Navbar/>
      <div className='flex '>
      <Sidebar/>
      <UniversityFund/>

      </div>
    </div>
  )
}

export default UniversityDashboard
