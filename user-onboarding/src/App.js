import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import UserCard from "./UserCard";

function App() {

  const [userstate, setUserstate] = useState([
    {
      name: "Sathya",
      email: "sathyag@gmail.com",
      password: "password",
      role: "Developer"
    }
  ]);

  const addNewUser = (formData) => {
    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role
    }
    setUserstate([...userstate, newUser]);
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1> User Onboarding Form </h1>
      <Form formAttr = {addNewUser} />
      <UserCard userAttr = {userstate}/>
    </div>
  );
}

export default App;
