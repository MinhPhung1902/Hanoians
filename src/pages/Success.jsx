import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return <div className='relative flex flex-col items-center justify-center min-h-[100vh] shadow-xl' style={{ backgroundImage: "url(/bg/food.jpeg)" }}>
          <h1 className='font-script text-[56px] pb-5'>Thanks you!!!</h1>
          <p className='text-center font-serif1'>For signing up for email updates</p>
         <div className='flex items-center justify-center mt-10'>
           <button className='bg-emerald-800 hover:bg-emerald-600 text-white p-2 uppercase font-serif1 text-xl'>
             <Link to='/'>Back to homepage</Link>
             </button>
         </div>
  </div>;
};

export default Success;
