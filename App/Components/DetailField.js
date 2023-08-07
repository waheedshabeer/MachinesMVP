import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";

const DetailField = ({ heading, onChangeText, text, width, value }) => {
  return (
    <View style={[styles.container, { width: width }]}>
      <Text style={styles.heading}>{heading}</Text>
      <View style={styles.body}>
        <TextInput
          onChangeText={onChangeText}
          placeholder={text}
          value={value}
          style={{
            marginHorizontal: 10,
            width: "100%",
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { paddingTop: 10 },
  heading: {
    position: "absolute",
    top: 0,
    left: 10,
    zIndex: 100,
    fontWeight: "bold",
    backgroundColor: "white",
    paddingHorizontal: 5,
    color: "black",
  },
  body: {
    borderWidth: 1,
    borderColor: "grey",
    flexDirection: "row",
    borderRadius: 5,
    paddingHorizontal: 5,
    alignItems: "center",
    padding: 13,
    marginBottom: "4%",
  },
});
export default DetailField;
