import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Reservation = () => {
  return <div>
      <Navbar />
      <div className='pt-[120px] w-full'>
        <div className='relative'>
        <img className='w-screen' src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmlldG5hbWVzZSUyMGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
        <h1 className='absolute border-yellow-300 border-4 bg-black/30 text-[36px] sm:text-[50px] md:text-[58px] xl:text-[88px] top-1/2 left-1/2 -translate-x-1/2 text-white text-center py-3 w-1/3 font-script'>Reservation</h1>
        </div>
        <div className='mx-5 py-10'>
        <h1 className='text-5xl text-center leading-tight tracking-tight font-script'>
        We are now accepting reservations and walk in guests. 
        </h1>
        <p className='text-base text-center leading-tight tracking-tight mt-5 font-serif1'>
        We always reserve 70% of our dining room for reservations.
        </p>
        <p className='text-base text-center leading-tight tracking-tight mt-3 font-serif1'>
        If your desired time is not available, you can join our waitlist remotely on the day of your visit.
        </p>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-emerald-800 hover:bg-emerald-700 p-3 uppercase text-white font-serif1">Reserve a table</button>
        </div>
        <div className="mt-8 pb-20 flex items-center justify-center">
          <button className="bg-emerald-800 hover:bg-emerald-700 p-3 uppercase text-white font-serif1">Join our waitlist on the day of your visit.</button>
        </div>
    </div>
      <Footer />
  </div>;
};

export default Reservation;
