import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { CartContext } from "../src/context/CartContextProvider";
import Card from "../src/components/Card";
import Header from "../src/components/Header";
import { Link, router } from "expo-router";

const ShoppingCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Card dataCart={state.selectedItems} />
        <View style={styles.containerBox}>
          <View style={styles.contentTitle}>
            <Text style={styles.titleTP}>
              items count: {state.itemsCounter}
            </Text>
            <Text style={styles.titleTP}>total price: {state.total}$</Text>
          </View>
          {state.itemsCounter === 0 && !state.checkout && (
            <View style={styles.complete}>
              <Text style={styles.titleComplete}> New purchase</Text>
              <Link style={styles.link} href="/">shopping</Link>
            </View>
          )}

          {state.checkout && (
            <View style={styles.complete}>
              <Text style={styles.titleComplete}>The purchase was made successfully</Text>
              <Link style={styles.link} href="/"> shopping</Link>
            </View>
          )}
          <View style={styles.contentButton}>
            <Pressable
              style={styles.buy}
              onPress={() => dispatch({ type: "CLEAR" })}
            >
              <Text style={styles.titleBuy}>stop Buying</Text>
            </Pressable>
            <Pressable
              style={styles.buy}
              onPress={() => dispatch({ type: "CHECKOUT" })}
            >
              <Text style={styles.titleBuy}>Buy</Text>
            </Pressable>
          </View>
         
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
  },
  content: {
    flexDirection: "row",
    height: "100%",
  },
  containerBox: {
    backgroundColor: "silver",
    width: "45%",
    marginTop: 50,
    height: 300,
    borderRadius: 30,
    padding: 10,
    justifyContent:"space-between"
  },
  contentTitle: {
    marginTop:20,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 15,
   
  },
  titleTP: {
    fontSize: 15,
    color: "white",
    fontWeight: "500",
    left:7,
    margin:2
  },
  contentButton:{
    flexDirection:"row",
    marginBottom:20,
    justifyContent:"space-between"
  },
  buy:{
    borderRadius:20,
    backgroundColor:"green",
    padding:10,
   
    
  },
  titleBuy:{
    fontWeight:"600"
  },
  complete:{
    padding:15,backgroundColor:"black",borderRadius:10,
  },
  titleComplete:{
    color:"white",
    fontSize:8
  },
  link:{
    color:"blue",
    marginTop:10
  }
});
export default ShoppingCart;
