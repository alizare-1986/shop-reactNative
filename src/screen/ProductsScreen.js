import {
  
 
  StyleSheet,

  View,
} from "react-native";
import { getProducts } from "../data/api";
import {  useEffect, useState } from "react";



import Card from "../components/Card";

const ProductsScreen = () => {
  

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      setData(await getProducts());
    };
    fetch();
  }, []);

  return (
    <View style={styles.container}>
     <Card data={data}/>
    </View>
  );
};

export default ProductsScreen;
const styles = StyleSheet.create({
  container: {
   
  },
  
});
