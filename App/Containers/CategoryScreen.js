//import liraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CategoryComponent from "../Components/CategoryComponent";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../Redux/Actions/categoryAction";
import { removeCategory } from "../Redux/Actions/categoryAction";

const Category = () => {
  const categories = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();

  const handleAddCategory = () => {
    dispatch(
      addCategory({
        key: Date.now(),
        categoryName: "",
        fields: [{ field: "", filedType: "Text" }],
        titleField: "Unamed Field",
      })
    );
  };

  const handleRemoveCategory = (categoryKey) => {
    dispatch(removeCategory(categoryKey));
  };

  const renderItem = ({ item, index }) => {
    return (
      <CategoryComponent
        category={item}
        key={index}
        onRemove={handleRemoveCategory}
        length={categories?.length}
      />
    );
  };

  return (
    <View style={styles.container}>
      {categories.length === 0 ? (
        <Text style={styles.buttonText}>No Categories to display</Text>
      ) : null}
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        ListFooterComponent={
          <TouchableOpacity style={styles.button} onPress={handleAddCategory}>
            <Text style={styles.buttonText}>Add New Category</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    bottom: 0,
    alignItems: "center",
    marginBottom: 5,
    width: "80%",
    padding: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
  },
});

//make this component available to the app
export default Category;
