import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { categories } from "../data/Categories";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../utils/router";

const Categories = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate(SCREENS.PRODUCTSCREEN)}
          style={styles.category}
        >
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  category: {
    paddingHorizontal: 8,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {},
});
