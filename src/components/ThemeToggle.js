import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
	const { toggleTheme } = useContext(ThemeContext);

	const clickHandler = () => {
		toggleTheme();
	};

	return <button onClick={clickHandler}>Toggle theme</button>;
};

export default ThemeToggle;
