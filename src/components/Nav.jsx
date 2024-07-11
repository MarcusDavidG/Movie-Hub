import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";

const Nav = () => {
  return (
    <nav>
      <div className='w-full text-white flex justify-between py-3 px-3'>
          <div className=''>
            <img src="https://movieoapp.vercel.app/static/media/logo.5f76119f8f1f473eea2f.png" alt="" className='w-24' />
          </div>
        
      <div>
        <ul className='flex gap-5 text-l'>
          <li>Tv Shows</li>
          <li>Movies</li>
        </ul>
      </div>

      <div className='flex justify-between'> 
        <input type="text" placeholder='Search...' className='rounded-xl'/>
        <CiSearch className='h-8 w-8'/>

      </div>

      <div>
      <MdAccountCircle className='h-8 w-8'/>
      </div>


      </div>
    </nav>
  )
}

export default Nav