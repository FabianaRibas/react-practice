import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addNewExpense, setAddNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setAddNewExpense(false);
  };

  const handleAddNewExpense = () => {
    setAddNewExpense(true);
  };

  const handleCloseForm = () => {
    setAddNewExpense(false);
  };
  return (
    <div className="new-expense">
      {addNewExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelExtenseData={handleCloseForm}
        />
      )}
      {!addNewExpense && (
        <button onClick={handleAddNewExpense}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
