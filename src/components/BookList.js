import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
	const {
		state: { isLightTheme, light, dark },
	} = useContext(ThemeContext);

	const theme = isLightTheme ? light : dark;

	const { books } = useContext(BookContext);

	return (
		<div
			className="book-list"
			style={{ color: theme.syntax, background: theme.bg }}
		>
			<ul>
				{books.map((book) => (
					<li key={book.id} style={{ cursor: "pointer", background: theme.ui }}>
						{book.title}
					</li>
				))}
			</ul>
		</div>
	);
};

export default BookList;
