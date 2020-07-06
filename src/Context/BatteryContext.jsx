import React, {useState,createContext} from 'react';

export const BatteryContext = createContext();


export const BatteryProvider = (props) => {
    const [battery, setBattery] = useState({
        level:0,
        charging:false
    });
    return (
        <BatteryContext.Provider value={[battery, setBattery]}>
            {props.children}
        </BatteryContext.Provider>
    );
}