import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const CartItems = [{ id: "c1", name: "Sushi", amout: 2, price: 12.99 }];

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <ul className={classes["cart-items"]}>
        {CartItems.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
      <div>
        <span>총 가격은</span>
        <span> ${} 입니다.</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          닫기
        </button>
        <button className={classes.button}>주문</button>
      </div>
    </Modal>
  );
};
export default Cart;
