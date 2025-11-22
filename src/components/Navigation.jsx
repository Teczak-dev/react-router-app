import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navigation() {

    const {theme, toggleTheme} = useTheme()
    
    return (
	<nav style={ {
	    display : 'flex', 
	    gap: '1em',
	    backgroundColor: theme === 'dark' ? '#111' : '#aaa',
	}}>
	    <NavLink to="/" className={ ({isActive}) => 
		isActive ? 'active' : '' }>Home</NavLink>

	    <NavLink to="/o-nas" className={ ({isActive}) => 
		isActive ? 'active' : '' }>O nas</NavLink>
	    
	    <NavLink to="/kontakt" className={ ({isActive}) => 
		isActive ? 'active' : '' }>Kontakt</NavLink>
	    
	    <NavLink to='/games' className={ ({isActive}) => 
		isActive ? 'active' : '' }>Gry Free2Play</NavLink>
	    <NavLink to='/ulu' className={ ({isActive}) => 
		isActive ? 'active' : '' }>ULU</NavLink>

	    <NavLink to="/blog" className={ ({isActive}) => 
		isActive ? 'active' : '' }>Blog</NavLink>
	    
	    <NavLink to="/logowanie" className={ ({isActive}) => 
		isActive ? 'active' : '' }>Logowanie</NavLink>
	    
	    <button onClick={toggleTheme}>
		{theme === 'dark' ? 'Jasny' : 'Ciemny'}
	    </button>
	</nav>
    );
}
