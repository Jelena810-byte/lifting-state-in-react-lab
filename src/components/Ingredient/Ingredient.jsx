// src/components/Ingredient/Ingredient.jsx
const Ingredient = ({ ingredient, onAdd, onRemove }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      <span>{ingredient.name}</span>

      {/* Conditionally render + or X depending on props */}
      {onAdd && (
        <button
          onClick={() => onAdd(ingredient)}
          aria-label={`Add ${ingredient.name}`}
          style={{ marginLeft: '12px' }}
        >
          +
        </button>
      )}

      {onRemove && (
        <button
          onClick={onRemove}
          aria-label={`Remove ${ingredient.name}`}
          style={{ marginLeft: '12px' }}
        >
          X
        </button>
      )}
    </li>
  );
};

export default Ingredient;
