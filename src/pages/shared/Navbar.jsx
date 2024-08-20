import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaXmark } from 'react-icons/fa6';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
  const [isMenuOpen, SetisMenuOpen] = useState(false);
  const [isSticky, SetIsSticky] = useState(false);
  const {} = useContext(AuthContext);

  // Toggle menu
  const toggleMenu = () => {
    SetisMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        SetIsSticky(true);
      } else {
        SetIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Nav items
  const NavItems = [
    { link: 'Home', path: '/' },
    { link: 'About', path: '/about' },
    { link: 'Shop', path: '/shop' },
    { link: 'Dashboard', path: '/admin/dashboard' },
    { link: 'Blog', path: '/blog' },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 right-0 left-0 transition-all ease-in duration-300">
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? 'sticky top-0 right-0 left-0 bg-gradient-to-r from-rose-400 to-rose-600' : ''}`}>
        <div className="flex justify-between items-center text-base gap-8">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
            <FaBlog className="inline-block" />
            Books
          </Link>
          {/* Nav items for large screens */}
          <ul className="md:flex space-x-14 hidden">
            {NavItems.map(({ link, path }) => (
              <Link key={path} to={path} className="block text-base text-white uppercase cursor-pointer hover:text-rose-200">
                {link}
              </Link>
            ))}
          </ul>
          {/* Button for large devices */}
          <div className="space-x-14 hidden lg:flex items-center">
            <button>
              <FaBarsStaggered className="w-6 hover:text-white" />
            </button>
          </div>
          {/* Button for small devices */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <FaXmark className="h-5 w-5 text-white" /> : <FaBarsStaggered className="h-5 w-5 text-white" />}
            </button>
          </div>
        </div>
        {/* Nav items for small devices */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-gradient-to-r from-rose-400 to-rose-600 ${isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'}`}>
          {NavItems.map(({ link, path }) => (
            <Link key={path} to={path} className="block text-base text-white uppercase cursor-pointer">
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
