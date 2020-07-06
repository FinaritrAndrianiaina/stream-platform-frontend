import React, { useState, useContext } from 'react';
import './Sidebar.css';
import {ThemeContext} from './../../Context/ThemeContext';
import logo from './3.svg';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    const [theme,setTheme] = useContext(ThemeContext);
    const [expanded,setExpanded] = useState(false);
    const [iconMenu,setIconMenu] = useState('menu');
    const handleClickMenu = (e)=>{
      setExpanded(!expanded);
      setIconMenu(expanded ? 'menu' :'arrow_back');
    }
    const changeTheme = ()=>{
        setTheme(theme==='dark'?'light':'dark')
    }
    return (
      <nav className={`main-menu shadow ${expanded?'expanded':''}`}>
        <ul className="head">
          <li className="brand-logo">
            <img src={logo} alt="logo" className="logo" />
            <span>Stream Platform</span>
          </li>
          <li className="collapse" onClick={handleClickMenu}>
            <i className={`material-icons fa fa-2x btn-collapse-${expanded?"open":"close"}`} >{iconMenu}</i>
            <span className="nav-text">Close</span>
          </li>
        </ul>
        <ul className="navigation">
          <li>
            <a href="/">
              <i className="material-icons notify shake amber-text text-darken-4 fa fa-2x">whatshot</i>
              <span className="nav-text">Discover</span>
            </a>
          </li>
          <li>
            <Link to='/'>  
              <i className="material-icons red-text text-accent-2 fa fa-2x">live_tv</i>
              <span className="nav-text">TV Shows</span>
            </Link>
          </li>
          <li>
            <Link to="/cv">
              <i className="material-icons blue-text text-accent-2 fa fa-2x">movie</i>
              <span className="nav-text">Films</span>
            </Link>
          </li>
          <li>
            <a href="/">
              <i className="material-icons fa fa-2x">camera_roll</i>
              <span className="nav-text">Series</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="material-icons green-text text-darken-1 fa fa-2x">videocam</i>
              <span className="nav-text">Documentaires</span>
            </a>
          </li>
        </ul>

        <ul className="logout">
          <li className="item">
            <i className="material-icons fa fa-2x">playlist_play</i>
            <span className="nav-text">Your Playlist</span>
          </li>
          <li className="item" onClick={changeTheme}>
            <i className="material-icons fa fa-2x">compare</i>
            <span className="nav-text">Night Mode</span>
          </li>
          <li className="item">
            <i className="material-icons fa fa-2x">keyboard_tab</i>
            <span className="nav-text">Logout</span>
          </li>
        </ul>
      </nav>
    );
}

export default Sidebar;