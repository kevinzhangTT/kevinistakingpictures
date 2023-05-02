import React from 'react';
import { useState } from 'react';

import { auth, providerGoogle } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from '@firebase/auth';
import InputText from './Atoms/InputText';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

import { motion } from 'framer-motion';

export default function FirebaseLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch(err) {
      console.error(err);
    }
  };

  const signInGoogle = async () => {
    try {
      await signInWithPopup(auth, providerGoogle);
    } catch(err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch(err) {
      console.error(err);
    }
  };

  return (
    <div className="p-8 flex flex-col bg-white/50 gap-y-4 rounded-3xl shadow-lg">
      <InputText
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputText
        password
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex w-full lg:w-64 h-10 space-x-2">
        <button
          onClick={signIn}
          className="flex-1 select-none
            text-antique-700
            bg-antique-200 hover:bg-antique-300 active:bg-antique-400
            rounded-sm transition-color duration-300"
        >
          sign in
        </button>
        <button
          onClick={signInGoogle}
          className="flex-none w-10 select-none
            text-antique-700
            bg-antique-200 hover:bg-antique-300 active:bg-antique-400
            rounded-sm transition-all duration-300"
        >
          <FontAwesomeIcon icon={brands('google')}/>
        </button>
      </div>
      <div className="mt-4 w-full lg:w-64">
        <button
          onClick={logOut}
          className=" w-full p-2 select-none
            text-periwinkle-700
            bg-periwinkle-200 hover:bg-periwinkle-300 active:bg-periwinkle-400
            rounded-sm transition-color duration-300"
        >
          sign out
        </button>
      </div>
      {auth.currentUser ? (
        <span className="text-antique-700">
          signed in as: {auth.currentUser.email}
        </span>
      ) : (
        <span className="italic text-antique-500/50">
          not signed in
        </span>
      )}
    </div>
  );
}
