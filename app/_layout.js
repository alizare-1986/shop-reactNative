import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "shopping",
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
    </Stack>
  );
};

export default RootLayout;
