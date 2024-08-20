import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
    const data = useLoaderData();
    const { authorName, imageURL, bookDescription, price, category, bookTitle } = data;

    return (
        <div className='mt-20 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 text-white min-h-screen'>
            <div className="z-50 flex justify-between w-full py-12 px-4 bg-transparent">
                <div className="flex items-center mx-auto">
                    <p className="flex items-center text-4xl font-semibold text-white">
                        {bookTitle}
                    </p>
                </div>
            </div>

            <div className="mt-8 mx-auto max-w-2xl bg-white rounded-lg shadow-lg p-8 transition duration-300 ease-in-out hover:bg-gray-200 text-gray-800">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <p className="text-xl font-semibold text-gray-800">Author: {authorName}</p>
                        <p className="text-gray-600">Category: {category}</p>
                    </div>
                    <p className="text-2xl font-semibold text-gray-800">${price}</p>
                </div>

                <div className="flex items-center mb-4">
                    <img src={imageURL} alt="Book Cover" className="w-32 h-48 object-cover rounded-lg" />
                    <div className="ml-4">
                        <p className="text-lg font-semibold text-gray-800">Book Description:</p>
                        <p className="text-gray-600">{bookDescription}</p>
                    </div>
                </div>

                {/* Additional book details can be added here */}
            </div>
        </div>
    );
}

export default SingleBook;
