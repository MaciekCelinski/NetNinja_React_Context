import { createContext, useState } from "react";
import { v1 as uuid1 } from "uuid";

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
	const [books, setBooks] = useState([
		{ title: "Name of the Wind", author: "Patrick Rothfuss", id: 1 },
		{ title: "The Witcher", author: "Andrzej Sapkowski", id: 2 },
	]);

	const addBook = (title, author) => {
		setBooks([...books, { title, author, id: uuid1() }]);
	};

	const removeBook = (id) => {
		setBooks(books.filter((book) => book.id !== id));
	};

	return (
		<BookContext.Provider value={{ books, addBook, removeBook }}>
			{children}
		</BookContext.Provider>
	);
};
