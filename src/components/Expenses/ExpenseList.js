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
    console.log(pickedYear);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === pickedYear
  );

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          onSavePickedYear={onChangePickedYear}
          selectedYear={pickedYear}
        />
        {filteredExpenses.length > 0 ? (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        ) : (
          <h4 style={{ color: "white" }}>...no expenses found</h4>
        )}
      </Card>
    </>
  );
};

export default ExpenseList;
