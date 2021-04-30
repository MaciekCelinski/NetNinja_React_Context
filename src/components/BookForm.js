import { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
	const { dispatch } = useContext(BookContext);

	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({type: 'ADD_BOOK', book: {title, author}});
		setTitle("");
		setAuthor("");
	};

	return (
		<div className="form-control">
			<form onSubmit={handleSubmit}>
				<div className="title">
					<label>Title</label>
					<input
						type="text"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
				</div>
				<div className="author">
					<label>Author</label>
					<input
						type="text"
						value={author}
						onChange={(e) => {
							setAuthor(e.target.value);
						}}
					/>
				</div>
				<input type="submit" value="Add Book" />
			</form>
		</div>
	);
};

export default BookForm;
