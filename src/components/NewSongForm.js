import { useState } from "react";

const NewSongForm = ({ addSong }) => {
	const [title, setTitle] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		addSong(title);
		setTitle("");
	};

	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="title">Title</label>
			<input
				type="text"
				name="title"
				value={title}
				onChange={(e) => {
					setTitle(e.target.value);
				}}
				placeholder="please enter song title"
				required
			></input>
			<input type="submit" value="send" />
		</form>
	);
};

export default NewSongForm;
