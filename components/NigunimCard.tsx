import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

interface NigunimCardProps {
  id: number | string;
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
  sessions: number;
  onPress: () => void;
}

const NigunimCard: React.FC<NigunimCardProps> = ({
  image,
  title,
  subtitle,
  sessions,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.nigunimCard} onPress={onPress}>
      <Image source={image} style={styles.nigunimImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.nigunimTitle}>{title}</Text>
        <Text style={styles.nigunimSubtitle}>{subtitle}</Text>
        <Text style={styles.nigunimSessions}>{sessions} sessions</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  nigunimCard: {
    width: 150,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    elevation: 3, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    overflow: "visible",
    margin: 10,
    marginTop: 50,
    height: 180,
  },
  nigunimImage: {
    width: "80%",
    height: 150,
    alignSelf: "center",
    borderRadius: 10,
    position: "absolute",
    top: -50,
    zIndex: 1,
  },
  infoContainer: {
    padding: 10,
    alignItems: "center",
    marginTop: 100,
  },
  nigunimTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  nigunimSubtitle: {
    fontSize: 14,
    color: "#777",
  },
  nigunimSessions: {
    fontSize: 12,
    color: "#999",
    marginTop: 5,
  },
});

export default NigunimCard;
