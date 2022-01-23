import React from 'react';
import { Link } from 'react-router-dom';
import Notification from '../component/Notification';
import Navbar from '../component/Navbar';
import FoodCarousel from '../component/FoodCarousel'
import Footer from '../component/Footer'
import Menu from '../component/Menu';

const HomePage = () => {
    const times = [
        {id:1, date:'Monday - Thursday', time:'5:00 pm - 10:00 pm'},
        {id:2, date:'Friday-Sunday', time:'5:00 pm - 11:00 pm'},
        {id:3, date:'Friday-Sunday Brunch', time:'11:00 am - 3:00 pm'},
        {id:4, date:'Appertivo hour', time:'4:00 pm - 6:00 pm daily'},
    ]
    const menuBtn = [
        {id:1, name:'Dinner'},
        {id:2, name:'Cocktails'},
        {id:3, name:'Wine & Beer'},
        {id:4, name:'Dessert'},
        {id:5, name:'Brunch'},
    ]
  return <div className='overflow-auto'>
    {/* <Notification /> */}
    <Navbar />
    <FoodCarousel />
    <div className='pt-[60px] pb-10 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
        <div className='items-center justify-center text-center ml-35 mt-10'>
            <h1 className='text-4xl -tracking-tight font-script'>Visit Us</h1>
            <h2 className='underline text-emerald-600 text-lg mt-2 font-serif1'>
            19 Hàng Bài, Hoàn Kiếm, Hà Nội
            </h2>
            <h2 className='underline text-emerald-600 text-lg font-serif1'>
            0853154378 
            </h2>
            <div className='mt-2 font-serif1'>
            {times.map((time) =>{
                 return (
                    <div className='mt-3'>
                    <h3 id={time.id} className='text-[18px] font-semibold'>{time.date}</h3>
                    <p className="text-sm">{time.time}</p>
                    </div> 
                 )               
            })}
            </div>
            <div className='mt-5 space-x-3 text-white font-serif1'>
                <button className='bg-emerald-800 hover:bg-emerald-600 p-2 uppercase'><Link to='/Reservation'>Reservation</Link></button>
                <button className='bg-emerald-800 hover:bg-emerald-600 p-2 uppercase'><Link to='/Location'>Find us</Link></button>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <img className='mt-10 w-3/4' src="https://images.unsplash.com/photo-1610452220299-5edf90b8a6ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlldG5hbWVzZSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />
        </div>
    </div>
   <Menu />
    <div className='w-full'>
        <div className='relative'>
        <img className='w-screen' src="https://images.unsplash.com/photo-1622087250532-ef720737446b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHZpZXRuYW1lc2UlMjBmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
        <h1 className='absolute border-yellow-300 border-4 bg-black/30 text-[48px] md:text-[88px]  text-white text-center top-[25%] sm:top-[33%] left-1/2 -translate-x-1/2  py-3 w-1/3 font-script'>About Us</h1>
        </div>
        <div className='2xl:mx-40 xl:mx-40 md:mx-20 sm:mx-10 p-20'>
        <h1 className='text-5xl text-center leading-tight tracking-tight font-script'>
        A love letter to Vietnam kitchen from a different cloth
        </h1>
        <p className='text-base text-center leading-tight tracking-tight mt-5 font-serif1'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae hic quam iure ea, fuga quaerat ducimus reiciendis veritatis quasi assumenda vero doloremque, cum magnam officia? 
        uscipit id fuga laudantium nemo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora perferendis suscipit, cupiditate iure nesciunt provident ipsa. 
        </p>
        <p className='text-base text-center leading-tight tracking-tight mt-3 font-serif1'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur praesentium illum ipsum voluptates quidem voluptas adipisci placeat consectetur officiis ut autem dignissimos harum error, laudantium sint. Ab officiis beatae deserunt!
        </p>
        <div className="mt-10 grid place-items-center">
            <button className='bg-emerald-800 hover:bg-emerald-600 p-3 text-white uppercase font-serif1'><Link to='/About'>Our story</Link></button>
        </div>
        </div>
       
    </div>
    <Footer />
  </div>;
};

export default HomePage;
