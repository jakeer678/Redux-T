import React, { Fragment } from "react";
import Counter from "./Counter";
import Auth from "./components/Auth";
import Navabar from "./components/Navabar";
import User from "./components/User";
import { useSelector } from "react-redux";

const App = () => {
  const isAuth = useSelector((state) => state.auth.isAutenticated);

  return (
    <Fragment>
      <Navabar />
      {!isAuth && <Auth />}
      {isAuth && <User />}
      <Counter />
    </Fragment>
  );
};

export default App;
