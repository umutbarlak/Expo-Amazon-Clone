import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { carouselData } from "../data/Carousel";

const { width } = Dimensions.get("window");

const Carousel = () => {
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} autoplay={true} showsPagination={false}>
        {carouselData.map((item) => (
          <Image key={item.id} style={styles.image} source={item.image} />
        ))}
      </Swiper>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    height: 220,
  },
  wrapper: {},
  image: {
    width: width,
    height: 220,
  },
});
