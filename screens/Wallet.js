import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import data from "../data.json";
import Svg, { Path } from "react-native-svg";

const Wallet = ({ navigation }) => {
  const [currentWord, setCurrentWord] = useState([]);
  const geMultipleRandom = (array, nums) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    let newShuffled = shuffled.slice(0, nums);
    let newArr = [];
    let result = newShuffled.map((item, idx) => {
      return newArr.push({ name: item, index: idx });
    });
    setCurrentWord(newArr);
  };
  // console.log(currentWord);

  useEffect(() => {
    geMultipleRandom(data, 24);
  }, []);
  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          width: "100%",
          height: 70,
          paddingHorizontal: 15,
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          maxHeight: 70,
          flexDirection: "row",
        }}
      >
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              style={{ height: 25, width: 25, color: "black" }}
            >
              <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </Svg>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontSize: "17px",
              fontWeigt: "700",
              marginLeft: 10,
            }}
          >
            Create New Wallet
          </Text>
        </View>
      </View>
      {/* Main content */}
      <View
        style={{
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            width: 100,
            height: 40,
            backgroundColor: "#FFFFFF",
            borderRadius: 6,
            paddingHorizontal: 8,
            paddingVertical: 6,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                fontSize: "11px",
                color: "#004DFF",
                height: 25,
                width: 25,
                borderRadius: "50%",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>1</Text>
            </View>
            <Text
              style={{
                color: "#04004D",
                fontSize: "15px",
                fontWeight: "400",
              }}
            >
              Raise
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Wallet;
