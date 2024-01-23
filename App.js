import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from './screens/ProductDetails';
import Favorite from './screens/Favorites';
import ProductLists from './screens/productLists';
import ProductContext from './context';
const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Product List"
        component={ProductLists}
        options={{
          title: 'Product Lists',
      
        }}
     
      />
      <Tab.Screen
        name="Favorites"
        component={Favorite}
        options={{
          title: 'Favorite',
          
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <ProductContext>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
          }}
          // Use the getFocusedRouteNameFromRoute to get the name of the focused tab
          initialRouteName="Products"
          headerMode="float"
        >
          <Stack.Screen
            name="Botom tab"
            component={BottomTabs}
            options={({ route }) => ({
              headerTitle: getFocusedRouteNameFromRoute(route) ?? 'Product Lists',
              headerStyle: {
                backgroundColor: '#a567bc',
                
                  // Replace with your desired color
              },
              headerTintColor:'#e6e6e6'
            })}
            
          />
          <Stack.Screen
            name="Product Details"
            component={ProductDetails}
            options={{
              title: 'Product Details',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    </ProductContext>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
