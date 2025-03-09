import React from 'react'
import { Navbar } from './component/Navbar'
import { Cards } from './component/Cards'
import { Home } from './component/Home'
const page = () => {
  return (
    <div className=''>
      <Navbar />
      <div className="flex flex-wrap gap-20  max-xl:gap-10 px-4">
        <Cards/>
        <Home/>
      </div>
    </div>
  )
}

export default page