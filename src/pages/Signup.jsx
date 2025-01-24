import { useState } from 'react';
import { GoEye, GoEyeClosed } from "react-icons/go";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    // Add signup logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="w-full max-w-sm bg-white p-6 rounded-md shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form onSubmit={handleSignup}>
          {/* Email input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2  border border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-gray-600"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-gray-600 pr-10"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="absolute top-1/2 transform -translate-y-1/ right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <GoEye className="h-5 w-5" /> : <GoEyeClosed className="h-5 w-5" />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 py-2 rounded-md hover:bg-gray-700 transition text-white"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;