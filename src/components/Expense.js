// src/components/Expense.js
import React from "react";

function Expense({ expense }) {
  return (
    <li>
      {expense.name}: ${expense.amount}
    </li>
  );
}

export default Expense;
