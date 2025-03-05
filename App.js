import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigation";
import { SafeAreaView, StatusBar } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#88dae0", flex: 1 }}>
      <NavigationContainer>
        <StatusBar barStyle={"default"} />
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
