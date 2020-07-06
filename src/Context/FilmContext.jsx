import React, { useState, createContext } from "react";

export const FilmContext = createContext();

export const FilmProvider = (props) => {
  const [ListFilms,setListFilms] = useState([]);
  const ApiLink = "http://127.0.0.1:8000/api/film";
  const [selectedFilms,setSelectedFilms] = useState({id:0,open:false})
  return (
        <FilmContext.Provider value={
            {
                list:[ListFilms,setListFilms],
                selected: [selectedFilms,setSelectedFilms],
                api:ApiLink
            }
        }>
            {props.children}
        </FilmContext.Provider>
  );
};
