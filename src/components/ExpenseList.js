// src/components/ExpenseList.js
import React from "react";
import Expense from "./Expense";

function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <Expense key={index} expense={expense} />
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
