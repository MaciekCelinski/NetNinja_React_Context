import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
	const { state } = useContext(ThemeContext);
	const { isAuthenticated, toggleAuth } = useContext(AuthContext);
	
	const theme = state.isLightTheme ? state.light : state.dark;
	
	return (
		<nav style={{ background: theme.ui, color: theme.syntax }}>
			<h1>Context App</h1>
			<div onClick={toggleAuth}>
				{isAuthenticated ? <p> Logged in</p> : <p>Logged out</p>}
			</div>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default Navbar;
