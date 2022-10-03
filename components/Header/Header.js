import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import images from "../../constants/images";
import { BellIcon } from "react-native-heroicons/solid";

function Header() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.leftPart}>
            <Image source={images.avatar_1} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.title}>Minh Nguyen</Text>
              <Text style={styles.subTitle}>@Meta</Text>
            </View>
          </View>
          <View style={styles.leftRight}>
            <TouchableOpacity style={styles.btn}>
              <BellIcon style={{ color: "#04004D", height: 14, width: 14 }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <BellIcon style={{ color: "#04004D", height: 14, width: 14 }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <BellIcon style={{ color: "#04004D", height: 14, width: 14 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
  },
  header: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  leftPart: {
    width: "50%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  leftRight: {
    width: "50%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  info: {
    marginLeft: 10,
  },
  title: {
    fontSize: "17px",
    color: "#04004D",
    fontWeight: "500",
    marginBottom: 5,
  },
  subTitle: {
    color: "#667386",
    fontSize: "13px",
    fontWeight: "400",
  },
  btn: {
    // background: "linear-gradient(#e66465, #9198e5)",
    backgroundImage: "linear-gradient(red, yellow)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 10px 20px rgba(41, 39, 77, 0.1)",
    backdropFilter: "blur(11px)",
    marginLeft: 10,
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: "black",
  },
});
export default Header;
