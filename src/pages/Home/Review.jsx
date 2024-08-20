import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa6';
import { Avatar } from 'flowbite-react';
import profile from '../../assets/bbg.pic.png';
import profile2 from '../../assets/IMG_0035-fotor-202311061113.png';
import profile3 from '../../assets/IMG_1060-fotor-202311061222.png';
import profile4 from '../../assets/IMG_1230-fotor-202311061152.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Review = () => {
  const reviews = [
    {
      stars: 4,
      content:
        'Great book selection and easy navigation. Personalized recommendations are helpful. Efficient delivery makes it a top choice for book enthusiasts.',
      avatar: profile,
      name: 'Bhargav Bg',
      role: 'CEO, Street 21',
    },
    {
      stars: 5,
      content:
        'Excellent service! The variety of books is impressive. The ordering process is seamless, and the reviews are useful. Highly recommended for book lovers.',
      avatar: profile2,
      name: 'Shrey P',
      role: 'Doctor, MS Ramaiah',
    },
    {
      stars: 4,
      content:
        'I love the user-friendly design and the quick delivery. The recommendations are spot-on. This is my go-to destination for buying books.',
      avatar: profile3,
      name: 'Sushant',
      role: 'Doctor, MVJ',
    },
    {
      stars: 5,
      content:
        'A fantastic book store! The collection is vast, and the user interface is delightful. The reviews and ratings helped me discover new reads.',
      avatar: profile4,
      name: 'Rahul M',
      role: 'Student',
    },
  ];

  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug text-indigo-600'>
        Customer Reviews
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className='mySwiper'
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className='shadow-2xl bg-gradient-to-r from-yellow-300 to-yellow-500 py-8 px-4 md:m-5 rounded-lg border'
            >
              <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                  {[...Array(review.stars)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className='mt-7'>
                  <p className='mb-5'>{review.content}</p>
                  <Avatar alt={`avatar of ${review.name}`} img={review.avatar} rounded className='w-10 mb-4' />
                  <h5 className='text-lg font-medium'>{review.name}</h5>
                  <p className='text-base'>{review.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
