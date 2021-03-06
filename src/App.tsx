import React from 'react';
import ContextComponent from './ContextComponent';
import ThemeProvider from './ThemeProvider';


function App() {
  return (
    <ThemeProvider>
      <ContextComponent />
    </ThemeProvider>
  );
}

export default App;
