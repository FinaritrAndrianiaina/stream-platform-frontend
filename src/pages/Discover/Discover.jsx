import React, {useState,useContext, useEffect} from 'react';  
import './Discover.css';
import Affichage from './../../Components/Affichage/Affichage';
import {FilmContext} from './../../Context/FilmContext'
import Description from '../../Components/Description/Description';
import {getFilms} from '../../Context/actions/FilmsActions'

const Discover = ()=>{
    const context = useContext(FilmContext);
    const [films,setFilms] = context.list;
    const [selected,setselected] = context.selected;
  
    useEffect(() => {
      getFilms(context.api,setFilms);
    },[]);
    return (
      <div id="discover" className="primary-color">
        <Affichage
          films={films}
        />
        <Description 
          film={films[selected.id]}
        />
      </div>
    );
}

export default Discover;