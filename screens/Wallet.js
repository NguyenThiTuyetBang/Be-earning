import { SafeAreaView, Text } from "react-native";
import React from "react";
import Header from "../components/Header/Header";

const Wallet = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header />
      <Text>Wallet</Text>
    </SafeAreaView>
  );
};
export default Wallet;
