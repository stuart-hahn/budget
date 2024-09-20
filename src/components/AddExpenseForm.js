// src/components/AddExpenseForm.js
import React, { useState } from "react";
import styles from "./AddExpenseForm.module.css";

function AddExpenseForm({ addExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ name, amount: parseFloat(amount) });
    setName("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        type="text"
        placeholder="Expense name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.inputField}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className={styles.inputField}
        required
      />
      <button type="submit" className={styles.submitButton}>
        Add Expense
      </button>
    </form>
  );
}

export default AddExpenseForm;
