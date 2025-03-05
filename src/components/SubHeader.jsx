import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";

const SubHeader = () => {
  return (
    <View style={styles.container}>
      <Feather name="map-pin" size={20} color={"black"} />
      <Text>Delivery to Turkey</Text>
      <SimpleLineIcons name="arrow-down" size={15} color="black" />
    </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 18,
  },
  deliver: {
    fontSize: 13,
    color: "#2c4341",
  },
});
