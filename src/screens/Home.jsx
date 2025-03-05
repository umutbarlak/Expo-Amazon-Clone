import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import Deals from "../components/Deals";
import Brands from "../components/Brands";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Header />
        <Categories />
        <Carousel />
        <Services />
        <Deals />
        <Brands />
      </ScrollView>
    </View>
  );
};

export default Home;
