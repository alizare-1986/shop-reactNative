import { StyleSheet, View } from "react-native";
import ProductsScreen from "../src/screen/ProductsScreen";
import Header from "../src/components/Header";

export default function Home() {
  return (
    
      <View style={styles.container}>
        <Header />
        <ProductsScreen />

      </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    alignItems: "center",
  },
});
