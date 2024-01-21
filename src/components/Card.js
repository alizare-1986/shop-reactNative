import {
  
    FlatList,
    Image,
   
    Pressable,
    StyleSheet,
    Text,
    View,
  } from "react-native";
import { router } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { isInCart, quantityCount, shorten } from "../helper/functions";
import { CartContext } from "../context/CartContextProvider";
import { useContext } from "react";


const Card = ({data,dataCart}) => {
    const { state, dispatch } = useContext(CartContext);
  
    return (
      <>
        <View style={{marginBottom:120}}>
         <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Pressable onPress={()=>router.push(`/productsId/${item.id}`)}   style={styles.details}>
                
             
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{shorten(item.title)}</Text>
            <Text>{item.price} $</Text></Pressable>
            <View style={styles.buttonContainer}>
              {quantityCount(state, item.id) === 1 && (
             <View style={styles.buttonHandle}>
              <FontAwesome name="trash" onPress={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: item })} style={styles.trash} size={17}/>
                </View>
              )}
              {quantityCount(state, item.id) > 1 && (
                <Pressable
                  onPress={() => dispatch({ type: "DECREASE", payload: item })}
                  style={styles.buttonHandle}
                >
                  <Text style={styles.trash}>-</Text>
                </Pressable>
              )}
              {quantityCount(state, item.id) > 0 && (
                <View style={styles.counter}>
                <Text style={{color:"white"}}>{quantityCount(state, item.id)}</Text>
                </View>
              )}

              {isInCart(state, item.id) ? (
                <Pressable
                  onPress={() => dispatch({ type: "INCREASE", payload: item })}
                  style={styles.buttonHandle}
                >
                  <Text style={styles.trash}>+</Text>
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => dispatch({ type: "ADD_ITEM", payload: item })}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>add to cart</Text>
                </Pressable>
              )}
            </View>

            {/* <Link href={`/productsId/${item.id}`}>Deatails</Link> */}

          </View>
        )}
         numColumns={2}
     
      />
      </View>
      <View style={{marginBottom:100,width:"55%"}}>
       <FlatList
        data={dataCart}
        renderItem={({ item }) => (
          <View style={styles.itemContainer1}>
            <Pressable onPress={()=>router.push(`/productsId/${item.id}`)}   style={styles.details}>
                
             
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{shorten(item.title)}</Text>
            <Text>{item.price} $</Text></Pressable>
            <View style={styles.buttonContainer}>
              {quantityCount(state, item.id) === 1 && (
             <View style={styles.buttonHandle}>
              <FontAwesome name="trash" onPress={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: item })} style={styles.trash} size={17}/>
                </View>
              )}
              {quantityCount(state, item.id) > 1 && (
                <Pressable
                  onPress={() => dispatch({ type: "DECREASE", payload: item })}
                  style={styles.buttonHandle}
                >
                  <Text style={styles.trash}>-</Text>
                </Pressable>
              )}
              {quantityCount(state, item.id) > 0 && (
                <View style={styles.counter}>
                <Text style={{color:"white"}}>{quantityCount(state, item.id)}</Text>
                </View>
              )}

              {isInCart(state, item.id) ? (
                <Pressable
                  onPress={() => dispatch({ type: "INCREASE", payload: item })}
                  style={styles.buttonHandle}
                >
                  <Text style={styles.trash}>+</Text>
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => dispatch({ type: "ADD_ITEM", payload: item })}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>add to cart</Text>
                </Pressable>
              )}
            </View>

            {/* <Link href={`/productsId/${item.id}`}>Deatails</Link> */}

          </View>
        )}
         numColumns={1}
     
      />
        </View></>
    );
};

export default Card;
const styles = StyleSheet.create({
    itemContainer: {
        width: "47%",
        padding: 5,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "violet",
        margin: 5,
      },
      itemContainer1:{
        width: "95%",
        padding: 10,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "violet",
        margin: 5,

      },
    image: {
      width: "100%",
      aspectRatio: 1,
      borderRadius: 30,
      objectFit: "contain",
    },
    title: {
      fontSize: 10,
      fontWeight: "800",
      marginTop: 20,
      marginBottom: 10,
    },
    buttonContainer: {
      flexDirection: "row",
      alignItems:"center",
      
    },
    button: {
      backgroundColor: "black",
      marginTop: 5,
      width: "90%",
      alignSelf: "center",
      padding: 10,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      height:40
    },
    buttonText: {
      color: "white",
      fontWeight: "800",
      fontSize: 10,
    },
  
    buttonHandle:{
       backgroundColor: "black",
      marginTop: 5,
      width: "20%",
      alignSelf: "center",
      padding: 10,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      margin:2,
      height:40
    },
    trash:{
      color:"white"
    },
    counter:{
      backgroundColor: "black",
      marginTop: 5,
      width: "20%",
      alignSelf: "center",
      padding: 10,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      margin:2,
      height:40
    },
    details:{
        justifyContent:"center",
        alignItems:"center",
        
    },
    
  }
  
  );