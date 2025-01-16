import { Images } from "@/assets/icons";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

interface DonationCardProps {
  title: string;
  onShareShiurim: () => void;
  onDonate: () => void;
}

const DonationCard: React.FC<DonationCardProps> = ({
  title,
  onShareShiurim,
  onDonate,
}) => {
  return (
    <ImageBackground
      source={Images.DonationBackground}
      style={styles.donationView}
    >
      <Text style={styles.donationTitleText}>{title}</Text>
      <TouchableOpacity style={styles.filledBtn} onPress={onShareShiurim}>
        <Text style={styles.btnText}>Share Shiurim</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.borderedBtn} onPress={onDonate}>
        <Text style={styles.btnText}>Donation</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  donationView: {
    height: 382,
    width: 335,
    resizeMode: "contain",
    alignSelf: "center",
    alignItems: "center",
    marginVertical: 50,
    justifyContent: "center",
  },
  donationTitleText: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 26,
    color: "#FFFFFF",
    width: "90%",
    textAlign: "center",
  },
  filledBtn: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 100,
    backgroundColor: "#F15223",
    marginTop: 45,
  },
  borderedBtn: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    marginTop: 25,
  },
  btnText: {
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 24,
    color: "#FFFFFF",
  },
});

export default DonationCard;
