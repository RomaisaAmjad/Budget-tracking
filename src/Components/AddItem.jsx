import React, { useState } from "react";
import { FaSearch, FaTrash } from "react-icons/fa";
import RecordItem from "./RecordItem.jsx";

export default function Sort({ heading }) {
  const [Expenses, setExpenses] = useState([]);
  const [show, setShow] = useState(false);

  const handleExpense = (e) => {
    if (!e.name || !e.price || !e.date) {
      alert("Incomplete Data.");
      return;
    }
    setExpenses((prev) => [...prev, e]);
    setShow(false);
  };

  const Delete = (Expense) => {
    setExpenses(Expenses.filter((expense) => expense.id !== Expense.id));
  };

  const toggleShow = () => setShow(!show);

  return (
    <div>
      
      <div className="flex flex-col flex-1 lg:flex-row lg:justify-between items-start gap-6 p-5 bg-white">
        <div>
          <h1 className="font-bold text-xl">{heading}</h1>
        </div>

        <div className="text-sm flex flex-row sm:flex-row flex-wrap items-start sm:items-center gap-3">
          <div className="flex items-center gap-1">
            <label htmlFor="number">Sort By</label>
            <select
              name="number"
              id="number"
              className="border-2 border-gray-300 rounded-sm p-1"
            >
              <option value="1">All</option>
              <option value="2">Amount</option>
              <option value="3">Date</option>
              <option value="4">Expenditure</option>
            </select>
          </div>

          <div className="flex items-center gap-1">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              className="border-2 border-gray-300 rounded-sm p-1"
            />
          </div>

          <div className="relative flex items-center">
            <FaSearch className="text-gray-500 absolute left-2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search"
              className="border-2 border-gray-300 rounded-sm p-1 pl-8"
            />
          </div>

          <button
            onClick={toggleShow}
            className="bg-purple-900 text-white rounded-sm p-2 hover:cursor-pointer hover:bg-purple-700" style={{ boxShadow: "inset 0 4px 4px rgba(0, 0, 0, 0.3)" }}
          >
            Add New
          </button>
        </div>
      </div>

      
      {show && <RecordItem onAddExpense={handleExpense} />}

      
      <table className="min-w-full border-collapse border border-gray-300 mt-4 text-sm">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-center">Name</th>
            <th className="border border-gray-300 p-2 text-center">Price</th>
            <th className="border border-gray-300 p-2 text-center">Date</th>
            <th className="border border-gray-300 p-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Expenses.map((expense, index) => (
            <tr key={expense.id || index}>
              <td className="border border-gray-300 p-2 text-center">
                {expense.name}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {expense.price}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {expense.date}
              </td>
              <td className=" flex flex-row justify-center items-center border border-gray-300 p-2 text-center">
                <button
                  className="flex flex-row items-center justify-center gap-1 bg-red-600 text-white rounded-md font-bold px-4 py-2 hover:bg-red-700 hover: cursor-pointer"
                  onClick={() => Delete(expense)}
                >
                  Delete <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
