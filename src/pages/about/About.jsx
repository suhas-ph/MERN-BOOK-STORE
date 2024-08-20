import React from 'react';
import { Avatar } from 'flowbite-react';
import SuhasAvatar from 'C:/Users/phsuh/OneDrive/Desktop/mern-book-store-inventory-client-main/src/assets/IMG_2487-fotor-20231122193637.png';

const creators = [
  {
    name: 'Suhas',
    role: 'Developer',
    description: 'A student with creative ambitions, eager to learn and explore opportunities in the world of data science and AI/ML. Also an avid football player.',
    university: 'PES University',
    avatar: SuhasAvatar,
  }
];

const About = () => {
  return (
    <div className="mt-20 bg-gradient-to-b from-blue-200 to-blue-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-indigo-600 mb-8">Meet the Creators</h1>
        {creators.map((creator, index) => (
          <div key={index} className="py-12 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-6">
                <div className="max-w-lg mx-auto p-6">
                  <p className="text-base font-semibold leading-7 text-indigo-600">
                    About {creator.name} ({creator.university})
                  </p>
                  <Avatar alt={`avatar of ${creator.name}`} img={creator.avatar} rounded className="w-20 mb-4" />
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{creator.role}</h2>
                  <p className="mt-6 text-xl leading-8 text-gray-700">{creator.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
