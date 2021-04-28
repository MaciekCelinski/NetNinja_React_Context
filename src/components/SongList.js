import { useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
// components
import NewSongForm from "./NewSongForm";

const SongList = () => {
	const [songs, setSongs] = useState([
		{
			title: "almost home",
			id: 1,
		},
		{
			title: "memory gospel",
			id: 2,
		},
		{
			title: "the wild darkness",
			id: 3,
		},
	]);

	const [age, setAge] = useState(20);

	const addOne = () => {
		setAge(age + 1);
	};

	const addSong = (title) => {
		setSongs([...songs, { title, id: uuidv1() }]);
	};

	useEffect(() => {
		console.log("useEffect Hook run");
	}, [songs]);

	// we can use useEffect more than once in one component

	useEffect(() => {
		console.log("age was increased");
	}, [age]);

	return (
		<div className="song-list">
			<ul>
				{songs.map((song) => (
					<li key={song.id}>{song.title}</li>
				))}
			</ul>
			<NewSongForm addSong={addSong} />
			<p>Age: {age}</p>
			<button onClick={addOne}>Add one to age</button>
		</div>
	);
};

export default SongList;
