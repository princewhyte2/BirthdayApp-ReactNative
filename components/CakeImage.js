import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function CakeImage() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/cake.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  logo: {
    height: 228,
    width: 228,
  },
});
