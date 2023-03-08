import React from "react";
import mealsImg from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const componentName = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="food pic" />
      </div>
    </>
  );
};

export default componentName;
