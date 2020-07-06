import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from './Context/ThemeContext';
import * as serviceWorker from './serviceWorker';
import './static/fonts/Roboto/Roboto-fonts.css';
import './static/fonts/material-design-icons/material-design-icons.css';
import './static/style/color/color.css';
import './static/style/grid/grid.css'
import {BatteryProvider} from './Context/BatteryContext';
import {FilmProvider} from './Context/FilmContext';

ReactDOM.render(
    <React.StrictMode>
      <FilmProvider>
        <BatteryProvider>
          <ThemeProvider default='dark'>
            <App />
          </ThemeProvider>
        </BatteryProvider>
      </FilmProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
