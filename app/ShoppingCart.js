import { useContext } from "react";
import { Text, View } from "react-native";

import { CartContext } from "../src/context/CartContextProvider";
import Card from "../src/components/Card";


const ShoppingCart = () => {
    const {state,dispatch}=useContext(CartContext)
    return (
        <View>
      
         <Card data={state.selectedItems}/>
        </View>
    );
};

export default ShoppingCart;