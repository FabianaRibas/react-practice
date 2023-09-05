import React, { useState } from 'react';

const initialUserInput = {
  'current-saving': 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  duration: 10,
};

function UserInput(props) {
  const [userInput, setUserInput] = useState(initialUserInput);

  props.onCalculateHandler(userInput);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('SUBMIT');
    //...
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={userInput['current-saving']}
            onChange={(event) =>
              inputChangeHandler(event.target.id, event.target.value)
            }
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value={userInput['yearly-contribution']}
            onChange={(event) =>
              inputChangeHandler(event.target.id, event.target.value)
            }
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value={userInput['expected-return']}
            onChange={(event) =>
              inputChangeHandler(event.target.id, event.target.value)
            }
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            value={userInput.duration}
            onChange={(event) =>
              inputChangeHandler(event.target.id, event.target.value)
            }
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
export default UserInput;
