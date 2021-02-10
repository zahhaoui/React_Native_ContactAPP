import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Chat from './components/Chat.js'
import SignUp from './components/Signup.js'
import Memo from './components/Memo.js'
import LoginView from './components/Login.js'
import Profile from './components/Profile.js'
import Add from './components/add.js'

import Groups from './components/Groups.js'
import UserProfileView from './components/UserProfileView.js'
import ContactList from './components/Contact.js'
import Menu from './components/Menu.js'
import CallScreen from './components/CallScreen.js'
import Calls from './components/Calls.js'

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
   <View style={styles.container}>
     <Profile/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
