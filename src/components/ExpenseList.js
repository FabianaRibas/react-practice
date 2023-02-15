import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default ExpenseList;
