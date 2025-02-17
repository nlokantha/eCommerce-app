import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

const WelcomeScreen = () => {
  const router = useRouter();
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="auto" />
      <ImageBackground
        source={require("./../assets/images/ecommerce-splash.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <LinearGradient
            colors={[
              "transparent",
              "rgba(255,255,255,0.9)",
              "rgba(255,255,255,1)",
            ]}
            style={styles.background}
          >
            <View style={styles.wrapper}>
              <Animated.Text
                style={styles.title}
                entering={FadeInRight.delay(300).duration(300).springify()}
              >
                ShopX
              </Animated.Text>
              <Animated.Text
                style={styles.description}
                entering={FadeInRight.delay(500).duration(300).springify()}
              >
                One Stop Soluations for All Your Needs
              </Animated.Text>

              <View style={styles.socialLoginWrapper}>
                <Animated.View entering={FadeInDown.delay(300).duration(500)}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.push("/signup")}
                  >
                    <Ionicons
                      name="mail-outline"
                      size={20}
                      color={Colors.black}
                    />
                    <Text style={styles.btnTxt}>Continue With Email</Text>
                  </TouchableOpacity>
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(700).duration(500)}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.push("/signup")}
                  >
                    <Ionicons
                      name="logo-google"
                      size={20}
                      color={Colors.black}
                    />
                    <Text style={styles.btnTxt}>Continue With Google</Text>
                  </TouchableOpacity>
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(1100).duration(500)}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.push("/signup")}
                  >
                    <Ionicons
                      name="logo-apple"
                      size={20}
                      color={Colors.black}
                    />
                    <Text style={styles.btnTxt}>Continue With Apple</Text>
                  </TouchableOpacity>
                </Animated.View>
              </View>
              <View style={{ flexDirection: "row", marginTop: 30, gap: 5 }}>
                <Text style={styles.loginTxt}>Already have an Account ?</Text>
                <TouchableOpacity onPress={() => router.push("/signin")}>
                  <Text style={styles.loginTxtSpan}>SignIn</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "flex-end",
  },
  wrapper: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: Colors.primary,
    fontWeight: "700",
    letterSpacing: 2.4,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: Colors.gray,
    letterSpacing: 1.2,
    lineHeight: 30,
    marginBottom: 20,
  },
  socialLoginWrapper: {
    alignSelf: "stretch",
  },
  button: {
    flexDirection: "row",
    padding: 10,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    borderRadius: 25,
    marginBottom: 15,
  },
  btnTxt: {
    fontSize: 14,
    fontWeight: 600,
    color: Colors.black,
  },
  loginTxt: {
    fontSize: 14,
    color: Colors.black,
  },
  loginTxtSpan: {
    color: Colors.primary,
    fontWeight: "600",
  },
});
