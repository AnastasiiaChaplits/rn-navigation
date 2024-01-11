import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0,
  );

  useLayoutEffect(() => {
    const { title } = CATEGORIES.find((category) => category.id === catId);

    navigation.setOptions({ title });
  }, [catId, navigation]);


  return <MealsList items={displayedMeals}/>
};


export default MealsOverviewScreen;
