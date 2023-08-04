//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// create a component
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add a category</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  buttonText: { color: "#fff" },
  button: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
});

//make this component available to the app
export default HomeScreen;
