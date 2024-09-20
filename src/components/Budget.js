// src/components/Budget.js
import React from "react";
import styles from "./Budget.module.css";

function Budget({ budget, expenses }) {
  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );
  const remainingBudget = budget - totalExpenses;

  return (
    <div className={styles.budgetContainer}>
      <h2 className={styles.budget}>Budget: ${budget}</h2>
      <h3 className={styles.remaining}>Remaining: ${remainingBudget}</h3>
    </div>
  );
}

export default Budget;
