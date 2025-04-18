import React from "react";
import { useNavigate } from "react-router-dom";
import { PiggyBank, Wallet, BarChart, DollarSign } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight">
            Take Control of Your <span className="text-blue-500">Expenses</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your income, expenses, and budgets with ease. Track every
            rupee and build a better financial future.
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Get Started
          </button>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
            alt="Expense Manager"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <PiggyBank className="w-10 h-10 mx-auto text-blue-600" />
            <h3 className="text-lg font-semibold mt-4">Set Budgets</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Plan and monitor your spending limits efficiently.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <Wallet className="w-10 h-10 mx-auto text-green-600" />
            <h3 className="text-lg font-semibold mt-4">Track Expenses</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Log every transaction and know where your money goes.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <BarChart className="w-10 h-10 mx-auto text-yellow-600" />
            <h3 className="text-lg font-semibold mt-4">Visual Reports</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Get insights with beautiful charts and summaries.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <DollarSign className="w-10 h-10 mx-auto text-red-600" />
            <h3 className="text-lg font-semibold mt-4">Stay on Budget</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Avoid overspending and save smarter.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
