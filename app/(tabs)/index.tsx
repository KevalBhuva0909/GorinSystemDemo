import { Images } from "@/assets/icons";
import ActionButtons from "@/components/ActionButtons";
import DonationCard from "@/components/DonationCard";
import Header from "@/components/Header";
import KidsCard from "@/components/KidsCard";
import LiveDiscussionCard from "@/components/LiveDiscussionCard";
import NigunimCard from "@/components/NigunimCard";
import QuoteSection from "@/components/QuoteSection";
import ThanksCard from "@/components/ThanksCard";
import {
  CarouselArray,
  KidsList,
  LiveDiscussion,
  NigunimList,
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

  const [selectedAction, setSelectedAction] = useState<string>("1");

  const handleRead = (id: number) => {
    console.log(`Read button clicked for card ID: ${id}`);
  };

  const handleCardPress = (id: number | string) => {
    console.log(`Nigunim Card pressed with ID: ${id}`);
  };

  const handleShareShiurim = () => {
    console.log("Share Shiurim button pressed!");
  };

  const handleDonate = () => {
    console.log("Donation button pressed!");
  };

  const handleReadMore = () => {
    console.log("Read more from tanks card button clicked!");
  };

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

        <View style={styles.container}>
          <ActionButtons
            OptionsTabs={OptionsTabs}
            selectedAction={selectedAction}
            setSelectedActionPress={(number) => {
              setSelectedAction(number);
            }}
          />
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
            {NigunimList?.slice(0, 2)?.map((item) => (
              <NigunimCard
                id={item.id}
                image={item.image}
                title={item.title}
                subtitle={item.purpose}
                sessions={item.noOfSession}
                onPress={() => handleCardPress(item.id)}
              />
            ))}
          </ScrollView>
        </View>

        <QuoteSection
          background={Images.QuotesBackground} // Replace with your actual image source
          icon={Images.QuotesIcon} // Replace with your actual image source
          quote={`"In that era, there will be neither famine or war, envy or competition, 
        for good will flow in abundance and all the delights will be freely available as dust. 
        The occupation of the entire world will be solely to know G-d."`}
          author="- Mishna Torah"
        />

        <View style={styles.section}>
          {/* Nigunim Section */}
          <View style={styles.sectionTitleView}>
            <Text style={styles.sectionTitle}>Nigunim</Text>
            <TouchableOpacity>
              <Text style={styles.viewMoreText}>View more</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {NigunimList?.slice(0, 2)?.map((item) => (
              <NigunimCard
                id={item.id}
                image={item.image}
                title={item.title}
                subtitle={item.purpose}
                sessions={item.noOfSession}
                onPress={() => handleCardPress(item.id)}
              />
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
              <LiveDiscussionCard
                key={item.id}
                title={item.title}
                subTitle={item.subTitle}
                author={item.author}
                viewers={item.viewers}
                liveMarkIcon={Images.LiveMark}
              />
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
              <KidsCard
                image={item.image}
                title={item.title}
                subtitle={item?.subtile}
                noOfSession={item.noOfSession}
                onRead={() => handleRead(item.id)}
              />
            ))}
          </ScrollView>
        </View>

        <DonationCard
          title="Help other Jews illuminate their lives by studying the Torah"
          onShareShiurim={handleShareShiurim}
          onDonate={handleDonate}
        />

        <ThanksCard
          title="Special thanks"
          subTitle="to Yossi Mandy Lerman"
          description="thanks to his generous donation, we can study in 'Shiurim' today."
          onReadMore={handleReadMore}
          arrowIcon={Images.RightArrow}
        />
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

  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
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
});

export default HomeScreen;
