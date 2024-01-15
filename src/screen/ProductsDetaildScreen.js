import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getProductsId } from "../data/api";

const ProductsDetaildScreen = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      setProduct(await getProductsId(15));
    };
    fetch();
  }, []);
const addToCart=()=>{
  console.log('add to cart');
  
}
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={{ uri: product.image }} style={styles.image} />

        <View style={styles.viewContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>$ : {product.price}</Text>
          <Text style={styles.category}>Category : {product.category}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>add to cart</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 45,
    alignItems: "center",
    justifyContent: "center",
    flex:1
 
  },

  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  viewContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color:"white"
   
  },
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    letterSpacing: 1.5,
    fontSize: 16,
    fontWeight: "500",
  },
  category: {
    fontSize: 16,
    fontWeight: "500",
    color: "green",
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
    padding: 10,
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 20,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "800",
    fontSize: 16,
  },
});
export default ProductsDetaildScreen;
