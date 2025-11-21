import { NavLink } from 'react-router-dom';
import { useUser } from '../context/userContext';

export default function AdminNavigation() {
    const { user, setUser} = useUser();
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
	    <span>
		Zalogowano jako {user}
	    </span>
	</nav>
    );
}
