import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

interface ThanksCardProps {
  title: string;
  subTitle: string;
  description: string;
  onReadMore: () => void;
  arrowIcon: any;
}

const ThanksCard: React.FC<ThanksCardProps> = ({
  title,
  subTitle,
  description,
  onReadMore,
  arrowIcon,
}) => {
  return (
    <View style={styles.thanksCard}>
      <Text style={styles.thanksTitle}>{title}</Text>
      <Text style={styles.thanksSubTitle}>{subTitle}</Text>
      <Text style={styles.thanksSubText}>{description}</Text>
      <TouchableOpacity style={styles.readMoreBtn} onPress={onReadMore}>
        <Text style={styles.readMoreText}>Read more</Text>
        <Image source={arrowIcon} style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  thanksCard: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 25,
    paddingVertical: 25,
  },
  arrowIcon: {
    height: 14,
    width: 14,
    resizeMode: "contain",
  },
  thanksTitle: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
    color: "#F15223",
  },
  thanksSubTitle: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#000000",
  },
  thanksSubText: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 22,
    color: "#5E626C",
    textAlign: "center",
    width: "65%",
    marginVertical: 10,
  },
  readMoreBtn: {
    width: "30%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: "#F15223",
  },
  readMoreText: {
    fontWeight: "500",
    fontSize: 10,
    lineHeight: 12,
    color: "#FFFFFF",
    paddingRight: 5,
  },
});

export default ThanksCard;
