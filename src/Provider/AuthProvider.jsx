import { createContext, useState } from "react";
import PropTypes from "prop-types";
import auth from "../Firebase/firebase.config";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
// User Create
  const userCreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
// User Login
const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email,password)
}
// User Login With Google Account
const googleLogin = () => {
  return  signInWithPopup(auth, googleProvider)
}
// User Login With Facebook Account
const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider)
}

//   Pass All Auth With object
  const AuthInfo = {
    user,
    userCreate,
    userLogin,
    googleLogin,
    facebookLogin,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
