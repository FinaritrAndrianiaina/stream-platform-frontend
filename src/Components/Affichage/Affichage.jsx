import React, { useContext } from 'react';
import {useTrail} from 'react-spring';
import Mansory from './../react-masonry-css';
import FilmElement from './../FilmElement/FilmElement';
import Header from './../Header/Header';
import { FilmContext } from '../../Context/FilmContext';

const Affichage = (props)=>{
    const [selected,setSelected] = useContext(FilmContext).selected;
    const config = {
        mass: 1,
    };
    const trail = useTrail(props.films.length, {
        config,
        opacity: 1,
        transform: "translateY(0px)",
        from: {
            opacity: 0,
            transform: "translateY(40px)",
        },
    });
    const breakpointsObj = {
        default: 7,
        1300: 6,
        1100: 5,
        900: 4,
        600: 3,
        500: 1,
    };
    const handleSelectedFilm = (i) =>{
        setSelected({open:false,id:i})
        setTimeout(() => {
            setSelected({open:true,id:i})
        }, 50);
    }
    const vues = 350012;
    return (
        <div
        className="affichage"
        style={{
            zIndex: 1,
            width:'-webkit-fill-available'
        }}
        >
        <Header />
        <Mansory
            breakpointCols={breakpointsObj}
            className="grid-mansory shadow scrollbar"
            columnClassName="row-mansory"
            style={{
            height: window.innerHeight - 60,
            }}
        >
            {trail.map((prop, i) => {
                prop.backgoundColor = "red";
                return (
                <FilmElement
                onClick={()=>handleSelectedFilm(i)}
                key={i}
                style={prop}
                num={parseInt(props.films[i].rating)}
                photo={props.films[i].image}
                title={props.films[i].title}
                vues={props.films[i].vues}
                />
                );
            })}  
        </Mansory>
        </div>
    );
}


export default Affichage;