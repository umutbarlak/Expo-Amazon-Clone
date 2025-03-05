import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import SubHeader from "./SubHeader";

const Header = () => {
  return (
    <LinearGradient
      colors={["#88dae0", "#98e1d6", "#9ee4d4"]}
      style={styles.container}
    >
      <View style={styles.tapHeader}>
        <View style={styles.inputBox}>
          <Ionicons name="search" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Search Amazon"
            placeholderTextColor={"#848484"}
          />
          <AntDesign name="scan1" size={24} color="black" />
        </View>
        <Entypo name="mic" size={24} color="black" />
      </View>
      <SubHeader />
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  tapHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 5,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    flex: 1,
  },
});
