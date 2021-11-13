import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>App Header Text!!!</Text>
      </View>
      <View style={styles.body}>
        <Text>Welcome Raj</Text>
        <Text>This is your <Text style={styles.boldText}>first app</Text> preview</Text>
        <Text>Have a great day</Text>
      </View>
      <StatusBar style="auto" />
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
  header:{
    backgroundColor:'red',
    padding: 20
  },
  boldText:{
    fontWeight: 'bold'
  },
  body:{
    backgroundColor:"orange",
    alignItems: 'flex-start',
    padding: 20
  }
});
