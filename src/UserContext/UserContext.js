import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    // user create firebase
    const userCreate = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user sign in
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google Sign Up
    const googleSignUp = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // sign out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => unSubscribe();

    },[])

    const authInfo = {user, loading, userCreate, signIn, logOut, googleSignUp}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;