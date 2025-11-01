import AdminNavigation from './AdminNavigation';
import { Outlet } from 'react-router-dom';

export default function AdminLayout() {
    return (
	<div>
	    <AdminNavigation/>
	    <main>
		<Outlet/>
	    </main>
	    <footer>
		<span>&copy; 2025 strona xyz</span>
	    </footer>
	</div>
    );
}
