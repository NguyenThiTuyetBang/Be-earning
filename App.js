import { useEffect, useState } from "react";
import data from "./data.json";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Wallet from "./screens/Wallet";

export default function App() {
  const [currentData, setCurrentData] = useState([]);
  const filterArray = (data) => {
    let array = [];
    data.filter((item, index) => {
      if (data.indexOf(item) === index) {
        array.push({
          name: item,
          index: data.indexOf(item),
        });
      }
    });
    setCurrentData(array.slice(0, 24));
  };

  useEffect(() => {
    filterArray(data);
  }, []);
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Wallet" component={Wallet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
