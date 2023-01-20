import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/pages/Home/index";
import Sobre from "./src/pages/Sobre/index";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Tela Inicial",
            headerStyle: {
              backgroundColor: "#121212",
            },
            headerTintColor: "#FFF",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{ title: "Página Sobre" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
