import React, { useState, useEffect } from "react";
import AddNewUser from "./components/AddNewUser";
import AllUsers from "./components/AllUsers";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <AllUsers />
      <Login />
      <SignUp />
      <AddNewUser />
    </>
  );
}

export default App;
