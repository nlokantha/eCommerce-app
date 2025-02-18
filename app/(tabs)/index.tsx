import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { CategoryType, ProductType } from "@/types/type"
import { Stack } from "expo-router"
import Header from "@/components/Header"
import ProductItem from "@/components/ProductItem"
import { Colors } from "@/constants/Colors"
import ProductList from "@/components/ProductList"
import Categories from "@/components/Categories"
import FlashSale from "@/components/FlashSale"

type Props = {}

const HomeScreen = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [saleProducts, setSaleProducts] = useState<ProductType[]>([])
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    getCategories()
    getSaleProducts()
    getProducts()
  }, [])

  const getProducts = async () => {
    const URL = "http://192.168.2.70:8000/products"
    const response = await axios.get(URL)

    // console.log(response.data)
    setProducts(response.data)
    setIsLoading(false)
  }
  const getSaleProducts = async () => {
    const URL = "http://192.168.2.70:8000/saleProducts"
    const response = await axios.get(URL)

    // console.log(response.data)
    setSaleProducts(response.data)
    setIsLoading(false)
  }
  const getCategories = async () => {
    const URL = "http://192.168.2.70:8000/categories"
    const response = await axios.get(URL)

    // console.log(response.data)
    setCategories(response.data)
    setIsLoading(false)
  }

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size={"large"} />
      </View>
    )
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories categories={categories} />
        <FlashSale products={saleProducts} />
        <View style={{ marginHorizontal: 20, marginBottom: 10 }}>
          <Image
            source={require("../../assets/images/sale-banner.jpg")}
            style={styles.banner}
          />
        </View>
        <ProductList products={products} flatlist={false} />
      </ScrollView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 150,
    borderRadius: 15,
  },
})
