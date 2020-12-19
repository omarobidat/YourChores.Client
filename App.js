import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [weather, setWeather] = useState("Loding...");

  const getWeather = async () => {
    if (weather == "Loding...") {

      var res = await fitch("http://192.168.1.23:5001/weatherforecast");

      var data = await res.json();



      setWeather(data[0].summary);
    }
  }
  return (
    <View style={styles.container}>
      <Text>{weather}</Text>
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
});
