import { SafeAreaView, Text, Button } from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import MyWallet from "../components/MyWallet/MyWallet";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header />
      <MyWallet />
      {/* <Button
        onPress={() => {
          navigation.navigate("Wallet");
        }}
        title="Press Me"
      >
        Button
      </Button> */}
    </SafeAreaView>
  );
};
export default Home;
