
import {  FlatList, Image, StyleSheet,  View } from "react-native";
import { getProducts } from "../data/api"
import { useEffect, useState } from "react";
const ProductsScreen = () => {
    const [data,setData]=useState([])

    useEffect(() => {
     const fetch=async()=>{
      setData(await getProducts())
     }
     fetch()
    }, []);
    return (
      <View style={styles.container}>
        <FlatList
    data={data}
    renderItem={({item})=>(
      <View style={styles.itemContainer}>
      <Image source={{uri:item.image}} style={styles.image}/>
      </View>
    )}
    numColumns={2}
    /></View>
    );
};

export default ProductsScreen;
const styles = StyleSheet.create({
   container:{
   justifyContent:"center",
   alignItems:"center",
   marginTop:25
   },
    itemContainer:{
      width:"50%",
      padding:10,
      
     
    },
    image:{
      width:"100%",
      aspectRatio:1,
      marginBottom:5,
      
    },
})