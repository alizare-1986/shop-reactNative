import {
  
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getProducts } from "../data/api";
import { useContext, useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { isInCart, quantityCount, shorten } from "../helper/functions";
import { CartContext } from "../context/CartContextProvider";
import FontAwesome from '@expo/vector-icons/FontAwesome'

const ProductsScreen = () => {
  const { state, dispatch } = useContext(CartContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      setData(await getProducts());
    };
    fetch();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{shorten(item.title)}</Text>
            <Text>{item.price} $</Text>
            <View style={styles.buttonContainer}>
              {quantityCount(state, item.id) === 1 && (
             
              <FontAwesome name="trash" onPress={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: item })} style={styles.trash}/>
                
              )}
              {quantityCount(state, item.id) > 1 && (
                <Pressable
                  onPress={() => dispatch({ type: "DECREASE", payload: item })}
                >
                  <Text>-</Text>
                </Pressable>
              )}
              {quantityCount(state, item.id) > 0 && (
                <Text>{quantityCount(state, item.id)}</Text>
              )}

              {isInCart(state, item.id) ? (
                <Pressable
                  onPress={() => dispatch({ type: "INCREASE", payload: item })}
                >
                  <Text>+</Text>
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => dispatch({ type: "ADD_ITEM", payload: item })}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>add to cart</Text>
                </Pressable>
              )}
            </View>

            {/* <Link href={`/productsId/${item.id}`}>Deatails</Link> */}

            <Pressable
              onPress={() => router.push(`/productsId/${item.id}`)}
              style={styles.butonDetails}
            >
              <Text style={styles.titleDetails}>Deatails</Text>
            </Pressable>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default ProductsScreen;
const styles = StyleSheet.create({
  container: {},
  itemContainer: {
    width: "47%",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "violet",
    margin: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 30,
    objectFit: "contain",
  },
  title: {
    fontSize: 10,
    fontWeight: "800",
    marginTop: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems:"center",
    
  },
  button: {
    backgroundColor: "black",
    marginTop: 5,
    width: "90%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "800",
    fontSize: 10,
  },
  butonDetails: {
    borderRadius: 50,
    backgroundColor: "black",
    width: "50%",
    marginTop: 10,
    position: "relative",
    marginRight: 60,
    alignItems: "center",
    justifyContent: "center",

    height: 18,
  },
  titleDetails: {
    color: "green",
    fontSize: 12,
    fontWeight: "600",
  },
});
