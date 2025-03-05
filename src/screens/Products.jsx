import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { productData } from "../data/ProductData";
import PrimeLogo from "../assets/prime-logo.png";
import { getRating } from "../utils/helper";

const Products = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Results</Text>
      <Text style={styles.tagLine}>
        Price and other details may very based on products aside and color
      </Text>

      <View style={styles.productContainer}>
        {productData.map((item) => (
          <View key={item.id} style={styles.productCard}>
            <View style={styles.imageWrapper}>
              <Image style={styles.productImage} source={item.image} />
            </View>
            <View style={styles.productBody}>
              <View style={styles.productDetailSection}>
                <Text style={styles.sponsored}>Sponsored</Text>
                <Text numberOfLines={3} style={styles.productName}>
                  {item.productName}
                </Text>

                <View style={styles.row}>
                  <Text style={styles.rating}>{item.rating} </Text>
                  {getRating(item.rating)}
                  <Text style={styles.ratingCount}>{item.ratingCount}</Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.price}>{item.price}</Text>
                  <Text style={styles.crossout}>{item.crossOutText}</Text>
                </View>

                <Text style={styles.cashback}>
                  Up to 5% cashback with Amazon Pay Credit card
                </Text>

                <Image source={PrimeLogo} style={styles.logo} />

                <Text style={styles.cashback}>
                  FREE Delivery by {item.deliveryBy}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
  },
  tagLine: {
    fontSize: 10,
    color: "gray",
  },
  productContainer: {
    marginVertical: 20,
    gap: 20,
  },
  productCard: {
    borderWidth: 1,
    borderColor: "#dddddddd",
    flexDirection: "row",
    flex: 1,
  },
  productBody: {
    flex: 6,

    padding: 10,
  },
  imageWrapper: {
    backgroundColor: "#dddddddd",
    flex: 4,
    padding: 10,
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    margin: "auto",
  },
  sponsored: {
    fontSize: 11,
    color: "#000000",
  },
  productName: {
    fontSize: 12,
    color: "#000000",
    lineHeight: 18,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  rating: {
    fontSize: 10,
    color: "#017185",
    marginRight: 5,
  },
  ratingCount: {
    marginLeft: 5,
    fontSize: 10,
    color: "#017185",
  },
  price: {
    fontSize: 16,
    color: "#000000",
    marginRight: 5,
  },
  crossout: {
    fontSize: 10,
    color: "gray",
  },
  cashback: {
    fontSize: 9,
    marginVertical: 3,
  },
  logo: {
    height: 16,
    width: 42,
    marginVertical: 3,
  },
});
