import MealsList from "../components/MealsList/MealsList";
import {useContext} from "react";
import {StyleSheet, View, Text} from 'react-native';
import {FavoritesContext} from "../store/context/favorites-context";
import {MEALS} from "../data/dummy-data";

const FavouritesScreen = () => {
  const favouriteMealsCtx = useContext(FavoritesContext);

  const favouriteMeals = MEALS.filter(meal => favouriteMealsCtx.ids.includes(meal.id))

  if (favouriteMeals.length === 0) {
    return <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favourite meals yet.</Text>
    </View>
  }

  return <MealsList items={favouriteMeals} />
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default FavouritesScreen;
