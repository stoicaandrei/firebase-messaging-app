import React, { createContext, useEffect, useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import { projectAuth } from 'firebase_config';

const defaultUser = {
  uid: '',
  email: '',
  displayName: '',
  photoURL: ''
};

const defaultState = {
  loading: false,
  user: defaultUser,
  logout: async () => {},
  loginWithGoogle: async () => {},
  error: null,
};

type User = {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

type ContextProps = {
  loading: boolean,
  user: User | null,
  logout: () => void,
  loginWithGoogle: () => void,
  error: any
}

export const UserContext = createContext<ContextProps>(defaultState);

export const UserProvider: React.FC = ({ children }) => {
  const [firebaseUser, loading] = useAuthState(projectAuth);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const rawUser = localStorage.getItem('user');
    const localUser = rawUser ? JSON.parse(rawUser) : null;
    setUser(localUser);
  }, []);

  useEffect(() => {
    if (!firebaseUser) return;

    localStorage.setItem('user', JSON.stringify(firebaseUser));
    setUser(firebaseUser);

    // const addUserToDatabase = async () => {
    //   const userRef = firebase.database().ref(`users/${firebaseUser.uid}`);
    //   const snapshot = await userRef.once('value');
    //   !snapshot.val() && (await userRef.set(firebaseUser));
    // };
    //
    // addUserToDatabase();
  }, [firebaseUser]);

  const loginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      await projectAuth.signInWithPopup(provider);
    } catch (error) {
      setError(error);
    }
  };

  const logout = async () => {
    console.log('im trying')
    await projectAuth.signOut();
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        error,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
