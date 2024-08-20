// Login.jsx
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import googleLogo from '../assets/google-logo.svg';
import fbLogo from '../assets/facebook-log.svg';

export default function Login() {
  const [ErrorMessage, setErrorMessage] = useState('');
  const { signUpWithGmail, login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  // login with google
  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  // login with email password
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        alert('Login successful!');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  return (
    <div className="min-h-screen bg-blue-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-3xl font-semibold text-center text-blue-600 mb-4">Login to Dashboard</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative mb-4">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="peer h-12 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Email address"
                    required
                  />
                </div>
                <div className="relative mb-4">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="peer h-12 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-red-500">{ErrorMessage ? 'Email or Username is not valid!' : ''}</p>
                  <p className="text-sm">
                    If you haven't an account. Please create here{' '}
                    <Link to="/create-user" className="underline text-blue-600">
                      Sign Up
                    </Link>
                  </p>
                </div>
                <div className="relative">
                  <button type="submit" className="bg-blue-500 text-white rounded-full px-8 py-2 hover:bg-blue-600 focus:outline-none">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* social login */}
          <div className="mt-6">
            <hr />
            <div className="flex w-full items-center justify-center flex-col mt-5 gap-3">
              <button onClick={handleRegister} className="flex items-center bg-white text-gray-700 rounded-full p-2 hover:bg-gray-100">
                <img src={googleLogo} alt="" className="w-8 h-8 mr-2" />
                Log in with Google
              </button>
              <button className="flex items-center bg-blue-700 text-white rounded-full p-2 hover:bg-blue-800">
                <img src={fbLogo} alt="" className="w-6 h-6 mr-2" />
                Log in with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
