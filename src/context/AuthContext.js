import React, { useContext, useState, useEffect } from "react";
import { auth } from "config/firebase-config";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( user => {
      setCurrentUser(user)
    });

    return unsubscribe;
  }, []);

  function signup(email, passwd) {
    return auth.createUserWithEmailAndPassword(email, passwd);
  }

  const value = {
    currentUser,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
