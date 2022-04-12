import React, { useState, useEffect } from "react";

export default function AddNewUser() {
  const [name, setName] = useState(null);
  const [job, setJob] = useState(null);

  const submitHandler = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",

      body: JSON.stringify({
        name: name,
        job: job,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("res", responseJson);
      });
  };
  return (
    <>
      <h1>Add New User </h1>
      <form onSubmit={(e) => submitHandler()}>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter your name"
        />
        <br />
        <input
          type="text"
          name="job"
          onChange={(e) => {
            setJob(e.target.value);
          }}
          placeholder="Enter your job"
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
