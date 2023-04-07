import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./store";
import "./Counter.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const incrementHandle = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandle = () => {
    dispatch(counterActions.decrement());
  };

  const increseHnadler = () => {
    dispatch(counterActions.increase(10));
  };

  const toggleHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <div className="container">
      {show && <p>{counter}</p>}
      <button onClick={incrementHandle}>Increment</button>
      <button onClick={decrementHandle}>Decrement</button>
      <button onClick={increseHnadler}>Increase by 10</button>
      <button onClick={toggleHandler}>Toggle</button>
    </div>
  );
};

export default Counter;
