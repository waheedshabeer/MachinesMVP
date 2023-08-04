//import liraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";

// create a component
const Stack = createStackNavigator();
const MainNavigator = () => {
  return <DrawerNavigator />;
};

//make this component available to the app
export default MainNavigator;
