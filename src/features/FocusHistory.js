import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

export const FocusHistory = ({history}) => {
  if (!history || !history.length) return <Text style = {styles.item2}>We havent focused on anything yet!</Text>;
  const renderItem = ({item}) => <Text style = {styles.item}> - {item}</Text>

  return (
    <View style = {styles.container}>
      <Text style={styles.title}>Things we've focused on : </Text>
      <FlatList data={history} renderItem = {renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({

container: {
padding: spacing.med,
paddingTop: spacing.sm,
color: colors.white,
flex:1


},
  item: {

fontSize : fontSizes.med,
color: colors.white,


  },

  item2: {

fontSize : fontSizes.med,
color: colors.white,
textAlign: 'center'


  },
  title: {
    color: colors.white,
    fontSize: fontSizes.med,
    padding: spacing.med,
    fontWeight: 'bold',
  },


});
