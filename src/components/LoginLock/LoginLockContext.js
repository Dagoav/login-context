import React, { useState } from "react";

import LoginLockForm from "./LoginLockForm";

export const LoginLockDefaultContext = {
  username: "",
  isSignedIn: false,
  sessionId: null
};

export const LoginLockContext = React.createContext(LoginLockDefaultContext);

export function useLoginLock() {
  const [username, setUsername] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [error, setError] = useState("");

  return {
    error,
    username,
    isSignedIn,
    sessionId,
    signIn(username, password) {
      setError("");
      if (/^batman\d{0,3}$/.test(username) && /^robin\d{0,3}$/.test(password)) {
        setUsername(username);
        setIsSignedIn(true);
        setSessionId(
          Math.random()
            .toString(32)
            .slice(2)
        );
        return;
      }
      setError("No se pudo iniciar sesión");
    },
    signOut() {
      setError("");
      setUsername("");
      setIsSignedIn(false);
      setSessionId("");
    }
  };
}

export function LoginLockProvider(props) {
  const loginLock = useLoginLock();

  return (
    <LoginLockContext.Provider value={loginLock}>
      <LoginLockContext.Consumer>
        {loginLock =>
          loginLock.isSignedIn ? (
            props.children
          ) : (
            <LoginLockForm
              error={loginLock.error}
              onSignIn={(username, password) => {
                loginLock.signIn(username, password);
              }}
            />
          )
        }
      </LoginLockContext.Consumer>
    </LoginLockContext.Provider>
  );
}
