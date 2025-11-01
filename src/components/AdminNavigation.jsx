import { NavLink } from 'react-router-dom';

export default function AdminNavigation() {
    return (
	<nav style={ {display : 'flex', gap: '1em' }}>
	    <NavLink to="/admin" style={ ({isActive}) => ({
		color: isActive ? 'red' : 'white'
	    })} end>Dashboard</NavLink>
	    
	    <NavLink to="/admin/users" style={ ({isActive}) => ({
		color: isActive ? 'red' : 'white'
	    })} >Users</NavLink>

	    <NavLink to="/admin/settings" style={ ({isActive}) => ({
		color: isActive ? 'red' : 'white'
	    })} >Settings</NavLink>
	</nav>
    );
}
