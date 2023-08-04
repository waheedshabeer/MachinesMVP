import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Containers/HomeScreen";
import CategoryScreen from "../Containers/CategoryScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initalRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Manage Categories" component={CategoryScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
