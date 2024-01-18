import { StyleSheet, View } from "react-native";
import ProductsScreen from "../src/screen/ProductsScreen";
import CartContextProvider from "../src/context/CartContextProvider";

export default function Home() {
  return (
    <CartContextProvider>
      <View style={styles.container}>
        <ProductsScreen />
      </View>
    </CartContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
});
