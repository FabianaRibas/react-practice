import React, { useState } from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import "../Expenses/ExpenseList.css";
import ExpenseFilter from "../Expenses/ExpenseFilter";

const ExpenseList = (props) => {
  const [pickedYear, setPickedYear] = useState("2020");

  const onChangePickedYear = (event) => {
    const year = event.target.value;
    setPickedYear(year);
  };

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          onSavePickedYear={onChangePickedYear}
          selectedYear={pickedYear}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </>
  );
};

export default ExpenseList;
