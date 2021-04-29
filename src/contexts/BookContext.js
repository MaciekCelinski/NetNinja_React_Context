import { createContext, useState } from "react";

export const BookContext = createContext();

export const BookContextProvider = (props) => {
	const [books, setBooks] = useState([
		{ title: "The Way of Kings", id: 1 },
		{ title: "Name of the Wind", id: 2 },
		{ title: "The Wiseman Fear", id: 3 },
		{ title: "The Witcher", id: 4 },
	]);

	return (
		<BookContext.Provider value={{ books }}>
			{props.children}
		</BookContext.Provider>
	);
};
