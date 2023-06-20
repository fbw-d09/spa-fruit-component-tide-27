// import React, {useState} from 'react'

// function Fruit() {
//    ////////Add you Code here

//     return (
//         <div data-testid="fruit">
//             {/* add your code here */}

//         </div>
//     )
// }

// export default Fruit

import React, { useState } from "react";

const colors = ["red", "blue", "green", "yellow", "purple"];

const Fruit = ({ id, name, color, onColorChange, onDelete }) => {
  const [textColor, setTextColor] = useState(color);

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  function changeColor() {
    const newColor = getRandomColor();
    setTextColor(newColor);
    onColorChange(id, newColor);
  }

  function handleDelete() {
    onDelete(id);
  }

  return (
    <div style={{ color: textColor, textAlign: "center" }}>
      <p>{name}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={changeColor}>Change Color</button>
        <button onClick={handleDelete}>Delete Fruit</button>
      </div>
    </div>
  );
};

export default Fruit;
