// src/App.js
import React, { useState } from "react";
import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import styles from "./App.module.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(1000); // Default budget value

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1>Simple Budget App</h1>
        <Budget budget={budget} expenses={expenses} />
        <ExpenseList expenses={expenses} />
        <AddExpenseForm addExpense={addExpense} />
      </div>
    </div>
  );
}

export default App;
