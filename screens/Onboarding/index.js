import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import colors from "../../assets/colors";
import styles from "./styles";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import OnboardingCard from "../../components/OnboardingCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function Onboarding() {
  const navigation = useNavigation();

  const handleCompleteSetUp = () => {
    AsyncStorage.setItem("@APP_SET_CONFIG", "true").then(() => {
      navigation.navigate("TabNavigator");
    });
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: Dimensions.get("screen").width * 0.08,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: Dimensions.get("screen").width * 0.08,
        }}
      >
        Welcome to Paris+ !
      </Text>

      <OnboardingCard
        icon={"toilet"}
        iconType={"fa5"}
        title={"Looking for the toilets?"}
        description={"Find hours, disabled access & babies"}
      />
      <OnboardingCard
        icon={"wifi"}
        iconType={"fa5"}
        title={"Need an internet connection?"}
        description={"Find public WI-FI near you (+200 terminals)"}
      />
      <OnboardingCard
        icon={"fountain"}
        iconType={"mci"}
        title={"A little thirsty?"}
        description={"Find public fountains near you"}
      />

      <Text style={{ textAlign: "center", fontSize: 18, marginTop: 20 }}>
        And a lot more coming...
      </Text>

      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 40,
          alignSelf: "center",
          width: "100%",
          height: 45,
          backgroundColor: colors.active,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => handleCompleteSetUp()}
      >
        <Text
          style={{
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 16,
            color: "white",
          }}
        >
          Let's go! 🥳
        </Text>
      </TouchableOpacity>
    </View>
  );
}
