import { Stack } from "expo-router";
import CartContextProvider from "../src/context/CartContextProvider";


const RootLayout = () => {
  return (
    <CartContextProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Shopping",
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "black",
            },
          }}
        />
        <Stack.Screen
          name="productsId/[id]"
          options={{
            headerTitle: "DetailsProduct",
            headerTintColor: "green",
            headerStyle: {
              backgroundColor: "black",
            },
          }}
        
        />
        <Stack.Screen name="ShoppingCart" 
        options={{
          headerTitle: "ShoppingCart",
          headerTintColor: "green",
          headerStyle: {
            backgroundColor: "black",
          },
        }}
        />
      </Stack>
    </CartContextProvider>
  );
};

export default RootLayout;
