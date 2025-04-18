import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful");
    navigate("/login");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <input
        className="w-full p-2 mb-4 border rounded"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full p-2 mb-4 border rounded"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSignup}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
