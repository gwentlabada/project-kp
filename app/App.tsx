import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './index';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <App />
    </>
  );
}
