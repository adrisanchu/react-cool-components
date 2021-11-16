import React from "react";
import useLocalStorage from "use-local-storage";
import "./App.css";

function App() {
  // set initial theme to dark
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  // save preferred theme in local storage with key 'theme'
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <h1>Multi theme react app</h1>
      <button onClick={switchTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
}

export default App;
