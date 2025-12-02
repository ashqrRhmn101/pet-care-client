"use client";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "./authContext";
// import { auth } from "@/firebase/firebase.config";
import { useEffect, useState } from "react";

import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase";

const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // console.log(user);

  const [loading, setLoading] = useState(true);

  // User REgister
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user Login
  const registerLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   user Profile
  const userProfile = (photoData) => {
    return updateProfile(auth.currentUser, photoData);
  };

  // User Sign Out
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Google signInWithPopup
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // get user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    registerUser,
    userProfile,
    registerLogin,
    signOutUser,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
