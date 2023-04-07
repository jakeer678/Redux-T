import React from "react";
import "./Navbar.css";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
const Navabar = () => {
  const isAuth = useSelector((state) => state.auth.isAutenticated);

  const dispatch = useDispatch();
  const logoutHnadler = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
  };

  return (
    <div>
      {isAuth && (
        <ul className="header">
          <li>Home</li>
          <form onSubmit={logoutHnadler}>
            <li>
              <button>Logout</button>
            </li>
          </form>
        </ul>
      )}
    </div>
  );
};

export default Navabar;
