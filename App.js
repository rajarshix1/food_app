import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FoodItemDetailsScreen from './foodItemDetails';
import axios from 'axios';

const Stack = createStackNavigator();



const FoodItemsScreen = ({ navigation }) => {
  const [foodItems, setFoodItems] = useState([
  ]);
  const getMenu = async () =>{
    const response = await axios.get('https://lonely-deer-earrings.cyclic.app/menu')
    console.log(response);
    setFoodItems(response.data)
  }
  
  useEffect(() => {
    getMenu()
  }, [])
  
  return (
    <View style={styles.container}>
      {/* Title bar */}
      <View style={styles.titleBar}>
        <Text style={styles.title}>My Food App</Text>
      </View>
      {/* Food items */}
      <ScrollView style={styles.foodItemsContainer}>
        {foodItems.map((item) => (
          <TouchableOpacity
            style={styles.foodItemContainer}
            key={item.id}
            onPress={() => navigation.navigate('FoodItemDetails', { foodItem: item })}
          >
            <Image source={{uri:item.image}} style={styles.foodItemImage} />
            <Text style={styles.foodItemText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FoodItems"
          options={{ title: 'My Food App' }}
          component={FoodItemsScreen}
        />
        <Stack.Screen name="FoodItemDetails" component={FoodItemDetailsScreen} options={{ title: 'Food Item Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleBar: {
    backgroundColor: 'blue', 
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white', 
    fontSize: 24,
    fontWeight: 'bold',
  },
  foodItemsContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  foodItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  foodItemImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  foodItemText: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default App;
