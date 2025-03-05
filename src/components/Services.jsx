import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AmazonPay from "../assets/amazon-pay.png";
import SendMoney from "../assets/send-money.jpg";
import ScanQR from "../assets/scan-qr.jpeg";
import PayBills from "../assets/pay-bills.jpeg";
import ServiceCard from "./ServiceCard";
import { recentSearchData } from "../data/RecentSearchData";

const Services = () => {
  const servicesPay = [
    { image: AmazonPay, label: "Amazon Pay" },
    { image: SendMoney, label: "SendMoney" },
    { image: ScanQR, label: "Scan QR" },
    { image: PayBills, label: "Pay Bills" },
  ];
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 10 }}
    >
      <View style={styles.servisCard}>
        {servicesPay.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image style={styles.image} source={item.image} />
            <Text style={styles.label}>{item.label}</Text>
          </View>
        ))}
      </View>

      {recentSearchData.map((item) => (
        <ServiceCard key={item.id} item={item} />
      ))}
    </ScrollView>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    marginTop: -30,
    paddingHorizontal: 10,
  },
  servisCard: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 160,
    backgroundColor: "white",
    borderRadius: 8,
    zIndex: 90,
    marginHorizontal: 5,
  },
  card: {
    width: 80,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    flex: 1,
  },
  label: {
    fontSize: 10,
    marginTop: 2,
  },
});
