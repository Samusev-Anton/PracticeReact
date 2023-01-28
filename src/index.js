import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Global, ThemeProvider } from '@emotion/react';
import 'modern-normalize';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from 'components';
import { GlobalStyles, theme } from 'styles';
import { store } from './reduxConfig/store';
import { persistor } from './reduxConfig/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Global styles={GlobalStyles} />
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
