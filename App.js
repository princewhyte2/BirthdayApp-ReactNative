import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import CakeImage from "./components/CakeImage";

export default function App() {
  return (
    <View style={styles.container}>
      <CakeImage />
      <Text style={styles.paragraph}>MD Ibinaye Wale</Text>
      <Text style={styles.wishText}>happy birthday</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  paragraph: {
    margin: 0,
    marginBottom: 0,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  wishText: {
    textAlign: "center",
    fontSize: 16,
  },
});
