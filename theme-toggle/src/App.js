import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className='App'>
      <h1> Light/Dark Mode Toggle </h1>
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      <p>This is a simple demonstration of light and dark mode toggle in React.</p>
    </div>
  );
}

export default App;
