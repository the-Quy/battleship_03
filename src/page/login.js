import "../stylesheet/login.scss";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import axios from "axios";



export default function Login() {

  const [Auth, setAuth] = useContext( AuthContext );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errStyle, setErr] = useState({ color: "black" });

  const loginClick = () => {
    axios
      .post("http://104.248.104.227/login", { username, password })
      .then((response) => {
        setErr({ color: "limegreen" });
        let token = response.data.token;
        setAuth({ isAuth: true, token});
        console.log(token)
        setUsername("");
        setPassword("");
      })
      .catch((err) => {
        setErr({ color: "red" });
        setPassword("");
      });
  };
  const onInputChange = (event, setStateFct) => {
    setStateFct(event.target.value);
  };

  return (
    <div>
      <h1 style={errStyle}>abclogin</h1>

      <div>
        <span>Mon Nom </span>
        <input
          type="text"
          value={username}
          onChange={(event) => onInputChange(event, setUsername)}
        ></input>
      </div>
      <div>
        <span>code secret</span>
        <input
          type="password"
          value={password}
          onChange={(event) => onInputChange(event, setPassword)}
        ></input>
      </div>

      <button style={{border:"none"}} onClick={() => loginClick()}> &#62;envoyer</button>
    </div>
  );
}
