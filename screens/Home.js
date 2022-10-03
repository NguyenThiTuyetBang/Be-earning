import { SafeAreaView, Text, Button } from "react-native";
import React from "react";
import Header from "../components/Header/Header";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header />
      <Text>Home</Text>
      <Button
        onPress={() => {
          navigation.navigate("Wallet");
        }}
        title="Press Me"
      >
        Button
      </Button>
    </SafeAreaView>
  );
};
export default Home;
