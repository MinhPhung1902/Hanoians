import React from 'react';

const SignUp = () => {
  return <div className='relative flex flex-col items-center justify-center min-h-[100vh] shadow-xl' style={{ backgroundImage: "url(/bg/food.jpeg)" }}>
          <h1 className='font-script text-[56px] pb-5'>Sign Up</h1>
          <div className='flex flex-col space-y-5'>
            <input className='py-2 px-1 h-[38px] w-[425px]' type="text" placeholder='First Name'/>
            <input className='py-2 px-1 h-[38px] w-[425px]' type="text" placeholder='Last Name'/>
            <input className='py-2 px-1 h-[38px] w-[425px]' type="Email" placeholder='email'/>
         </div>
         <div className='flex items-center justify-center mt-10'>
           <button className='bg-emerald-800 hover:bg-emerald-600 text-white p-2 uppercase font-serif1 text-xl'>Submit</button>
         </div>
  </div>;
};

export default SignUp;
