import { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    // try {
    //   await createUserWithEmailAndPassword(auth, email, password);
    //   alert("Signup successful!");
    // } catch (err) {
    //   setError(err.message);
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-sm bg-gray-900 p-6 rounded-md shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* {error && <p className="text-red-500 text-sm mb-4">{error}</p>} */}
          <button
            type="submit"
            className="w-full bg-gray-800 py-2 rounded-md hover:bg-gray-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
