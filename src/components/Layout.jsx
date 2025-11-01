import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

export default function Layout() {
    return (
	<>
	    <div>
		<Navigation/>
		<div style={ {minHeight: '70vh', padding: '2rem'} }>
		    <Outlet/>
		</div>
		<footer>
		    <h3>&copy; Strona stworzona przez XYZ</h3>
		</footer>
	    </div>
	</>
    );
}
