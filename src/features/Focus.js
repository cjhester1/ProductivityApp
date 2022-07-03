import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import {spacing} from "../utils/sizes";

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setSubject}
          style={styles.textInput}
          label=" How would you like to focus?"
        />
        <View style={styles.button}>
        <RoundedButton title="+" size={50} onPress = {()=> addSubject(subject)}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   

   // color: colors.darkBlue,
  },

  button: {
    justifyContent: 'center',
  },

  inputContainer: {
    padding: spacing.lrg,
    justifyContent: 'top',
    flexDirection: 'row',
  },

  textInput: {
  
    flex: 1,
    marginRight: spacing.sm,
  },
});
