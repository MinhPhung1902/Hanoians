import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Contact = () => {
  return <div>
      <Navbar />
      <div className='pt-[140px]'>
        <h1 className='text-[72px] text-center font-script mt-20'>
            Contact Us
        </h1>
        <p className='font-serif1 text-center mt-3'>
        For job opportunities, please send your resume to info@thetailorssonsf.com
        </p>
        <p className='font-serif1 text-center mt-3'>
        For all other inquiries, send us a message via the form below and we’ll get back to you as soon as possible.
        </p>
        <div className='mt-10 flex flex-col space-y-3 justify-center items-center'>
            <input type="text" className='p-1 xl:h-[48px] xl:w-[578px] lg:h-[36px] lg:w-[450px] md:h-[28px] md:w-[355px] sm:h-[14px] sm:w-[355px]  ' placeholder='Name' />
            <input type="text" className='p-1 xl:h-[48px] xl:w-[578px] lg:h-[36px] lg:w-[450px] md:h-[28px] md:w-[355px] sm:h-[14px] sm:w-[355px] ' placeholder='Email' />
            <input type="text" className='p-1 xl:h-[48px] xl:w-[578px] lg:h-[36px] lg:w-[450px] md:h-[28px] md:w-[355px] sm:h-[14px] sm:w-[355px] ' placeholder='Phone number' />
            <input type="text" className='p-1 xl:h-[48px] xl:w-[578px] lg:h-[36px] lg:w-[450px] md:h-[28px] md:w-[355px] sm:h-[14px] sm:w-[255px] ' placeholder='What are you getting in touch about' />
            <input type="text" className='p-1 xl:h-[96px] xl:w-[578px] lg:h-[72px] lg:w-[450px] md:h-[56px] md:w-[355px] sm:h-[28px] sm:w-[255px] h-[28px]' placeholder='Your message' />
        </div>
        <div className="mt-10 pb-20 flex items-center justify-center">
            <button className="bg-emerald-800 hover:bg-emerald-700 uppercase font-serif1 text-white p-3">Send</button>
        </div>
      </div>
      <Footer />
  </div>;
};

export default Contact;
