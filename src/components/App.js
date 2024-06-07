import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Create a state variable 'darkMode' that can be toggled between true and false
  const [darkMode, setDarkMode] = useState(false);

  // Use the 'darkMode' state variable to determine the className
  const appClass = darkMode ? "App dark" : "App light";

  // Create an event handler for the Dark Mode button
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
