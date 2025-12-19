import { useState, useEffect } from "react";
import NoteItem from "./NoteItem";

export default function NoteList({ notes, ...props }) {
	if (!notes.length)
		return <p className="text-center bg-white text-gray-500 dark:bg-gray-900 dark:text-white font-semibold">Sin Notas</p>;

	return (
		<div className="space-y-2">
			{notes.map(note => (
				<NoteItem key={note.id} note={note} {...props}/>
			))}
		</div>
	);
}