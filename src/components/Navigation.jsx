import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
	<nav style={ {display : 'flex', gap: '1em' }}>
	    <NavLink to="/" className={ ({isActive}) => 
		isActive ? 'active' : '' }>Home</NavLink>
	    <NavLink to="/o-nas" className={ ({isActive}) => 
		isActive ? 'active' : '' }>O nas</NavLink>
	    <NavLink to="/kontakt" className={ ({isActive}) => 
		isActive ? 'active' : '' }>Kontakt</NavLink>
	    <NavLink to='/games' className={ ({isActive}) => 
		isActive ? 'active' : '' }>Gry Free2Play</NavLink>
	    <NavLink to="/blog" className={ ({isActive}) => 
		isActive ? 'active' : '' }>Blog</NavLink>
	    <NavLink to="/logowanie" className={ ({isActive}) => 
		isActive ? 'active' : '' }>Logowanie</NavLink>

	</nav>
    );
}
