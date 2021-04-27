import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
	const [isLightTheme, setIsLightTheme] = useState(true);

	const state = {
		isLightTheme,
		light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
		dark: {
			syntax: "#ddd",
			ui: "#333",
			bg: "#555",
		},
	};

	const toggleTheme = () => {
		setIsLightTheme(!isLightTheme);
	};

	return (
		<ThemeContext.Provider value={{ state, isLightTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
