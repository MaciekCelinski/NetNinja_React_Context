import { createContext, useReducer } from "react";

import {bookReducer} from "../reducers/BookReducer";

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
	const [books, dispatch] = useReducer(bookReducer, [
		{ title: "Name of the Wind", author: "Patrick Rothfuss", id: 1 },
		{ title: "The Witcher", author: "Andrzej Sapkowski", id: 2 },
	]);

	return (
		<BookContext.Provider value={{ books, dispatch }}>
			{children}
		</BookContext.Provider>
	);
};
