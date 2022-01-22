import React from 'react';
import { Link } from 'react-router-dom'
import { Facebook } from '@material-ui/icons';
import { Instagram } from '@material-ui/icons';

const Footer = () => {
  return <div>
      <div className='fixed bottom-0 w-full bg-amber-50 flex justify-between p-2 font-serif1 shadow-lg'>
            <div className='flex-row space-x-2'>
              <a href="https://www.facebook.com/nhatminh.phung.192/"> <Facebook className=' bg-emerald-800 hover:bg-emerald-600 rounded-full text-white p-[6px]'  fontSize='large' /></a>
              <a href="https://www.instagram.com/kanye_phung/"> <Instagram  className=' bg-emerald-800 hover:bg-emerald-600 rounded-full text-white p-[6px]' fontSize='large' /></a>
            </div>
            <div className='space-x-3'>
                <button className='uppercase p-2 text-black bg-transparent'>Contact</button>
                <button className='uppercase p-2 text-white bg-emerald-800 hover:bg-emerald-600'><Link to='/SignUp'>SignUp</Link></button>
            </div>
      </div>
      <div className=' font-serif1 text-center p-1 bg-green-900 text-white'>
      &copy; Developed by KanyePhung, 2021
      </div>
  </div>;
};

export default Footer;
