import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.image}  
        source={require("../../assets/images/ModelX.jpeg")}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Modal S</Text>
        <Text style={styles.subTitle}>Starting at $69,420</Text>
      </View>
    </View>
  );
};

export default CarItem;
