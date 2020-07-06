import React, {useRef,useEffect,useContext} from 'react';
import Rate from '../Rate/Rate';
import {FilmContext} from '../../Context/FilmContext';
import './Description.css';

const Description = (props) =>{
    const context = useContext(FilmContext);
    const [selected,setSelected] = context.selected;
    const divref = useRef(null);
    useEffect(() => {
      if (selected.open) {
        divref.current.style.backgroundImage =
          "var(--gradient-color), url(" + props.film.image + ")";
      }
    });
    return (
      <div className={"description " + (selected.open ? "active" : "")}>
        <div
          className="image-container"
          style={{
            height: "500px",
          }}
        >
          <div
            style={{
              height: "100%",
              backgroundPosition: "50% 50%",
              backgroundSize: "cover",
            }}
            ref={divref}
          >
            <span style={{ position: "absolute",padding:10 }} onClick={()=>setSelected({selected:false,id:undefined})}>
              <i className="material-icons" style={{
                  fontSize:30
              }}>close</i>
            </span>
          </div>
        </div>
        {selected.open ? (
          <div className="title container">
            <h3>{props.film.title}</h3>
            <Rate
              num={parseInt(props.film.rating)}
              vues={parseInt(props.film.vues)}
            />
            <div className="scrollbar" style={{
              height: window.innerHeight-600,
              overflow: 'hidden scroll'
            }}>
              <p style={{
                textAlign:'justify'
              }}>{props.film.desc}</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
}

export default Description;