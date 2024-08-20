import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [booksRead, setBooksRead] = useState(15);
  const [favoriteGenre, setFavoriteGenre] = useState('Fantasy');
  const [featuredBook, setFeaturedBook] = useState({
    _id: "655e420da2908939c6086144",
    bookTitle: "Life of Pi",
    authorName: "Yann Martel",
    imageURL: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631251689i/4214.jpg",
    category: "Fiction",
    bookDescription: "Life of Pi is a fantasy adventure novel by Yann Martel published in 2001. The protagonist, Piscine Molitor \"Pi\" Patel, a Tamil boy from Pondicherry, explores issues of spirituality and practicality from an early age. He survives 227 days after a shipwreck while stranded on a boat in the Pacific Ocean with a Bengal tiger named Richard Parker.",
    bookPDFURL: "https://www.goodreads.com/book/show/4214.Life_of_Pi",
    price: "$10"
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/all-books");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      <div className="bg-gradient-to-r from-yellow-300 to-pink-500 rounded-3xl p-8 mb-5">
        <h1 className="text-3xl font-bold mb-8 text-white">Welcome to Your Book Dashboard</h1>

        <hr className="my-8" />

        <div className="grid grid-cols-2 gap-x-20">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <div className="p-4 bg-green-100 rounded-xl">
                  <div className="font-bold text-xl text-gray-800 leading-none text-white">
                    Hello,
                    <br />
                    Book Lover
                  </div>
                  <div className="mt-5">
                    <Link to="/Shop">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition"
                        style={{
                          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
                        }}
                      >
                        Explore More Books
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Reading Habits</h2>
            <div className="p-4 bg-purple-100 rounded-xl text-gray-800">
              <div className="font-bold text-xl leading-none">
                Books Read This Month
              </div>
              <div className="mt-2">{booksRead}</div>
            </div>
            <div className="p-4 bg-purple-100 rounded-xl text-gray-800 mt-4">
              <div className="font-bold text-xl leading-none">
                Favorite Genre
              </div>
              <div className="mt-2">{favoriteGenre}</div>
            </div>
          </div>
        </div>

        <hr className="my-8" />

        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Featured Book</h2>
          <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2" style={{ position: 'relative' }}>
            <div className="flex justify-between">
              <div className="text-gray-400 text-xs">{featuredBook.authorName}</div>
              <div className="text-gray-400 text-xs">{featuredBook.price}</div>
            </div>
            <a href={featuredBook.bookPDFURL} target="_blank" rel="noopener noreferrer" className="font-bold hover:text-yellow-800 hover:underline">
              {featuredBook.bookTitle}
            </a>
            <div className="text-sm text-gray-600">
              {featuredBook.bookDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
