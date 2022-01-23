import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const About = () => {
  return <div>
      <Navbar />
      <div className='pt-[120px] w-full'>
        <div className='relative'>
        <img className='w-screen' src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmlldG5hbWVzZSUyMGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
        <h1 className='absolute border-yellow-300 border-4 bg-black/30  text-[44px] sm:text-[56px] md:text-[88px] top-[25%] sm:top-[33%] left-1/2 -translate-x-1/2 text-white text-center py-3  w-1/3 font-script'>About Us</h1>
        </div>
        <div className='mx-20 md:mx-40 py-20'>
        <p className='text-[20px] text-center leading-tight tracking-tight mt-5 font-serif1'>
        Serving up a simply straightforward (and straight-up savory) menu of Vietnamese classics like pho, spring-roll, savoury pancakes, steam-roll, 
        and rice vermicelli, an extensive wine list highlighting the best biodynamic and organic wines from Dalat, and world class cocktails from the bar,
         Hanoians is a love letter to Vietnam woven from a different cloth.  
        </p>
        </div>
    </div>
      <Footer />
  </div>;
};

export default About;
