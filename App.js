import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';

import { colors } from './src/utils/colors';
//StatusBAr imports library that keeps dimensions below status bar height.
import { Platform } from 'react-native';
//Platform is used to import a library that lets you distinguish between which devices you want to configure styles and layouts for

//SafeAreView is another library to import for ios devices that doenst worry about padding that we place, and guarantees to keep content within safe area for devices
import Constants from 'expo-constants';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import {FocusHistory} from "./src/features/FocusHistory";

// You can import from local files
//import AssetExample from './components/AssetExample';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history,setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history = {history}/>
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {setHistory([...history,subject])}}
          clearSubject={() => setCurrentSubject(null)}
        />
        // <View>
        //   <Text style={styles.text}>
        //     {' '}
        //     i am going to render timer for {currentSubject}
        //   </Text>
        // </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
    //
  },
  text: {
    color: colors.white,
  },
});
