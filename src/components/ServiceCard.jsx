import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ServiceCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Image style={styles.image} source={item.image} />
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  card: {
    width: 140,
    padding: 8,
    backgroundColor: "white",
    marginHorizontal: 5,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 100,
    flex: 1,
  },
  title: {
    fontSize: 12,
    marginBottom: 8,
  },
});
