//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { AntDesign } from "@expo/vector-icons";

// create a component
const CategoryComponent = ({ onRemove }) => {
  const [categoryName, setCategoryName] = useState("");
  const [field, setField] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <View style={styles.container}>
      <Text>Bulldozer</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setCategoryName(text);
        }}
        value={categoryName}
        placeholder="New Category"
      />
      <View style={styles.fieldRow}>
        <TextInput
          value={field}
          style={styles.field}
          onChangeText={(text) => {
            setField(text);
          }}
          placeholder="Field"
        />
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={{
            width: 60,
            height: 20,
            borderRadius: 0,
          }}
          placeholder="Text"
          showArrowIcon={false}
        />
        <AntDesign
          name="delete"
          size={24}
          color="black"
          style={{ marginTop: 10 }}
          onPress={onRemove}
        />
      </View>
      <TouchableOpacity style={styles.mainButton}>
        <Text>Title Field: {categoryName}</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", marginTop: 2 }}>
        <Button title="ADD NEW FIELD" style={{ width: 20 }} />
        <Button title="Remove" style={{ width: 20 }} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 250,
    backgroundColor: "white",
    paddingHorizontal: 3,
    paddingVertical: 1,
  },
  input: {
    width: 220,
    height: 50,
    borderWidth: 1,
    borderColor: "blue",
  },
  fieldRow: {
    flexDirection: "row",
    width: 60,
  },
  mainButton: {
    backgroundColor: "blue",
    padding: 4,
    marginTop: 4,
  },
  field: {
    width: 150,
    height: 50,
    borderWidth: 1,
    borderColor: "blue",
  },
});

//make this component available to the app
export default CategoryComponent;
