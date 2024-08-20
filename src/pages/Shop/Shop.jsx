import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import { AuthContext } from '../../contexts/AuthProvider';

export default function Shop() {
  const { loading } = useContext(AuthContext);
  const [books, setBooks] = useState([]);

  // Fetching data
  useEffect(() => {
    fetch('http://localhost:3000/all-books')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [loading]);

  return (
    <div className="my-28 px-4 lg:px-24 bg-blue-100">
      <h2 className="text-4xl font-bold text-center mb-16 text-indigo-600">
        📚 Discover New Reads 🌟
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {books.map((book) => (
          <Card key={book._id} className="overflow-hidden shadow-lg rounded-md">
            <img src={book.imageURL} alt={book.bookTitle} className="h-96 object-cover" />
            <div className="p-4">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                {book.bookTitle}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
                {book.bookDescription}
              </p>
              
              <div className="flex justify-between items-center">
                <p className="text-gray-500 dark:text-gray-400">Author: {book.authorName}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
