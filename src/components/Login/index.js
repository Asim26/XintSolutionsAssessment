import React, { useState, useEffect } from "react";
import "./styles.css";

function Login() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    console.log("name....", name);
    console.log("email....", email);
  }, [name, email]);

  const submitHandler = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",

      body: JSON.stringify({
        email: email,
        password: name,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("res", responseJson);
      });
  };
  return (
    <>
      <h1>Login </h1>
      <form onSubmit={(e) => submitHandler()}>
        <input
          type="text"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your email"
        />
        <br />
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter your name"
        />
        <br />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            submitHandler();
          }}
        >
          Register
        </button>
      </form>
    </>
  );
}

export default Login;
