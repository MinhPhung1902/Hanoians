import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Menu = () => {
    const Wines = [
        {id:1, name:'Red Wines', descr:'HAUT MADRAC, Cabinet Sauvigon - 1600'},
        {id:2, name:'White Wine', descr:'"TARAPACA GRAN RESER VA Chardonnay - 980'},
        {id:3, name:'Champagene', descr:'AYALA BRUT MAJEUR - 2200'},
        {id:4, name:'Cocktails', descr:'DALAT SANGRIA Dark rum, Da Lat Premium Red Wine'},
        {id:5, name:'Whiskies', descr:'LOCH LOMOND SIGNATURE - 380'},
    ]
    const Drinks = [
        {id:1, name:'Hanoi lychee mojito', descr:'Gin, tonic, lychee'},
        {id:2, name:'Egg coffee', descr:'Hanoi traditional coffee style'},
        {id:3, name:'30 Gin', descr:'lemongrass, orange, lime'},
        {id:4, name:'Coconut', descr:'from Ben Tre'},
    ]
    const Rolls = [
        {id:1, name:'FOIE GRAS SPRING ROLL', descr:'Pork, black truffle, herbs - 195'},
        {id:2, name:'PHO ROLL', descr:'pho, beef, herb'},
        {id:3, name:'WAGYU ROLL', descr:'A5 Wagyu, herb, pho'},
        {id:4, name:'TRADITIONAL ROLL', descr:'pork, shrimp'},
    ]
    const Phos = [
        {id:1, name:'WAGYU PHO', descr:'Wagyu rare beef, beef rib, bone marrow'},
        {id:2, name:'FOIE GRAS PHO', descr:'foie gras, beef rib'},
        {id:3, name:'DEEP FRIED PHO', descr:'Wagyu rare beef, beef rib'},
    ]
    const salads = [
        {id:1, name:'Crab salad', descr:'shallot, peanut egg'},
        {id:2, name:'Chicken salad', descr:'chicken,cabbage, peanut'},
        {id:3, name:'WAGYU salad', descr:'A5 Wagyu, papaya, peanut'},
    ]
    const Specials = [
        {id:1, name:'BEEF TARTARE', descr:'beef, lemongrass'},
        {id:2, name:'BANH BOT LOC', descr:'shrimp, pork'},
        {id:3, name:'NEM NUONG', descr:'pork sausage, vermicelli'},
        {id:4, name:'BANH KHOT', descr:'shrimp, vermicelli'},
        {id:5, name:'LEMONGRASS PORK CHOP', descr:'pork, lemongrass, cucumber'},
        {id:6, name:'BANH XEO', descr:'vermicelli, herb'},
        {id:7, name:'BANH TRANG', descr:'shallot, eggs'},
        {id:8, name:'BEEF SKEWERED', descr:'beef, vermicelli, peanut'},
    ]
    const Rice = [
        {id:1, name:'HUE RISSOTTO', descr:'clam, rice'},
        {id:2, name:'WAGYU FRIED RICE', descr:'wagyu, garlic, ginger, rice'},
        {id:3, name:'VEGAN RICE', descr:'cabbage, papaya, peanut'},
    ]
    const Desserts = [
        {id:1, name:'Creme Bruele', descr:'custard'},
        {id:2, name:'FISH SAUCE ICE CREAM', descr:'vanilla, fish sauce caramel, pepper'},
        {id:3, name:'MAM TOM YOGURT', descr:'shrimp paste, caramel, pepper'},
        {id:4, name:'STICKY RICE ICE CREAM', descr:'rice, ice-cream, jelly'},
        {id:5, name:'COCONUT JELLY', descr:'coconut, jelly'},
    ]
  return <div>
      <div className='relative'>
          <img className='w-screen h-2/3' src="https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fHZpZXRuYW1lc2UlMjBmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
          <div className="absolute top-[35%] md:top-1/2 left-1/2 -translate-x-1/2 font-script border-yellow-600 border-2 bg-black/40 text-[48px] md:text-[80px] text-white p-3">Menu</div>
      </div>
     <p className="text-center font-serif1 text-[18px] mt-5 mx-10 md:mx-[160px]">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
         Nulla adipisci, laboriosam nesciunt voluptates magni, dolore qui veritatis commodi, corporis aspernatur maiores reiciendis 
         perspiciatis modi illo. Ipsa expedita qui architecto dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
     </p>
    <div className="mt-10 pb-20 flex flex-row justify-center items-center">
        <div className="mx-10 sm:mx-30 xl:mx-40 border-yellow-600 border-2 grid grid-cols-1 md:grid-cols-2 items-center">
            <div className='flex flex-col text-center space-y-7 font-serif1  md:border-r-2 md:border-b-2 border-yellow-600'>
                <h1 className='font-script text-5xl mt-10'>Wines</h1>
                {Wines.map((wine) => {
                    return (
                <div className='mx-5'>
                <h2 className="text-[18px] uppercase font-semibold">{wine.name}</h2>
                <p className='text-[14px]'>{wine.descr}</p>
                </div>
                    )
                })}
                <div className="text-center">
                    -----------
                </div>
            </div>
            <div className='flex flex-col text-center space-y-7 font-serif1 md:border-b-2 border-yellow-600'>
                <h1 className='font-script text-5xl mt-10'>Drinks</h1>
                {Drinks.map((drink) => {
                    return (
                <div className='mx-5'>
                <h2 className="text-[18px] uppercase font-semibold">{drink.name}</h2>
                <p className='text-[14px]'>{drink.descr}</p>
                </div>
                    )
                })}
                <div className="text-center">
                    -----------
                </div>
            </div>
            <div className='flex flex-col text-center space-y-7 font-serif1 md:border-r-2 md:border-b-2 border-yellow-600'>
                <h1 className='font-script text-5xl mt-10'>Salads</h1>
                {salads.map((e) => {
                    return (
                <div className='mx-5'>
                <h2 className="text-[18px] uppercase font-semibold">{e.name}</h2>
                <p className='text-[14px]'>{e.descr}</p>
                </div>
                    )
                })}
                <div className="text-center">
                    -----------
                </div>
            </div>
            <div className='flex flex-col text-center space-y-7 font-serif1 md:border-b-2 border-yellow-600'>
                <h1 className='font-script text-5xl mt-10'>Rice</h1>
                {Rice.map((e) => {
                    return (
                <div className='mx-5'>
                <h2 className="text-[18px] uppercase font-semibold">{e.name}</h2>
                <p className='text-[14px]'>{e.descr}</p>
                </div>
                    )
                })}
                <div className="text-center">
                    -----------
                </div>
            </div>
            <div className='flex flex-col text-center space-y-7 font-serif1 md:border-r-2  md:border-b-2 border-yellow-600'>
                <h1 className='font-script text-5xl mt-10'>Rolls</h1>
                {Rolls.map((e) => {
                    return (
                <div className='mx-5'>
                <h2 className="text-[18px] uppercase font-semibold">{e.name}</h2>
                <p className='text-[14px]'>{e.descr}</p>
                </div>
                    )
                })}
                <div className="text-center">
                    -----------
                </div>
            </div>
            <div className='flex flex-col text-center space-y-7 font-serif1 md:border-b-2 border-yellow-600'>
                <h1 className='font-script text-5xl mt-10'>Pho</h1>
                {Phos.map((e) => {
                    return (
                <div className='mx-5'>
                <h2 className="text-[18px] uppercase font-semibold">{e.name}</h2>
                <p className='text-[14px]'>{e.descr}</p>
                </div>
                    )
                })}
                <div className="text-center">
                    -----------
                </div>
            </div>
            <div className='flex flex-col text-center space-y-7 font-serif1 md:border-r-2 border-yellow-600'>
                <h1 className='font-script text-5xl mt-10'>Special</h1>
                {Specials.map((e) => {
                    return (
                <div className='mx-5'>
                <h2 className="text-[18px] uppercase font-semibold">{e.name}</h2>
                <p className='text-[14px]'>{e.descr}</p>
                </div>
                    )
                })}
                <div className="text-center">
                    -----------
                </div>
            </div>
            <div className='flex flex-col text-center space-y-7 font-serif1 border-yellow-600'>
                <h1 className='font-script text-5xl mt-10'>Desserts</h1>
                {Desserts.map((e) => {
                    return (
                <div className='mx-5'>
                <h2 className="text-[18px] uppercase font-semibold">{e.name}</h2>
                <p className='text-[14px]'>{e.descr}</p>
                </div>
                    )
                })}
                <div className="text-center">
                    -----------
                </div>
            </div>
        </div>
    </div>
  </div>;
};

export default Menu;
