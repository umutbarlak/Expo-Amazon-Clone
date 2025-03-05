import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "../utils/router";
import Home from "../screens/Home";
import Products from "../screens/Products";
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={SCREENS.HOMESCREEN}
    >
      <Stack.Screen name={SCREENS.HOMESCREEN} component={Home} />
      <Stack.Screen name={SCREENS.PRODUCTSCREEN} component={Products} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
