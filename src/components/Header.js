import { Pressable, StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import { router } from "expo-router";
const Header = () => {
  const { state } = useContext(CartContext);
 
  
  return (
    <View style={styles.container}>
      <Text style={{ color: "white",marginLeft:150,fontSize:19,fontWeight:"900" }}>Shopping</Text>
      <Pressable style={styles.shop} onPress={()=>router.push('/ShoppingCart')}>
        <FontAwesome name="shopping-cart" size={30} style={styles.iconShop} />
        {state.itemsCounter > 0 && (
          <View style={styles.viewItemsCounter}>
            <Text style={styles.counter}>{state.itemsCounter}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "red",
    height: 50,
    width: "100%",
  },
  shop: {
    flexDirection: "row",
  
    marginRight: 10,

    alignContent: "center",
  },
  counter: {
    color: "white",
  },
  viewItemsCounter: {
    position: "absolute",
    right: 0,
    top: 0,
    borderRadius: 100,
    
  },
});
