import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import { Colors } from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { ProductType } from "@/types/type"
import ProductItem from "./ProductItem"

type Props = {
  products: ProductType[]
}

const FlashSale = ({ products }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <View style={styles.timerWrapper}>
          <Text style={styles.title}>Flash Sale</Text>
          <View style={styles.timer}>
            <Ionicons name="time-outline" size={16} color={Colors.black} />
            <Text style={styles.timerTxt}>00:00:00:00</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.titleBtn}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginLeft: 20, paddingRight: 20 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 20 }}>
            <ProductItem index={index} item={item} />
          </View>
        )}
      />
    </View>
  )
}

export default FlashSale

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.6,
    color: Colors.black,
  },
  titleBtn: {
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.6,
    color: Colors.black,
  },
  timerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  timer: {
    flexDirection: "row",
    gap: 5,
    backgroundColor: Colors.highlight,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  timerTxt: {
    color: Colors.black,
    fontWeight: "500",
  },
})
