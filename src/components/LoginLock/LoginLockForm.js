import React, { useState } from "react";
import { BarReport, LineReport } from "../LineReports"
import { CircularReports } from "../CircularReports";

export default function LoginLockForm(props) {
  const [username, setUsername] = useState("batman");
  const [password, setPassword] = useState("robin");

  return (
    <div>
      <BarReport />
      <LineReport />
      <div style={{ width: '300px', height: '300px', background: 'gray' }}>
        <CircularReports />
      </div>
      <span style={{ color: "red" }}>{props.error}</span>
      <br />
      <input
        placeholder="Nombre de usuario"
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
      <br />
      <input
        placeholder="Nombre de usuario"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <br />
      <button
        onClick={() => {
          if (props.onSignIn) {
            props.onSignIn(username, password);
          }
        }}
      >
        Iniciar sesión
      </button>
    </div>
  );
}
