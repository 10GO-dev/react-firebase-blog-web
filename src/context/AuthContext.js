import React, { useContext, useState, useEffect } from "react";
import {auth} from 'config/firebase-config'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const UserContext = React.createContext();

export function useAuth() {
  return useContext(UserContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
    setCurrentUser(user)
    setLoading(false)
    });
    return unsubscribe;
  }, []);

  function signup(email, passwd) {
    return createUserWithEmailAndPassword(auth, email, passwd);
  }

  function signin(email,passwd){
    return signInWithEmailAndPassword(auth,email,passwd)
  }

  function logout(){
    return signOut(auth)
  }

  const value = {
    currentUser,
    signup,
    signin,
    logout
  };

  return ( 
    <UserContext.Provider value={value}>
       {!loading && children}
    </UserContext.Provider>
  )
}
