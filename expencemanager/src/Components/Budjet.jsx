import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewBudget } from "../redux/action";

const Budjet = () => {
  const [budget, setBudget] = useState("");
  const dispatch = useDispatch();
  const newbudget = useSelector((state) => state.budget);
  const expenses = useSelector((state) => state.expenses);
  const totalExpense = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );

  const remaining = newbudget - totalExpense;

  const handleSubmitBudget = () => {
    dispatch(setNewBudget(budget));
    setBudget(""); // reset the input
  };

  return (
    <div>
      <div className="shadow-lg p-8 mt-4">
        {/* Budget Input and Button */}
        <div className="w-full flex gap-4">
          <input
            onChange={(e) => setBudget(e.target.value)}
            value={budget}
            placeholder="Enter Budget amount"
            className="flex-grow py-2 px-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
          />
          <button
            onClick={handleSubmitBudget}
            className="w-32 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
          >
            Set Budget
          </button>
        </div>

        {/* Budget Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          <div className="shadow-sm bg-blue-100 px-4 py-2 rounded-md">
            <p className="text-blue-600">Total Budget</p>
            <h1 className="text-3xl font-bold mt-2">${newbudget}</h1>
          </div>
          <div className="shadow-sm bg-pink-100 px-4 py-2 rounded-md">
            <p>Total Expenses</p>
            <h1 className="text-3xl font-bold mt-2">${totalExpense}</h1>
          </div>
          <div className="shadow-sm bg-orange-100 px-4 py-2 rounded-md">
            <p>Remaining</p>
            <h1 className="text-3xl font-bold mt-2">${remaining}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budjet;
