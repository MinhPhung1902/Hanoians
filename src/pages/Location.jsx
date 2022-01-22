import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Location = () => {
    const times = [
        {id:1, date:'Monday - Thursday', time:'5:00 pm - 10:00 pm'},
        {id:2, date:'Friday-Sunday', time:'5:00 pm - 11:00 pm'},
        {id:3, date:'Friday-Sunday Brunch', time:'11:00 am - 3:00 pm'},
        {id:4, date:'Appertivo hour', time:'4:00 pm - 6:00 pm daily'},
    ]
  return <div>
      <Navbar />
      <div className='pt-[140px] text-center'>
        <h1 className="mt-20 text-[72px] font-script">Hours & Location</h1>
        <h2 className='underline text-emerald-600 text-lg mt-2 font-serif1'>
            19 Hàng Bài, Hoàn Kiếm, Hà Nội
            </h2>
            <h2 className='underline text-emerald-600 text-lg font-serif1'>
            0853154378 
            </h2>
            <h2 className='underline text-emerald-600 text-lg font-serif1'>
            phungnhatminh1902@gmail.com
            </h2>
            <div className='mt-2 pb-5 font-serif1'>
            {times.map((time) =>{
                 return (
                    <div className='mt-3'>
                    <h3 id={time.id} className='text-[18px] font-semibold'>{time.date}</h3>
                    <p className="text-sm">{time.time}</p>
                    </div> 
                 )               
            })}
            </div>
            <div className="grid place-items-center pb-20">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.2172397387512!2d105.85082531471515!3d21.023991986000947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abecae45dd47%3A0x222d0f11d5610a7e!2zMTkgUC4gSMOgbmcgQsOgaSwgSMOgbmcgQsOgaSwgSG_DoG4gS2nhur9tLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1642734911649!5m2!1sen!2s" 
             className='w-[400px] h-[300px] md:w-[600px] md:h-[450px]'
             style={{border:0}} allowfullscreen="" loading="lazy">
            </iframe>
            </div>
      </div>
      <Footer />
  </div>;
};

export default Location;
