import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useState } from "react";
import ReactDOM from 'react-dom';

Amplify.configure(awsconfig);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

