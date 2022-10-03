import styles from "./styles.js";
import { Text, View, Animated, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import images from "../../constants/images";

const Transaction = () => {
  const listUser = [
    {
      id: 1,
      name: "Eric H Hoper",
      timer: "3 hours ago",
      nft: "-850 USDT",
      status: "decrease",
    },
    {
      id: 2,
      name: "Melissa S Booker",
      timer: "3 hours ago",
      nft: "+850 MCOIN",
      status: "increase",
    },
    {
      id: 3,
      name: "Anndy Lau",
      timer: "3 hours ago",
      nft: "-80 MCOIN",
      status: "decrease",
    },
    {
      id: 4,
      name: "Eric H Hoper",
      timer: "3 hours ago",
      nft: "-850 USDT",
      status: "decrease",
    },
    {
      id: 5,
      name: "Eric H Hoper",
      timer: "3 hours ago",
      nft: "-850 USDT",
      status: "decrease",
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
            <Image
              style={{
                height: 50,
                width: 50,
                borderRadius: 16,
              }}
              source={images.avatar_2}
            />
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
