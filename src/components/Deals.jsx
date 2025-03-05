import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import recommendedProduct from "../assets/recommend.jpg";
const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended deal for you</Text>
      <Image style={styles.image} source={recommendedProduct} />

      <View style={styles.bottomSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.offDealBtn}>
            <Text style={styles.offDeal}>%18 off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.discountPrice}>1,55599 ₺</Text>
          <Text style={styles.actualPrice}>1.909 ₺</Text>
        </View>

        <Text style={styles.productName}>
          Nykaa Face Wash Gentle cleanser, moisturizing, refreshing, soothing,
          hydrating.
        </Text>
        <TouchableOpacity>
          <Text style={styles.allDeals}>See all deals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  bottomSection: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 5,
  },
  offDealBtn: {
    backgroundColor: "#be0201",
    padding: 5,
    borderRadius: 5,
  },
  offDeal: {
    fontSize: 12,
    color: "#fff",
  },

  deal: {
    color: "#be0201",
    fontWeight: 600,
    fontSize: 12,
  },
  discountPrice: {
    color: "#000",
    fontSize: 16,
  },
  actualPrice: {
    fontSize: 14,
    textDecorationLine: "line-through",
    color: "#be0201",
  },
  productName: {
    fontSize: 16,
    color: "#000",
  },
  allDeals: {
    fontSize: 14,
    color: "#017185",
    marginTop: 5,
  },
});
