import React from 'react';
import './Hero.css';

export const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-content w-4/5'>
        <h1>Lorem Ipsum Dolor</h1>
        <h2>Sit Amet Consectetur</h2>
        <p className='md:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='hero-buttons'>
          <button className='btn btn-white'>Learn More</button>
          <button className='btn btn-color'>Sign Up</button>
        </div>
      </div>
    </div>
  );
}