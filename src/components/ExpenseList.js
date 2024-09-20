// src/components/ExpenseList.js
import React from "react";
import Expense from "./Expense";
import styles from "./ExpenseList.module.css";

function ExpenseList({ expenses }) {
  return (
    <div>
      <h2 className={styles.expenseTitle}>Expenses</h2>
      <ul className={styles.expenseList}>
        {expenses.map((expense, index) => (
          <Expense key={index} expense={expense} />
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
