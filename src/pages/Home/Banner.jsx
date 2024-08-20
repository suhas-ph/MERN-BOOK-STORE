import React from 'react';
import BannerCard from '../shared/BannerCard';

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-gradient-to-r from-teal-200 via-teal-300 to-teal-400'>
      <div className='flex flex-col md:flex-row justify-between items-center py-16 md:py-24'>
        <div className='md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left'>
          <h2 className='text-4xl font-bold leading-snug text-white'>
            Your One-Stop for All Books
            <span className='text-blue-600'> Explore the World of Reading</span>
          </h2>
          <p className='md:w-3/4 mx-auto md:mx-0 text-gray-100'>
            Discover a vast collection of books and connect with fellow enthusiasts. Your journey into the world of reading starts here.
          </p>
        </div>
        <div className='md:w-1/2'>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
