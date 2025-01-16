import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

interface CardProps {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
  noOfSession: number;
  onRead: () => void;
}

const KidsCard: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  noOfSession,
  onRead,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageViewOfKids}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.sessions}>{noOfSession} session</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onRead}>
        <Text style={styles.buttonText}>Read →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
    paddingBottom: 15,
  },
  imageViewOfKids: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    height: 80,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginVertical: 4,
  },
  sessions: {
    fontSize: 12,
    color: "#999",
  },
  button: {
    height: 80,
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "absolute",
    right: 0,
  },
  buttonText: {
    color: "#F15223",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default KidsCard;
