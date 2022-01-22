import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Facebook } from '@material-ui/icons';
import { Instagram } from '@material-ui/icons';


const Navbar = () => {
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false)

  const showSideMenu = () => {
      (isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true)
  }
  return <div className='fixed z-40' >
     <div className='bg-green-900 text-center p-1 text-white text-sm uppercase font-serif1'>
      19 Hàng Bài, Hoàn Kiếm, Hà Nội &nbsp; &nbsp; &nbsp; 0853154378 
  </div>
<nav className="w-screen flex items-center justify-between flex-wrap bg-amber-50 shadow-sm p-3">
  <div className="flex items-center flex-shrink-0 text-black mr-6">
    <Link to='/'>
       <img className='w-1/2' src="./logo_full.png" alt="" />
    </Link>
  </div>
  <button onClick={()=>{showSideMenu()}}>
                {(isSideMenuOpen) ? 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
                :
               
 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
</svg>}
            </button>
            {(isSideMenuOpen) ? SideMenu() : ''}
</nav>
  </div>;
};
function SideMenu(){
  return(
      <div className="fixed h-screen w-1/2 sm:w-1/4 lg:w-1/5  bg-emerald-800 top-0 left-0 font-serif1 ">
          <ul className="mt-5 bg-white flex flex-col items-center justify-center space-y-3 py-3">                      
              <li className="text-[22px] font-medium hover:text-gray-400"><a href="#"><Link to='/Reservation'>Reservation</Link></a></li>
              <li className="text-[22px] font-medium hover:text-gray-400"><a href="#"><Link to='/Location'>Location</Link></a></li>
              <li className="text-[22px] font-medium hover:text-gray-400"><a href="#"> <Link to='/Menu'>Menu</Link></a></li>
              <li className="text-[22px] font-medium hover:text-gray-400"><a href="#"><Link to='/About'>About</Link></a></li>
              <li className="text-[22px] font-medium hover:text-gray-400"><a href="#"><Link to='/Contact'>Contact</Link></a></li>
              <li className="text-[22px] font-medium hover:text-gray-400"><a href="#"><Link to='/SignUp'>SignUp</Link></a></li>
              <div className='flex-row space-x-2'>
              <Facebook className='bg-emerald-800 rounded-full text-white p-[6px]'  fontSize='large' />
              <Instagram  className='bg-emerald-800 rounded-full text-white p-[6px]' fontSize='large' />
            </div>
            <div className="flex flex-col items-center mt-3 justify-center text-center">
            <p className='underline text-emerald-600 text-[16px]'>19 Hang Bai, Hoan Kiem, Hanoi</p>
            <p className='underline text-emerald-600 text-[16px]'>0853154378</p>
          </div>
          </ul>
      </div>
  )
}
export default Navbar;

