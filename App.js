import { StatusBar } from "expo-status-bar";
import {  StyleSheet,  View } from "react-native";
import ProductsScreen from "./src/screen/ProductsScreen";
import ProductsDetaildScreen from "./src/screen/ProductsDetaildScreen";


export default function App() {

 
  return (
    <View style={styles.container}>
    {/* <ProductsScreen/> */}
    <ProductsDetaildScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",


  },
 
 
});
