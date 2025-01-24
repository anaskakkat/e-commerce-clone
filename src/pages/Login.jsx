import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();
    // try {
    //   await signInWithEmailAndPassword(auth, email, password);
    //   alert("Signin successful!");
    // } catch (err) {
    //   setError(err.message);
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
      <div className="w-full max-w-sm bg-white p-6 rounded-md shadow-lg border border-black">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        <form onSubmit={handleSignin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-white border border-black rounded-md focus:outline-none focus:ring focus:ring-black"
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
              className="w-full p-2 bg-white border border-black rounded-md focus:outline-none focus:ring focus:ring-black"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* {error && <p className="text-red-500 text-sm mb-4">{error}</p>} */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
