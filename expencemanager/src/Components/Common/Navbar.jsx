import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Home,
  LayoutDashboard,
  ChartPie,
  History,
  LogIn,
  LogOut,
  UserPlus,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { isAuth, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-700 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Left side links */}
        <div className="flex space-x-6 items-center text-lg">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300"
          >
            <Home size={20} />
            Home
          </Link>

          {isAuth && (
            <>
              <Link
                to="/dashboard"
                className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300"
              >
                <LayoutDashboard size={20} />
                Dashboard
              </Link>
              <Link
                to="/analytics"
                className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300"
              >
                <ChartPie size={20} />
                Analytics
              </Link>
              <Link
                to="/history"
                className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300"
              >
                <History size={20} />
                History
              </Link>
            </>
          )}
        </div>

        {/* Right side: Auth */}
        <div className="flex items-center space-x-4">
          {isAuth ? (
            <>
              <p className="text-white font-medium capitalize">
                {user}
              </p>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 bg-white text-blue-700 px-3 py-1 rounded hover:bg-gray-200 transition duration-300"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center gap-1 bg-white text-blue-700 px-3 py-1 rounded hover:bg-gray-200 transition duration-300"
              >
                <LogIn size={18} />
                Login
              </Link>
              <Link
                to="/signup"
                className="flex items-center gap-1 bg-white text-blue-700 px-3 py-1 rounded hover:bg-gray-200 transition duration-300"
              >
                <UserPlus size={18} />
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
