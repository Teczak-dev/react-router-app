import { users } from '../../data/users';

export default function AdminUsers(){

    return (
	<div>
	    <h1>Users:</h1>
	    <ul style={ { listStyleType: 'none', padding: 0 } }>
	    {users.map(user => (
		<li>{user.name}</li>
	    ))}
	    </ul>
	</div>
    )
}
