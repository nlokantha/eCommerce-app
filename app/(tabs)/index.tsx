import { FlatList, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { ProductType } from "@/types/type"
import { Stack } from "expo-router"
import Header from "@/components/Header"

type Props = {}

const HomeScreen = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const URL = "http://192.168.2.70:8000/products"
    const response = await axios.get(URL)

    console.log(response.data)
    setProducts(response.data)
    setIsLoading(false)
  }
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => <Text>{item.title}</Text>}
        />
      </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
