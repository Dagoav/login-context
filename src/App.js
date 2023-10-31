import React, { useContext } from "react";
import "./App.css"

import {
  LoginLockProvider,
  LoginLockContext
} from "./components/LoginLock/LoginLockContext";


function UserInfo() {
  const loginContext = useContext(LoginLockContext);

  return (
    <div style={{ margin: "20px" }}>
      {JSON.stringify(loginContext, null, 2)
        .split("\n")
        .map(line => (
          <pre>{line}</pre>
        ))}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <LoginLockProvider>
        <h1>Bienvenido :D</h1>
        {/* <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label> */}
        <UserInfo />
        <LoginLockContext.Consumer>
          {loginContext => (
            <div>
              <span>
                <em>
                  {loginContext.username} ({loginContext.sessionId}) meee
                </em>
              </span>
              <hr />
              <button
                onClick={() => {
                  loginContext.signOut();
                }}
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </LoginLockContext.Consumer>
      </LoginLockProvider>
    </div>
  );
}
