// src/App.js
import React, { useState } from "react";
import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(1000); // Default budget value

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="App">
      <h1>Simple Budget App</h1>
      <Budget budget={budget} expenses={expenses} />
      <ExpenseList expenses={expenses} />
      <AddExpenseForm addExpense={addExpense} />
    </div>
  );
}

export default App;
