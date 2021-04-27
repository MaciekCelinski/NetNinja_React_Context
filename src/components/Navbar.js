import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
	const { state } = useContext(ThemeContext);
	const theme = state.isLightTheme ? state.light : state.dark;
	return (
		<nav style={{ background: theme.ui, color: theme.syntax }}>
			<h1>Context App</h1>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default Navbar;
