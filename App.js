import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from './src/pages/Main'

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8B05BE"/>
      <Container/>
    </>
  );
}