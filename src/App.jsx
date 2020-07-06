import React, { useContext, useEffect } from 'react';
import {ThemeContext} from './Context/ThemeContext';
import Sidebar from './Components/Sidebar/Sidebar';
import {BrowserRouter as Router, Route,Switch} from  'react-router-dom';
import './App.css';
import Discover from './pages/Discover/Discover';
import CV from './pages/CV/CV';


function App() {
  const [theme,setTheme] = useContext(ThemeContext)

  return (
    <Router>
      <div className={`App  ${theme} primary-color`}>
        <Sidebar/>
        <div className="main" style={{
          padding:0,
          overflow: 'hidden'
        }}>
          <Switch>
            <Route path="/" exact component={Discover} />
            <Route path="/cv"  component={CV} />
          </Switch> 
        </div>
      </div>
    </Router>
  );
}

export default App;
