import React, { useContext } from 'react';

const ThemeContext = React.createContext({
  darkTheme: true,
});

const ThemeUpdateContext = React.createContext({
  toggleTheme: () => {},
});

/* Custom Hooks to get our context */
function useTheme() {
  return useContext(ThemeContext);
}

function useThemeUpdater() {
  return useContext(ThemeUpdateContext);
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;

  const [darkTheme, setDarkTheme] = React.useState(false);

  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <ThemeContext.Provider value={{ darkTheme }}>
      <ThemeUpdateContext.Provider value={{ toggleTheme }}>
        { children }
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
export { useTheme, useThemeUpdater };