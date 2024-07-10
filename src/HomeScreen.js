import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.text}>Home Screen</Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#818AF9',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Manrope-Medium',
    letterSpacing: 1.3,
  },
});

export default HomeScreen;
