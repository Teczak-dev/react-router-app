import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { useTheme } from "../context/ThemeContext";

export default function Layout() {
    const { theme, toggleTheme } = useTheme();

    return (
	<>
	    <div style={{
		backgroundColor: theme === 'dark' ? '#222' : '#eee',
		color: theme === 'dark' ? '#eee' : '#222',
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	    }}>
		<Navigation/>
		<div style={ {minHeight: '100vh',width: '100vw', padding: '2rem'} }>
		    <Outlet/>
		</div>
		<footer>
		    <h3>&copy; Strona stworzona przez XYZ</h3>
		</footer>
	    </div>
	</>
    );
}
