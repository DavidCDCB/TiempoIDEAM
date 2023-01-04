
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// npm create vite@latest
// npm init @eslint/config
// https://andrebnassis.medium.com/setting-eslint-on-a-react-typescript-project-2021-1190a43ffba
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/
// https://fettblog.eu/typescript-react/hooks/

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
