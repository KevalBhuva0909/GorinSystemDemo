import { Images } from "@/assets/icons";
import Header from "@/components/Header";
import {
  CarouselArray,
  KidsList,
  LiveDiscussion,
  OptionsTabs,
} from "@/constants/ConstantArrays";
import { ImageBackground } from "expo-image";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Alert,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const HomeScreen = () => {
  const width = Dimensions.get("window").width;

  const [selectedAction, setSelectedAction] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        onLogoPress={() => Alert.alert("Logo pressed")}
        onMenuPress={() => Alert.alert("Menu pressed")}
        notificationCount={5}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 100 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerSection}>
          <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data={CarouselArray}
            scrollAnimationDuration={1000}
            renderItem={({ index, item }) => (
              <ImageBackground
                source={item.image}
                style={styles.headerImage}
                contentFit="contain"
              >
                <View style={styles.imageContentStyle}>
                  <Text style={styles.titleText}>{item?.title}</Text>
                  <Text style={styles.subText}>{item?.date}</Text>
                  <Text style={styles.subText}>{item?.subText}</Text>
                </View>
              </ImageBackground>
            )}
          />
        </View>

        <View style={styles.actionButtonsSection}>
          {OptionsTabs.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.actionBtnParent}
              onPress={() => {
                setSelectedAction(item?.id);
              }}
            >
              <View style={styles.actionButton}>
                <Image
                  source={item.image}
                  style={[
                    styles.actionIcon,
                    {
                      tintColor:
                        selectedAction == item?.id ? "#081638" : "#5E626C",
                    },
                  ]}
                />
              </View>
              <Text
                style={[
                  styles.actionButtonText,
                  { color: selectedAction == item?.id ? "#081638" : "#5E626C" },
                ]}
              >
                {item?.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          {/* Shiurim Section */}
          <View style={styles.sectionTitleView}>
            <Text style={styles.sectionTitle}>Shiurim</Text>
            <TouchableOpacity>
              <Text style={styles.viewMoreText}>View more</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {["Jumash", "Tania", "Rambam", "Hayom"].map((item) => (
              <View key={item} style={styles.card}>
                <Text style={styles.cardTitle}>{item}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.quoteSection}>
          {/* Quote Section */}
          <ImageBackground
            source={Images.QuotesBackground}
            style={styles.quotesBackgroundImage}
          >
            <Image source={Images.QuotesIcon} style={styles.quotesIcon} />
            <Text style={styles.quote}>
              "In that era, there will be neither famine or war, envy or
              competition, for good will flow in abundance and all the
              delightswill be freely available as dust. The occupation of the
              entire world will be solerly to know G-d."
            </Text>
            <Text style={styles.quoteAuthor}>- Mishna Torah</Text>
          </ImageBackground>
        </View>

        <View style={styles.section}>
          {/* Nigunim Section */}
          <View style={styles.sectionTitleView}>
            <Text style={styles.sectionTitle}>Nigunim</Text>
            <TouchableOpacity>
              <Text style={styles.viewMoreText}>View more</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {["Relaxing", "Chabad Nigunim"].map((item) => (
              <View key={item} style={styles.card}>
                <Text style={styles.cardTitle}>{item}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          {/* Live Discussion Section */}
          <View style={styles.sectionTitleView}>
            <Text style={styles.sectionTitle}>Live group discussion</Text>
            <TouchableOpacity>
              <Text style={styles.viewMoreText}>View more</Text>
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {LiveDiscussion.slice(0, 2).map((item, index) => (
              <View style={styles.liveDiscussionCard}>
                <View style={styles.liveUpperView}>
                  <Text style={styles.liveTitleText}>{item?.title}</Text>
                  <View style={styles.liveView}>
                    <Image
                      source={Images.LiveMark}
                      style={styles.liveMarkIcon}
                    />
                    <Text style={styles.liveText}>Live</Text>
                  </View>
                </View>
                <Text style={styles.liveSubTitleText}>{item?.subTitle}</Text>
                <View style={styles.liveBottomView}>
                  <Text style={styles.liveTitleText}>by {item.author}</Text>
                  <View style={styles.avtarContainer}>
                    {item?.viewers?.slice(0, 3).map((items, index) => (
                      <View
                        key={index}
                        style={[
                          styles.imageContainer,
                          { marginLeft: index === 0 ? 0 : -15 },
                        ]}
                      >
                        <Image
                          source={items?.profile}
                          style={styles.profileImage}
                        />
                      </View>
                    ))}
                    {item?.viewers?.length - 3 > 0 && (
                      <View
                        style={[
                          styles.extraCountContainer,
                          { marginLeft: -15 },
                        ]}
                      >
                        <Text style={styles.extraCountText}>
                          +{item?.viewers?.length - 3}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          {/* Kids Section */}
          <View style={styles.sectionTitleView}>
            <Text style={styles.sectionTitle}>Kids</Text>
            <TouchableOpacity>
              <Text style={styles.viewMoreText}>View more</Text>
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {KidsList.slice(0, 2).map((item, index) => (
              <View style={styles.card}>
                <View style={styles.imageViewOfKids}>
                  <Image source={item.image} style={styles.image} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>{item.subtile}</Text>
                  <Text style={styles.sessions}>
                    {item.noOfSession} session
                  </Text>
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Read →</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>

        <ImageBackground
          source={Images.DonationBackground}
          style={styles.donationView}
        >
          <Text style={styles.donationTitleText}>
            Help other Jews illuminate their lives by studying the Torah
          </Text>
          <TouchableOpacity style={styles.filledBtn}>
            <Text style={styles.btnText}>Share Shiurim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.borderedBtn}>
            <Text style={styles.btnText}>Donation</Text>
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.thanksCard}>
          <Text style={styles.thanksTitle}>Special thanks</Text>
          <Text style={styles.thanksSubTitle}>to Yossi Mandy Lerman</Text>
          <Text style={styles.thanksSubText}>
            thanks to his generous donation, we can stydy in “Shiurim” today.
          </Text>
          <TouchableOpacity style={styles.readMoreBtn}>
            <Text style={styles.readMoreText}>Read more</Text>
            <Image source={Images.RightArrow} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  headerSection: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContentStyle: {
    paddingVertical: 20,
    paddingHorizontal: 50,
    justifyContent: "center",
    height: "100%",
  },
  titleText: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "500",
    lineHeight: 26,
    marginBottom: 10,
  },

  subText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "400",
    lineHeight: 26,
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
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
  section: {
    padding: 10,
    paddingHorizontal: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    lineHeight: 24,
    color: "#000000",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
    paddingBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
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
  quoteSection: {
    backgroundColor: "#EBF0F1",
    paddingVertical: 30,
  },
  quotesBackgroundImage: {
    height: 300,
    width: "100%",
    resizeMode: "contain",
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  quotesIcon: {
    height: 30,
    width: 30,
    resizeMode: "contain",
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
  sectionTitleView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  viewMoreText: {
    color: "#5E626C",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 24,
  },
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

export default HomeScreen;
