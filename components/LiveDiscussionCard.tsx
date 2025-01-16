import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

interface Viewer {
  profile: ImageSourcePropType;
}

interface LiveDiscussionCardProps {
  title: string;
  subTitle: string;
  author: string;
  viewers: Viewer[];
  liveMarkIcon: ImageSourcePropType;
}

const LiveDiscussionCard: React.FC<LiveDiscussionCardProps> = ({
  title,
  subTitle,
  author,
  viewers,
  liveMarkIcon,
}) => {
  return (
    <View style={styles.liveDiscussionCard}>
      <View style={styles.liveUpperView}>
        <Text style={styles.liveTitleText}>{title}</Text>
        <View style={styles.liveView}>
          <Image source={liveMarkIcon} style={styles.liveMarkIcon} />
          <Text style={styles.liveText}>Live</Text>
        </View>
      </View>
      <Text style={styles.liveSubTitleText}>{subTitle}</Text>
      <View style={styles.liveBottomView}>
        <Text style={styles.liveTitleText}>by {author}</Text>
        <View style={styles.avtarContainer}>
          {viewers.slice(0, 3).map((viewer, index) => (
            <View
              key={index}
              style={[
                styles.imageContainer,
                { marginLeft: index === 0 ? 0 : -15 },
              ]}
            >
              <Image source={viewer.profile} style={styles.profileImage} />
            </View>
          ))}
          {viewers.length > 3 && (
            <View style={[styles.extraCountContainer, { marginLeft: -15 }]}>
              <Text style={styles.extraCountText}>+{viewers.length - 3}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  liveDiscussionCard: {
    backgroundColor: "#EBF0F1",
    borderRadius: 20,
    marginBottom: 20,
  },
  avtarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  liveUpperView: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingLeft: 20,
    paddingTop: 20,
    justifyContent: "space-between",
  },
  imageContainer: {
    borderRadius: 25,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "white", // For overlap effect
  },
  profileImage: {
    width: 30,
    height: 30,
  },
  extraCountContainer: {
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  extraCountText: {
    color: "white",
    fontWeight: "bold",
  },
  liveBottomView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
  },
  liveTitleText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    color: "#5E626C",
  },
  liveSubTitleText: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    color: "#000000",
    width: "70%",
    paddingLeft: 20,
  },
  liveView: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  liveText: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 24,
    color: "#000000",
    paddingLeft: 5,
  },
  liveMarkIcon: {
    height: 10,
    width: 10,
    resizeMode: "contain",
  },
});

export default LiveDiscussionCard;
