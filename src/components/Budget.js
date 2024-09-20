// src/components/Budget.js
import React from "react";

function Budget({ budget, expenses }) {
  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );
  const remainingBudget = budget - totalExpenses;

  return (
    <div>
      <h2>Budget: ${budget}</h2>
      <h3>Remaining: ${remainingBudget}</h3>
    </div>
  );
}

export default Budget;
