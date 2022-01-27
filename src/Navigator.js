import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Details from "./Screens/Details";
import Home from "./Screens/Home";

const Stack = createStackNavigator();

export default class Navigator extends Component {
  render() {
    return (
      <NavigationContainer initialRouteName="Home">
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerTitle: "Planet Details" }}
          />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
