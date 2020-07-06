import React , {useState,createContext} from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = (props)=>{
    const [theme,setTheme] = useState(props.default);
    return (
        <ThemeContext.Provider value={[theme,setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
}