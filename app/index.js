import { StyleSheet, View } from "react-native";
import ProductsScreen from "../src/screen/ProductsScreen";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <ProductsScreen />
<View style={{bottom:120,width:"95%"}}>
      <Footer /></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    alignItems: "center",
    height: "100%",
    flexDirection:"column"

    
  },
});
