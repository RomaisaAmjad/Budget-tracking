import React, { useState } from "react";

export default function RecordItem({ onAddExpense }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const handleAddClick = () => {
    const expense = {
      id: Date.now(),
      name,
      price: parseInt(price),
      date,
    };
    onAddExpense(expense);
    setName("");
    setPrice("");
    setDate("");
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm flex items-center justify-center z-20">
      {/* Modal Box */}
      <div className="bg-white bg-opacity-90 rounded-xl p-6 w-11/12 md:w-3/4 lg:w-2/3 shadow-2xl border-purple-900 border-3">
        <h2 className="text-center font-bold text-xl mb-4">Add an Expense</h2>

        {/* Inputs Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-4">
          {/* Name Input */}
          <div className="flex flex-col flex-1">
            <label htmlFor="expense" className="font-semibold mb-1">Name</label>
            <input
              className="bg-amber-50 p-2 rounded-md focus:outline-none"
              type="text"
              placeholder="Enter a Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Price Input */}
          <div className="flex flex-col flex-1">
            <label htmlFor="price" className="font-semibold mb-1">Price</label>
            <input
              className="bg-amber-50 p-2 rounded-md focus:outline-none"
              type="number"
              placeholder="Enter a Price..."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          {/* Date Input */}
          <div className="flex flex-col flex-1">
            <label htmlFor="date" className="font-semibold mb-1">Date</label>
            <input
              className="bg-amber-50 p-2 rounded-md focus:outline-none"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button
            className="bg-green-600 hover:bg-green-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded-lg transition duration-300" style={{ boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.3)" }}
            onClick={handleAddClick}
          >
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
}
