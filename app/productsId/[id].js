import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getProductsId } from "../../src/data/api";
import { Link, useLocalSearchParams } from "expo-router";
import { shorten } from "../../src/helper/functions";
import Header from "../../src/components/Header";



const ProductsDetaildScreen = () => {
  const params = useLocalSearchParams();

  const id = params.id;

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      setProduct(await getProductsId(id));
    };
    fetch();
  }, []);

  const addToCart = () => {
    console.log("add to cart");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Header />
      </View>
      {/* <View style={styles.header}>
        <Text style={styles.back}>
          <Link href={"/"}>back</Link>
        </Text>
        <Text style={styles.headerTitle}>
          {!product.title ? (
            <Text>...Loading</Text>
          ) : (
            <Text>{shorten(product.title)}</Text>
          )}
        </Text>
      </View> */}
      <ScrollView>
        <Image source={{ uri: product.image }} style={styles.image} />

        <View style={styles.viewContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>$ : {product.price}</Text>
          <Text style={styles.category}>Category : {product.category}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      {/* <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>add to cart</Text>
      </Pressable> */}
    </View>
  );
};
const styles = StyleSheet.create({
  header:{
    width:"100%"
  },
  container: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    flex:1
  },
  // header: {
  //   width: "97%",
  //   borderRadius: 10,
  //   backgroundColor: "black",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   height: 40,
  //   alignItems: "center",
  // },
  // back: {
  //   color: "white",
  //   marginLeft: 15,
  //   fontSize: 16,
  //   fontWeight: "500",
  // },
  // headerTitle: {
  //   color: "white",
  //   marginRight: 150,
  //   fontSize: 16,
  //   fontWeight: "900",
  //   letterSpacing: 1.5,
  // },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
    marginTop:10
  },
  viewContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
    color: "white",
  },
  price: {
    letterSpacing: 1.5,
    fontSize: 16,
    fontWeight: "500",
    color: "white",
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
    color: "white",
  },
  // button: {
  //   position: "absolute",
  //   backgroundColor: "black",
  //   bottom: 20,
  //   width: "90%",
  //   alignSelf: "center",
  //   padding: 20,
  //   borderRadius: 100,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // buttonText: {
  //   color: "white",
  //   fontWeight: "800",
  //   fontSize: 16,
  // },
});
export default ProductsDetaildScreen;
