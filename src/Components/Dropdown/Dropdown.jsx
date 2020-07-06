import React, { useState,useEffect } from 'react';
import './Dropdown.css';
const Dropdown =  (props) => {

    const [toggle, setToggle] = useState(true);
    const handleClickToggle = () => {
        setToggle(!toggle);
    }
    const [selected, setSelected] = useState('popular');
    useEffect(() => {
        let selectedItem = document.querySelector(`#dropdown-${props.id} .dropdown-list .item[data-value="${selected}"]`)
        let place = document.querySelector(`#dropdown-${props.id} .dropdown-title>.dropdown-place`)
        place.innerHTML = selectedItem.innerHTML
    })
    const handleDropdownSelected = (element) => {
        setSelected(element)
    }
    return (
        <div className="dropdown" id={`dropdown-${props.id}`}>
            <div onClick={handleClickToggle} className="dropdown-title">
                <span className="nav-text dropdown-place">
                </span>
                <i className={`material-icons fa ${!toggle?"open":"close"}`}>expand_more</i>
            </div>
            <div className={`dropdown-list shadow scrollbar ${!toggle ? 'active' : ''}`}>
                <ul className="list">
                    {props.kindOf.map((val, i) => (
                        <li data-value={val.dataValue} key={i} onClick={() => handleDropdownSelected(val.dataValue)} style={{
                            display: selected === val.dataValue ? "none" : "block"
                        }} className="item" >{val.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    )

}
export default Dropdown;
