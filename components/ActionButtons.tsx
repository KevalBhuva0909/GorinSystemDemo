import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

interface ActionButtonsProps {
  OptionsTabs: { id: string; image: any; title: string }[];
  selectedAction: string;
  setSelectedActionPress: (id: string) => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  OptionsTabs,
  selectedAction,
  setSelectedActionPress,
}) => {
  return (
    <View style={styles.actionButtonsSection}>
      {OptionsTabs.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.actionBtnParent}
          onPress={() => {
            setSelectedActionPress(item.id);
          }}
        >
          <View style={styles.actionButton}>
            <Image
              source={item.image}
              style={[
                styles.actionIcon,
                {
                  tintColor: selectedAction === item.id ? "#081638" : "#5E626C",
                },
              ]}
            />
          </View>
          <Text
            style={[
              styles.actionButtonText,
              {
                color: selectedAction == item.id ? "#081638" : "#5E626C",
              },
            ]}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  actionButtonsSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 30,
    paddingHorizontal: 25,
  },
  actionBtnParent: {
    alignItems: "center",
  },
  actionButton: {
    height: 72,
    width: 72,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  actionIcon: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10,
  },
});

export default ActionButtons;
