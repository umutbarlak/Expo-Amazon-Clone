import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Brand1 from "../assets/brand1.jpeg";
import Brand2 from "../assets/brand2.jpeg";
import Brand3 from "../assets/brand3.jpeg";
import Brand4 from "../assets/brand4.jpeg";

const Brands = () => {
  const brandOffers = [
    {
      id: "brand1",
      image: Brand1,
      title: "Min. 20% off | Fossil, Titan Smart Watch & More",
    },
    {
      id: "brand2",
      image: Brand2,
      title: "Min. 20% off | Fossil, Titan Smart Watch & More",
    },
    {
      id: "brand3",
      image: Brand3,
      title: "Heels - Upto 50% OFF on Heeled Sandals, High Heel",
    },
    {
      id: "brand4",
      image: Brand4,
      title: "Sony 60W Bluetooth SoundBar Speaker Audio Engine",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Brands of Day</Text>
        <View style={styles.row}>
          {brandOffers.map((item) => (
            <View key={item.id} style={styles.brands}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.brandTitle}>{item.title}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  innerContainer: {},
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  brands: {
    width: "50%",
    padding: 5,
  },
  title: {
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
    fontSize: 18,
    fontWeight: 700,
    color: "#000",
    paddingVertical: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  brandTitle: {
    fontSize: 12,
    marginTop: 10,
  },
});
