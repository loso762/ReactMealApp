import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderButton.module.css";
import { CartContext } from "../../store/cart-context";

const HeaderButton = (props) => {
  const Ctx = useContext(CartContext);

  const numberOfCartItems = Ctx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>장바구니</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButton;
