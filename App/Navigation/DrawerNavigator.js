import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Containers/HomeScreen";
import CategoryScreen from "../Containers/CategoryScreen";
import ManegeCategoryScreen from "../Containers/ManegeCategoryScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initalRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Manage Categories" component={CategoryScreen} />
      <Drawer.Screen
        name="Categories Details"
        component={ManegeCategoryScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
