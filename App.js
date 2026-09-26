import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import NotesScreen from "./screens/NotesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Notes App",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Notes"
          component={NotesScreen}
          options={{
            title: "My Notes",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}