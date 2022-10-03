import { SafeAreaView, Text, Button } from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import MyWallet from "../components/MyWallet/MyWallet";
import Transaction from "../components/Transaction/Transaction";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header />
      <Button
        onPress={() => {
          navigation.navigate("Wallet");
        }}
        title="Press Me"
      >
        Button
      </Button>
      <MyWallet />
      <Transaction />
    </SafeAreaView>
  );
};
export default Home;
