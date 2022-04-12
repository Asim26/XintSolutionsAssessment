import React, { useState, useEffect } from "react";

function AllUsers() {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((responsejson) => {
        setAllUsers(responsejson.data);
      });
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>AllUsers</h1>

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Avatar</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((item) => {
            return (
              <>
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <img
                    src={item.avatar}
                    style={{ height: "80px", height: "80px" }}
                  />
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AllUsers;
