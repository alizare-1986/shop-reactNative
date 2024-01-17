
import {  FlatList, Image, StyleSheet,  Text,  View } from "react-native";
import { getProducts } from "../data/api"
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { shorten } from "../helper/functions";
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
      <Text style={styles.title}>{shorten(item.title)}</Text>
      <Link href={`/productsId/${item.id}`}>Deatails</Link>
      </View>
    )}
    numColumns={2}
   
    />
   
    </View>
    );
};

export default ProductsScreen;
const styles = StyleSheet.create({
   container:{
  
    

   },
    itemContainer:{
      width:"47%",
      padding:10,
      borderRadius:20,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"violet",
      margin:5
     
      
      
     
    },
    image:{
      width:"100%",
      aspectRatio:1,
     borderRadius:30,
      objectFit:"contain",
      
      
      
    },
    title:{
      fontSize:10,
      fontWeight:"800",
   marginTop:20,
     

    }
})