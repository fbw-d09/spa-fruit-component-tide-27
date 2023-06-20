// import React, {useState} from 'react'
// import './App.css';
// import Fruit from './components/Fruit' ;
// function App() {
//   //Add your code here

//   return (
//     <div className="App">
//      {/* add you code here */}

//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Fruit from "./components/Fruit";

const App = () => {
  const initialFruits = [
    { id: 1, name: "Apple", color: "red" },
    { id: 2, name: "Banana", color: "blue" },
    { id: 3, name: "Orange", color: "green" },
    { id: 4, name: "Grapes", color: "yellow" },
  ];

  const [fruits, setFruits] = useState(initialFruits);
  const [deletedFruits, setDeletedFruits] = useState([]);

  function changeFruitColor(id, color) {
    const updatedFruits = fruits.map((fruit) =>
      fruit.id === id ? { ...fruit, color } : fruit
    );
    setFruits(updatedFruits);
  }

  function deleteFruit(id) {
    const deletedFruit = fruits.find((fruit) => fruit.id === id);
    const updatedFruits = fruits.filter((fruit) => fruit.id !== id);
    setFruits(updatedFruits);
    setDeletedFruits([...deletedFruits, deletedFruit]);
  }

  function restoreFruits() {
    setFruits([...fruits, ...deletedFruits]);
    setDeletedFruits([]);
  }

  function deleteAllFruits() {
    setFruits([]);
    setDeletedFruits([]);
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {fruits.map((fruit) => (
        <div key={fruit.id} style={{ marginBottom: "10px" }}>
          <Fruit
            id={fruit.id}
            name={fruit.name}
            color={fruit.color}
            onColorChange={changeFruitColor}
            onDelete={deleteFruit}
          />
        </div>
      ))}
      {deletedFruits.length > 0 && (
        <div style={{ marginTop: "10px" }}>
          <button onClick={restoreFruits}>Restore All Fruits</button>
        </div>
      )}
      <button onClick={deleteAllFruits}>Delete All</button>
    </div>
  );
};

export default App;
