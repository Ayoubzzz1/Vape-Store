import { createUserWithEmailAndPassword, sendEmailVerification, getAuth } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db, collection, addDoc } from '../firebase'; // Import auth, db, collection, and addDoc

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const checkEmailVerification = async () => {
      console.log("Checking email verification...");
      const user = getAuth().currentUser;
      if (user && !user.emailVerified) {
        console.log("User found and email is not verified.");
        const intervalId = setInterval(async () => {
          await user.reload(); // Reload user data to get the updated email verification status
          console.log("Checking email verification status...");
          if (user.emailVerified) {
            console.log("Email verified. Navigating to '/'...");
            clearInterval(intervalId); // Stop the interval once email is verified
            navigate('/');
          }
        }, 1000); // Check every second
      }
    };
  
    checkEmailVerification();
  }, [navigate]);
  
  

  const signUp = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user);

      // Create Firestore document
      await addDoc(collection(db, "users"), {
        id: user.uid,
        name: name,
        email: email,
        password: password,
        phone: phone
      });

      console.log("Email verification sent");

    } catch (error) {
      console.log(error);
    }

    setLoading(false); // Stop loading
  };

  return (
    <div className="sign-in-container bg-gray-100 h-screen flex justify-center items-center">
      <form onSubmit={signUp} className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Create Account</h1>
        <input
          type="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full px-4 py-2 rounded-md bg-gray-200 mb-4 focus:outline-none focus:bg-white"
        />
        <input
          type="phone"
          placeholder="Enter your phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="block w-full px-4 py-2 rounded-md bg-gray-200 mb-4 focus:outline-none focus:bg-white"
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full px-4 py-2 rounded-md bg-gray-200 mb-4 focus:outline-none focus:bg-white"
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full px-4 py-2 rounded-md bg-gray-200 mb-4 focus:outline-none focus:bg-white"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          disabled={loading} // Disable button when loading
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>

        {loading && <div className="mt-4 text-center">Loading...</div>} {/* Display loading indicator when loading */}
      </form>
    </div>
  );
};

export default Login;
