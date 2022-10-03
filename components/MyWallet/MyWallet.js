import { useState } from "react";
import { Text, StyleSheet, View, Animated } from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";

const MyWallet = () => {
  const title = [
    {
      name: "My Wallet",
      active: true,
    },
    {
      name: "Report",
      active: false,
    },
    {
      name: "Setting",
      active: false,
    },
  ];

  const dataContent = [
    {
      color: "#0084F4",
      title: "@Meta Wellet",
      desc: "90,500 MCOIN",
      borderColor: "#004DFF",
      id: 1,
    },
    {
      color: "orange",
      title: "@Metanode Wellet",
      desc: "90,500 MCOIN",
      borderColor: "orange",
      id: 2,
    },
    {
      color: "green",
      title: "@Meta Wellet5",
      desc: "90,500 MCOIN",
      borderColor: "yellow",
      id: 3,
    },
  ];
  const [itemSelected, setItemSelected] = useState(dataContent[0]);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          height: 133,
          width: 140,
          marginRight: 20,
          borderRadius: 22,
          boxShadow: "0px 10px 20px rgba(85, 76, 255, 0.2)",
          borderWidth: 1,
          borderColor: itemSelected.id === item.id ? item.borderColor : "white",
        }}
        onPress={() => setItemSelected(item)}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            padding: 15,
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: item.color,
              borderRadius: 15,
            }}
          ></View>
          <Text
            style={{
              marginTop: 12,
              color: "#667386",
              fontSize: "12px",
              fontWeight: "400",
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              color: "#04004D",
              fontSize: "14px",
              fontWeight: "700",
              marginTop: 10,
            }}
          >
            {item.desc}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.main}>
          <View
            style={{
              width: "100%",
              height: 20,
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {title.map((item, index) => {
              return (
                <Text
                  style={item.active ? styles.textActive : styles.text}
                  key={index}
                >
                  {item.name}
                </Text>
              );
            })}
          </View>

          {/* Wallet */}

          <Animated.View style={styles.wallet}>
            <FlatList
              data={dataContent}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              // numColumns={2}
              horizontal
            />
          </Animated.View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 250,
  },
  main: {
    width: "100%",
    height: "100%",
    padding: 15,
  },
  text: {
    paddingHorizontal: 12,
    fontSize: "17px",
    fontWeight: "400",
    color: "#D3D7DB",
  },
  textActive: {
    paddingHorizontal: 12,
    fontSize: "17px",
    fontWeight: "500",
    color: "black",
  },
  wallet: {
    width: "100%",
    height: 160,
  },
  item: {
    width: 40,
    height: 40,
  },
});
export default MyWallet;
