import React from 'react';
import { useTheme, useThemeUpdater } from './ThemeProvider';

function ContextComponent() {
  const theme = useTheme();
  const themeUpdate = useThemeUpdater();

  return (
    <div>
      <button onClick={themeUpdate.toggleTheme}>Toggle Theme</button>
      Click this button to update the theme context
      <br />
      { theme.darkTheme ? 'dark' : 'light' }
    </div>
  );
}

export default ContextComponent;