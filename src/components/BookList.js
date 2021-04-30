import { useContext } from "react";
import BookDetails from "./BookDetails";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
	const { books } = useContext(BookContext);
	return books.length ? (
		<div className="book-list">
			<ul>
				{books.map((book) => {
					return <BookDetails book={book} key={book.id} />;
				})}
			</ul>
		</div>
	) : (
		<div className="empty">
			<p>No books to read</p>
		</div>
	) 
};

export default BookList;
