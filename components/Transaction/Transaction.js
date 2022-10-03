import styles from "./styles.js";
import { Text, View, Animated, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import images from "../../constants/images";
import Svg, { Path } from "react-native-svg";

const Transaction = () => {
  const listUser = [
    {
      id: 1,
      name: "Eric H Hoper",
      timer: "3 hours ago",
      nft: "-850 USDT",
      status: "decrease",
      color: null,
    },
    {
      id: 2,
      name: "Melissa S Booker",
      timer: "3 hours ago",
      nft: "+850 MCOIN",
      status: "increase",
      color: "#E3F7DF",
    },
    {
      id: 3,
      name: "Anndy Lau",
      timer: "3 hours ago",
      nft: "-80 MCOIN",
      status: "decrease",
      color: "#FBBCD5",
    },
    {
      id: 4,
      name: "Eric H Hoper",
      timer: "3 hours ago",
      nft: "-850 USDT",
      status: "decrease",
      color: null,
    },
    {
      id: 5,
      name: "Eric H Hoper",
      timer: "3 hours ago",
      nft: "-850 USDT",
      status: "decrease",
      color: null,
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          height: 80,
          width: "100%",
          marginBottom: 6,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
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
            {item.color !== null ? (
              <View
                style={{
                  height: 50,
                  width: 50,
                  backgroundColor: item.color,
                  borderRadius: 16,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-2 h-2"
                  style={{
                    height: 20,
                    width: 20,
                  }}
                >
                  <Path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </Svg>
              </View>
            ) : (
              <Image
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 16,
                }}
                source={images.avatar_2}
              />
            )}
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  marginTop: 5,
                  color: "#667386",
                }}
              >
                {item.timer}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: "16px",
                fontWeight: "700",
                color: item.status === "increase" ? "#04B800" : "#FF0366",
              }}
            >
              {item.nft}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={styles.main}>
        <View style={styles.textMain}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text style={{ marginRight: 15, ...styles.textActive }}>
              Transactions
            </Text>
            <Text style={{ ...styles.text }}>Pending</Text>
          </View>
        </View>
        <View>
          <Animated.View
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <FlatList
              data={listUser}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              // numColumns={2}
            />
          </Animated.View>
        </View>
      </View>
    </>
  );
};
export default Transaction;
