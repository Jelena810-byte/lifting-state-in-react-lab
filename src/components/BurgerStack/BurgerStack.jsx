import Ingredient from '../Ingredient/Ingredient';

const BurgerStack = ({ ingredients = [], onRemove }) => {
  if (ingredients.length === 0) {
    return (
      <ul>
        <li style={{ textAlign: 'center', opacity: 0.7 }}>No Ingredients</li>
      </ul>
    );
  }

  return (
    <ul>
      {ingredients.map((ing, idx) => (
        <Ingredient
          key={idx}
          ingredient={ing}
          onRemove={() => onRemove(idx)}
        />
      ))}
    </ul>
  );
};

export default BurgerStack;
