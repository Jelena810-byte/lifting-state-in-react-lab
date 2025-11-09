
import React from "react";
import Ingredient from '../Ingredient/Ingredient';

const IngredientList = ({ ingredients = [], onAdd }) => {
  return (
    <ul>
      {ingredients.map((ing, idx) => (
        <Ingredient
          key={`${ing.name}-${idx}`}
          ingredient={ing}
          onAdd={onAdd}
        />
      ))}
    </ul>
  );
};

export default IngredientList;

