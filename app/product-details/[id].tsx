import { StyleSheet, Text, View } from "react-native"
import React, { useEffect } from "react"
import { useLocalSearchParams } from "expo-router"
import axios from "axios"

type Props = {}

const ProductDetails = (props: Props) => {
  const { id } = useLocalSearchParams()

  useEffect(() => {
    getProductDetails()
  }, [])

  const getProductDetails = async () => {
    const URL = `http://192.168.2.70:8000/saleProducts`
    const response = await axios.get(URL)

    console.log(response.data)
  }
  return (
    <View>
      <Text>ProductDetails - {id}</Text>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({})
