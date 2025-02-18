import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Colors } from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { Link } from "expo-router"

type Props = {}

const ios = Platform.OS == "ios"

const Header = (props: Props) => {
  const insets = useSafeAreaInsets()
  return (
    <View
      style={[
        styles.container,
        { paddingTop: ios ? insets.top : insets.top + 20 },
      ]}>
      <Text style={styles.logo}>SX</Text>
      <Link href={"/explore"} asChild>
        <TouchableOpacity style={styles.searchBar}>
          <Text style={styles.searchTxt}>Search</Text>
          <Ionicons name="search-outline" size={20} color={Colors.gray} />
        </TouchableOpacity>
      </Link>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingBottom: 10,
    gap: 15,
  },
  logo: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.primary,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: Colors.background,
    flex: 1,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  searchTxt: {
    color: Colors.black,
  },
})
