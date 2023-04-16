import { Image, StyleSheet, Text, View } from "react-native";

const FoodItemDetailsScreen = ({ route }) => {
    const { foodItem } = route.params;
  
    return (
      <View style={styles.container}>
        <Text style={styles.foodItemText}>{foodItem.name}</Text>
        <Image source={{uri:foodItem.image}} style={styles.foodItemImage} />
        <Text style={styles.foodItemText}>Price: {foodItem.price}</Text>
        <Text style={styles.foodItemText}>{foodItem.calories} calories</Text>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
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
  export default FoodItemDetailsScreen 