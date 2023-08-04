//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CategoryComponent from "../Components/CategoryComponent";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../Redux/Actions/categoryAction";
import { removeCategory } from "../Redux/Actions/categoryAction";

// create a component
const Category = () => {
  // const [categories, setCategories] = useState([]);
  const [componentKey, setComponentKey] = useState(0);
  const categories = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();

  const handleAddCategory = () => {
    dispatch(addCategory({ key: Date.now(), name: "New Category" }));
  };

  const handleRemoveCategory = () => {
    dispatch(removeCategory(categorykey));
  };

  return (
    <View style={styles.container}>
      {categories.length === 0 ? (
        <Text style={styles.buttonText}>No Categories to display</Text>
      ) : null}
      {categories.map((key) => (
        <CategoryComponent
          key={key}
          onRemove={() => handleRemoveCategory(key)}
        />
      ))}
      <TouchableOpacity style={styles.button} onPress={handleAddCategory}>
        <Text style={styles.buttonText}>Add New Category</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  button: {
    backgroundColor: "blue",
    position: "absolute",
    bottom: 0,
    width: "95%",
    alignItems: "center",
    padding: 5,
    marginBottom: 5,
  },
  buttonText: {
    color: "white",
  },
});

//make this component available to the app
export default Category;
