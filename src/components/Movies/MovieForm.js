import React, { useRef } from "react";
import Input from "../../shared/Input";
import classes from "./MovieForm.module.css";

export default function MovieForm(props) {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const eneterdAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      eneterdAmountNumber < 1 ||
      eneterdAmountNumber > 99
    )
      return;
    const data = props.onRecieveData;
    props.onAddToCart(eneterdAmountNumber, data);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "99",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
}
