// src/components/Expense.js
import React from "react";
import styles from "./Expense.module.css";

function Expense({ expense }) {
  return (
    <li className={styles.expenseItem}>
      {expense.name}: ${expense.amount}
    </li>
  );
}

export default Expense;
