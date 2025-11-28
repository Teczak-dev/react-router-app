import { createContext, useContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeContext = createContext();

export function ThemeProvider({children}){

    const systemTheme= () =>{
	let systemTheme= 'light';
	if(window.matchMedia('(prefers-color-scheme: dark)').matches) systemTheme = 'dark';
	return systemTheme;
    }


    const [storedTheme, setStoredTheme] = useLocalStorage("theme", systemTheme());
    const [theme, setTheme] = useState(storedTheme);

    useEffect(() =>{
	setStoredTheme(theme);
    }, [theme])

    const toggleTheme = () => {
	setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }

    return(
	<ThemeContext.Provider value={{theme, toggleTheme}}>
	    {children}
	</ThemeContext.Provider>
    );

}

export function useTheme(){
    const context = useContext(ThemeContext);
    return context;
}
