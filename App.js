import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import data from "./data.json";

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
  return (
    <View style={styles.container}>
      <Text style={styles.text}>App!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
    fontSize: "30px",
  },
});
