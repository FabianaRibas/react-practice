import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__constrol">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__constrol">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__constrol">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-02-01" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
