//import liraries
import React from "react";
import NavigationContainer from "@react-navigation/native";
// import DrawerNavigator from "./DrawerNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Containers/HomeScreen";
import DrawerNavigator from "./DrawerNavigator";

// create a component
const Stack = createStackNavigator();
const MainNavigator = () => {
  return <DrawerNavigator />;
};

//make this component available to the app
export default MainNavigator;
