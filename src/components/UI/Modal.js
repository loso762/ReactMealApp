import React from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";

const Bacdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseCart}></div>;
};

const ModalOvelay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Bacdrop onCloseCart={props.onCloseCart} />,
        document.querySelector("#overlays")
      )}
      {ReactDom.createPortal(
        <ModalOvelay>{props.children}</ModalOvelay>,
        document.querySelector("#overlays")
      )}
    </>
  );
};

export default Modal;
