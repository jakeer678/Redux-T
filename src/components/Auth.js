import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/index";

const Auth = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <div className="auth">
      <form onSubmit={submitHandler}>
        <div>
          <label>username</label>
          <input type="username" placeholder="username" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Auth;

