import React, { useRef } from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const InputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +InputRef.current.value;

    props.onAddToCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={InputRef}
        label="수량"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>추가</button>
    </form>
  );
};

export default MealItemForm;
