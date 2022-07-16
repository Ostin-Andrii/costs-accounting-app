import "./CostForm.css";
import React, { useState } from "react";

const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   name: "",
  //   amount: "",
  //   date: "",
  // });

  const nameChangeHandler = (e) => {
    setInputName(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   name: e.target.value,
    // });

    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     name: e.target.value
    //   }
    // })


  };

  const amountChangeHandler = (e) => {
    setInputAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: e.target.value,
    // });
  };

  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: e.target.value,
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate)
    };

    props.onSaveCostData(costData);
    setInputName('');
    setInputAmount('');
    setInputDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Назва</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </div>

        <div className="new-cost__control">
          <label>Сума</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-cost__actions">
          <button type="submit">Додати витрати</button>
          <button type="button" onClick={props.onCancel}>
            Відміна
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
