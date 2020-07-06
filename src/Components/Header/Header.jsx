import React, { useContext, useEffect, useRef } from 'react'
import Dropdown from '../../Components/Dropdown/Dropdown';
import { BatteryContext } from './../../Context/BatteryContext';
import './Header.css';
import {FilmContext} from '../../Context/FilmContext';
import {getFilms} from '../../Context/actions/FilmsActions'

const Header = () =>{
    const [battery, setBattery] = useContext(BatteryContext);
    const context = useContext(FilmContext);
    const api = context.api;
    const [films,setFilms] = context.list;
    const [selected,setSelected] = context.selected;

    useEffect(() => {
        const update = () => {
            setTimeout(() => {
                window.navigator.getBattery().then((_battery) => {
                    setBattery({ charging: _battery.charging, level: Math.floor(_battery.level * 100 )});
                })
                update();
            }, 500);
        }
        update();
    },[setBattery])
    
    const handleChange = (e)=>{
        setSelected({open:false,id:undefined})
        console.log('e :>> ', e.target.value);
        getFilms(api+`?search=${e.target.value}`,setFilms);
    }
    return (
        <div className="header shadow">
            <div className="row">
                <div className="col m4 s12">
                    <div className="search-bar">
                        <input type="text" placeholder="Search..." onChange={handleChange}  />
                    </div>
                </div>
                <div className="col m4 hide-on-small-and-down battery-place">
                    <p>Batterie: {battery.level}%</p>
                    <p>{battery.charging ? 'Sur secteur' : 'Sur batterie'}</p>
                </div>
                <div className="col  m4 s12">
                    <Dropdown
                        id='sorting'
                        kindOf={[
                            {
                                dataValue: "name",
                                text: "Sort by Name"
                            },
                            {
                                dataValue: "popular",
                                text: "Most watched"
                            },
                            {
                                dataValue: "oldest",
                                text: "Retro"
                            },
                            {
                                dataValue: "new",
                                text: "Newest"
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;