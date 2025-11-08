// src/App.jsx

import './App.css';

import { useState } from 'react';

import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';

//import Ingredient from './components/Ingredient/Ingredient';





const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];


  // stack state (right side)
  const [stack, setStack] = useState([]);

  // add an ingredient object to the end of the stack
  function addToBurger(ingredient) {
    setStack(prev => [...prev, ingredient]);
  }

  // remove ingredient at a specific index from the stack
  function removeFromBurger(indexToRemove) {
    setStack(prev => prev.filter((_, idx) => idx !== indexToRemove));
  }

 return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList
          ingredients={availableIngredients}
          onAdd={addToBurger}
        />

        <BurgerStack
          ingredients={stack}
          onRemove={removeFromBurger}
        />
      </section>
    </main>
  );
};



export default App;
