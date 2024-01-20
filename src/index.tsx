import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes';
// import { ThemeProvider } from '@mui/material';
// import { themeMui } from './theme/themeMui';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <ThemeProvider theme={themeMui}> */}
    <RouterProvider router={router} />
    {/* </ThemeProvider> */}
    {/* </Provider> */}
  </React.StrictMode>
);