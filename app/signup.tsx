import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import InputField from "@/components/InputField";

const SignUpScreen = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Sign Up",
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginRight: 20 }}
              onPress={() => router.back()}
            >
              <Ionicons name="close" size={24} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Create An Account</Text>
        <InputField
          placeholder="Email Address"
          placeholderTextColor={Colors.black}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <InputField
          placeholder="Password"
          placeholderTextColor={Colors.black}
          secureTextEntry={true}
        />
        <InputField
          placeholder="Confirm Password"
          placeholderTextColor={Colors.black}
          secureTextEntry={true}
        />

        <TouchableOpacity onPress={()=>router.push("/(tabs)")} style={styles.button}>
          <Text style={styles.btnTxt}>Create An Account</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", marginTop: 30, gap: 5 }}>
          <Text style={styles.loginTxt}>Already have an Account ?</Text>
          <TouchableOpacity onPress={() => router.push("/signin")}>
            <Text style={styles.loginTxtSpan}>SignIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    letterSpacing: 1.2,
    marginBottom: 50,
    fontWeight: "600",
    color: Colors.black,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
  },
  btnTxt: {
    color: Colors.white,
    fontWeight: "600",
    fontSize: 16,
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
