import { useState, useEffect } from "react";

export default function NoteItem({ note, toggle, remove, save }) {
	const [isEditing, setIsEditing] = useState(false);
	const [text, setText] = useState(note.text);

	useEffectEvent(() => {
		setText(note.text);
	}, [note.text]);

	const handleSave = () => {
		if (!text.trim()) return;
		save(note.id, text);
		setIsEditing(false);
	};

	return (
		<div className="flex items-center gap-2 p-3 bg-white border-2 text-blue-600 dark:bg-gray-800 dark:text-white font-semibold rounded-xl shadow">
			<input type="checkbox" checked={note.done} onChange={() => toggle(note.id)} className="mt-1"/>

			<div className="flex-1">
				{isEditing ? (<textarea rows="4" value={text} onChange={e => setText(e.target.value)} className="w-full p-2 rounded border bg-white text-blue-500 font-semibold dark:bg-gray-800 dark:text-white resize-none"/>) : (
					<p className={`whitespace-pre-wrap ${note.done ? "line-through text-gray-400" : ""}`}>
						{note.text}
					</p>
				)}
				
				<span className="inline-block mt-2 text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-800">
					{note.category}
				</span>
			</div>

			<div className="flex gap-2">
				{isEditing ? (
					<button onClick={handleSave} className="cursor-pointer">💾</button>
				) : (
					<button onClick={() => setIsEditing(true)} className="cursor-pointer">✏️</button>
				)}
				<button onClick={() => {remove(note.id); showToast("Nota eliminada");}} className="cursor-pointer">🗑️</button>
			</div>
		</div>
	);
}