import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { updateCategory } from "../Redux/Actions/categoryAction";

const CategoryComponent = ({ onRemove, category }) => {
  const { categoryName, fields, titleField } = category;
  const [open, setOpen] = useState(false);
  const [openTitleField, setOpenTitleField] = useState(false);
  const [inputTypes, setItems] = useState([
    { label: "Text", value: "Text" },
    { label: "Checkbox", value: "Checkbox" },
    { label: "Date", value: "Date" },
    { label: "Number", value: "Number" }
  ]);
  const [titleFieldsTypes, setTitleFieldsTypes] = useState([
    { label: "Model", value: "Text" },
    { label: "Manufactured On", value: "Manufactured On" },
    { label: "Does it work?", value: "Does it work?" },
    { label: "Weight", value: "Weight" }
  ]);

  const dispatch = useDispatch();

  const setCategoryName = (categoryName) => {
    updateCat({ categoryName });
  };
  const setField = (field, index) => {
    let updatedField = fields[index];
    updatedField.field = field;

    let updatedFields = fields;
    updatedFields[index] = updatedField;

    updateCat({ fields: updatedFields });
  };

  const setFiledType = (field, index) => {
    const { value } = field;

    let updatedField = fields[index];
    updatedField.filedType = value;

    let updatedFields = fields;
    updatedFields[index] = updatedField;

    updateCat({ fields: updatedFields });
  };
  const setTitleFieldType = (field) => {
    const { value } = field;
    updateCat({ titleField: value });
  };

  const updateCat = (prop) => {
    dispatch(updateCategory({ ...category, ...prop }));
  };

  const addNewField = () => {
    const newField = { field: "", filedType: "Text" };
    updateCat({ fields: fields.concat(newField) });
  };

  const onRemoveField = (index) => {
    let updatedFields = fields;
    updatedFields.splice(index, 1);
    updateCat({ fields: updatedFields });
  };
  return (
    <View style={styles.container}>
      <Text>{categoryName}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setCategoryName}
        value={categoryName}
        placeholder="Category name"
      />

      {fields.map((fieldsItem, index) => {
        const { field, filedType } = fieldsItem;
        return (
          <View style={styles.fieldRow} key={index}>
            <AntDesign
              name="delete"
              size={24}
              color="black"
              onPress={() => onRemoveField(index)}
              style={{ width: "10%" }}
            />

            <TextInput
              value={field}
              style={styles.field}
              onChangeText={(text) => setField(text, index)}
              placeholder="Field"
            />

            <DropDownPicker
              open={open}
              value={filedType}
              items={inputTypes}
              setOpen={setOpen}
              setItems={setItems}
              onSelectItem={(item) => setFiledType(item, index)}
              style={{
                width: "30%",
                height: 40,
                borderWidth: 0
              }}
              placeholder="Text"
              showArrowIcon={false}
              listMode="MODAL"
            />
          </View>
        );
      })}

      <DropDownPicker
        open={openTitleField}
        value={titleField}
        items={titleFieldsTypes}
        setOpen={setOpenTitleField}
        setItems={setTitleFieldsTypes}
        onSelectItem={setTitleFieldType}
        style={styles.mainButton}
        labelStyle={{
          color: "white",
          textAlign: "center"
        }}
        placeholderStyle={{
          color: "white",
          textAlign: "center"
        }}
        placeholder="TITLE FIELD: UNAMED FIELD"
        showArrowIcon={false}
        listMode="MODAL"
      />

      <View
        style={{
          flexDirection: "row",
          marginTop: 2,
          justifyContent: "space-between",
          marginBottom: 10
        }}
      >
        <Button
          title="ADD NEW FIELD"
          style={{ width: 20 }}
          onPress={addNewField}
        />
        <Button
          title="REMOVE ITEM"
          style={{ width: 20 }}
          onPress={() => onRemove(category.key)}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 3,
    paddingVertical: 1,
    width: "98%",
    marginHorizontal: "1%"
  },
  input: {
    borderWidth: 1,
    height: 40,
    marginBottom: 10
  },
  fieldRow: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 2
  },
  mainButton: {
    backgroundColor: "purple",
    marginTop: 4,
    borderRadius: 0
  },
  field: {
    borderWidth: 1,
    width: "60%",
    height: 40,
    marginHorizontal: 2
  }
});

//make this component available to the app
export default CategoryComponent;
