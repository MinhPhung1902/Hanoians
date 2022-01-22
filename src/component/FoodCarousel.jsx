import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const FoodCarousel = () => {
  return <div className='pt-[110px]'>
   <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/asian-duck-salad-picture-id539216217?b=1&k=20&m=539216217&s=170667a&w=0&h=pgGQBl51lkh55GS6tOGhZEVTuS21vvxWukz80DfiSxQ="
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1583077874340-79db6564672e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHZpZXRuYW1lc2UlMjBmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1594020293008-5f99f60bd4d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHZpZXRuYW1lc2UlMjBmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
  </div>
};

export default FoodCarousel;
