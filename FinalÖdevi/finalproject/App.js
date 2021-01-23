import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import AppMain from './src/AppMain';
const App: () => React$Node = () => {
  return (
    <SafeAreaView>
    <AppMain />
    </SafeAreaView>

);


};

export default App;
