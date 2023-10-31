"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      const result = await fetchMealIdeas(ingredient);
      setMeals(result);
    }
    loadMealIdeas();
  }, [ingredient, setMeals]);

  return (
    <div className="meal-ideas">
      <h3 className="text-2xl font-bold">Meal Ideas</h3>
      <div className="p-4">
        <p className="text-lg font-bold">Here are some meal ideas using {ingredient}:</p>
        <ul>
          {meals ? (
            meals.map((meal) => (
                <li key={meal.idMeal}
                  className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer flex flex-row"
                >
                  <p className="text-white p-2">{meal.strMeal}</p>
                </li>
            ))
          ) : (
            <p className="m-3">No meal ideas found for {ingredient} :(</p>
          )}
        </ul>
      </div>
    </div> 
  );
}

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {
    toast.error("Error fetching meal ideas");
  }
}