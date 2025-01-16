import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

interface QuoteSectionProps {
  background: ImageSourcePropType;
  icon: ImageSourcePropType;
  quote: string;
  author: string;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({
  background,
  icon,
  quote,
  author,
}) => {
  return (
    <View style={styles.quoteSection}>
      <ImageBackground source={background} style={styles.quotesBackgroundImage}>
        <View
          style={{ width: "100%", paddingHorizontal: 50, paddingVertical: 20 }}
        >
          <Image source={icon} style={styles.quotesIcon} />
          <Text style={styles.quote}>{quote}</Text>
          <Text style={styles.quoteAuthor}>{author}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  quote: {
    fontSize: 14,
    fontStyle: "italic",
    marginVertical: 20,
    fontWeight: "400",
    color: "#000000B2",
    lineHeight: 26,
  },
  quoteAuthor: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000000",
    lineHeight: 26,
  },
  quoteSection: {
    backgroundColor: "#EBF0F1",
    paddingVertical: 30,
  },
  quotesBackgroundImage: {
    height: 300,
    width: "100%",
    resizeMode: "contain",
  },
  quotesIcon: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
});

export default QuoteSection;
