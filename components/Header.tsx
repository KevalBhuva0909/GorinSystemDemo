import { Images } from "@/assets/icons";
import { Image } from "expo-image";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface HeaderProps {
  onLogoPress?: () => void; // Optional logo press handler
  onMenuPress: () => void; // Hamburger menu press handler
  notificationCount?: number; // Number of notifications
}

const Header: React.FC<HeaderProps> = ({
  onLogoPress,
  onMenuPress,
  notificationCount = 0,
}) => {
  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <TouchableOpacity style={styles.logoContainer} onPress={onLogoPress}>
        <Image source={Images.Logo} style={styles.logo} contentFit="contain" />
        {notificationCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {notificationCount > 99 ? "99+" : notificationCount}
            </Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Hamburger Menu */}
      <TouchableOpacity style={styles.menuButton} onPress={onMenuPress}>
        <Image source={Images.Menu} style={styles.logo} contentFit="contain" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    height: 60,
    backgroundColor: "#f9f9f9", // Change this to match your app theme
  },
  logoContainer: {
    position: "relative",
  },
  logo: {
    width: 30,
    height: 30,
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -9,
    backgroundColor: "#FF0000",
    borderRadius: 30,
    paddingHorizontal: 2,
    paddingVertical: 2,
    minWidth: 20,
    minHeight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  menuButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  menuLine: {
    width: 24,
    height: 2,
    backgroundColor: "#000",
    marginVertical: 2,
  },
});

export default Header;
