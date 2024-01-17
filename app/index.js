import { StyleSheet,  View } from "react-native";
import ProductsScreen from "../src/screen/ProductsScreen";

export default function Home() {
  return (
    <View style={styles.container}>
      <ProductsScreen/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  backgroundColor:"black",
   
    
  },
 
});
