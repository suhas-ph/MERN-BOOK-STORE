// ManageBooks.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/all-books`)
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/book/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        // Handle state or UI updates if needed
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold text-blue-700">Manage Your Books Inventory!</h2>

      <div className="lg:w-[1180px] overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b bg-blue-700 text-white">No.</th>
              <th className="py-2 px-4 border-b bg-blue-700 text-white">Book Name</th>
              <th className="py-2 px-4 border-b bg-blue-700 text-white">Author Name</th>
              <th className="py-2 px-4 border-b bg-blue-700 text-white">Category</th>
              <th className="py-2 px-4 border-b bg-blue-700 text-white">Price</th>
              <th className="py-2 px-4 border-b bg-blue-700 text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allBooks.map((book, index) => (
              <tr key={book._id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'} dark:border-gray-700 dark:bg-gray-800`}>
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{book.bookTitle}</td>
                <td className="py-2 px-4 border-b text-gray-500 dark:text-gray-400">{book.authorName}</td>
                <td className="py-2 px-4 border-b text-gray-500 dark:text-gray-400">{book.category}</td>
                <td className="py-2 px-4 border-b text-gray-500 dark:text-gray-400">{book.price}</td>
                <td className="py-2 px-4 border-b">
                  <div className="flex space-x-2 justify-center">
                    <Link
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                      to={`/admin/dashboard/edit-books/${book._id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600"
                      onClick={() => handleDelete(book._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooks;

