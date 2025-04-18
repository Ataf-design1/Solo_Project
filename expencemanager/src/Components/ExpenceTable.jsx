import React from "react";
import { useSelector } from "react-redux";
import { Trash2 } from "lucide-react";

const ExpenseTable = (props) => {
  const expenses = useSelector((state) => state.expenses);

  return (
    <div className="mt-20 shadow-md overflow-x-auto">
      <table className="min-w-full table-fixed border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="w-1/4 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Description
            </th>
            <th className="w-1/4 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Category
            </th>
            <th className="w-1/4 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Amount
            </th>
            {props.delete && (
              <th className="w-1/4 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Action
              </th>
            )}
          </tr>
        </thead>
        <tbody className="uppercase">
          {expenses.map((expense) => (
            <tr key={expense.id} className="hover:bg-gray-50">
              <td className="w-1/4 px-4 py-4 text-sm text-gray-900 break-words">
                {expense.des}
              </td>
              <td className="w-1/4 px-4 py-4 text-sm text-gray-900 break-words">
                <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  {expense.category}
                </span>
              </td>
              <td className="w-1/4 px-4 py-4 text-sm text-gray-900 break-words">
                ${expense.amount}
              </td>
              {props.delete && (
                <td className="w-1/4 px-4 py-4 text-sm text-gray-900 break-words">
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 size={20} strokeWidth={2} />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
