import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { updateCategory } from "../Redux/Actions/categoryAction";
import DetailField from "./DetailField";

const CategoryComponent = ({ onRemove, category, length }) => {
  const { categoryName, fields, titleField } = category;
  const [open, setOpen] = useState(false);
  const [openTitleField, setOpenTitleField] = useState(false);
  const [inputTypes, setItems] = useState([
    { label: "TEXT", value: "TEXT" },
    { label: "Checkbox", value: "Checkbox" },
    { label: "Date", value: "Date" },
    { label: "Number", value: "Number" },
  ]);
  const [titleFieldsTypes, setTitleFieldsTypes] = useState([
    { label: "Model", value: "Text" },
    { label: "Manufactured On", value: "Manufactured On" },
    { label: "Does it work?", value: "Does it work?" },
    { label: "Weight", value: "Weight" },
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
    <View style={[styles.container, { width: length == 1 ? "96%" : "46%" }]}>
      <Text style={{ marginHorizontal: 10 }}>{categoryName}</Text>
      <DetailField
        heading={"Category name"}
        text={"Category name"}
        onChangeText={setCategoryName}
        value={categoryName}
        width={"100%"}
      />

      {fields?.length
        ? fields.map((fieldsItem, index) => {
            const { field, filedType } = fieldsItem;
            return (
              <View style={styles.fieldRow} key={index}>
                <DetailField
                  heading={"Field"}
                  text={"Field"}
                  width={length == 1 ? "48%" : "42%"}
                  onChangeText={(text) => setField(text, index)}
                  value={field}
                />

                <View style={styles.dropDownView}>
                  <DropDownPicker
                    open={open}
                    value={filedType}
                    items={inputTypes}
                    setOpen={setOpen}
                    setItems={setItems}
                    textStyle={{
                      color: "#6000EC",
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: 12,
                    }}
                    onSelectItem={(item) => setFiledType(item, index)}
                    containerStyle={[
                      styles.dropDownContainer,
                      {
                        paddingLeft: 5,
                        backgroundColor: "white",
                        width: length == 1 ? 90 : 60,
                        height: 55,
                        marginBottom: length == 1 ? 5 : null,
                      },
                    ]}
                    style={{
                      borderWidth: 0,
                    }}
                    placeholderStyle={{ color: "#6000EC" }}
                    placeholder="TEXT"
                    showArrowIcon={false}
                    listMode="MODAL"
                  />
                  <MaterialIcons
                    name="delete"
                    size={28}
                    color="black"
                    onPress={() => onRemoveField(index)}
                  />
                </View>
              </View>
            );
          })
        : null}

      <DropDownPicker
        open={openTitleField}
        value={titleField}
        items={titleFieldsTypes}
        setOpen={setOpenTitleField}
        setItems={setTitleFieldsTypes}
        onSelectItem={setTitleFieldType}
        style={styles.mainButton}
        labelStyle={styles.labelStyle}
        placeholderStyle={styles.placeholderStyle}
        placeholder="TITLE FIELD: MODEL"
        showArrowIcon={false}
        listMode="MODAL"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.addFieldButton, { width: length == 1 ? 120 : 80 }]}
          onPress={addNewField}
        >
          <Text style={styles.addFieldText}>ADD NEW FIELD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => onRemove(category.key)}
        >
          <MaterialIcons
            name="delete"
            size={length == 1 ? 24 : 18}
            color="#7456D2"
          />
          <Text
            style={[styles.removeText, { fontSize: length == 1 ? 14 : 12 }]}
          >
            REMOVE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 3,
    paddingVertical: 1,

    marginHorizontal: "1%",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    height: 40,
    marginBottom: 10,
  },
  labelStyle: {
    color: "white",
    textAlign: "center",
  },
  placeholderStyle: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
  fieldRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 2,
  },
  mainButton: {
    backgroundColor: "#6000EC",
    marginTop: 4,
    borderRadius: 0,
  },
  removeButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  field: {
    borderWidth: 1,
    width: "60%",
    height: 40,
    marginHorizontal: 2,
  },
  dropDownView: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    justifyContent: "space-between",
  },
  dropDownContainer: {
    marginLeft: 5,
    marginTop: 5,
    borderRadius: 5,
    borderWidth: 0.5,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 2,
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  removeText: { color: "#7456D2", fontWeight: "600" },
  addFieldText: {
    padding: 5,
    color: "#7456D2",
    fontWeight: "600",
  },
  addFieldButton: { borderWidth: 0.5, borderRadius: 5, marginTop: 10 },
});

//make this component available to the app
export default CategoryComponent;
