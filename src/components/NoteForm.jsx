import { useEffect, useState } from "react";
const emojis = ["😀","📝","🔥","⭐","📚","💼","🏠","🚀","😄","😁","😆","😅"];

export default function NoteForm({ addNote, t }) {
	const [text, setText] = useState("");
	const [category, setCategory] = useState("General");

	const addEmoji = emoji => {
		setText(prev => prev + emoji);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!text.trim()) return;
		addNote({ text, category });
		setText("");
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<textarea rows="4" className="w-full rounded-xl p-5 border-2 border-blue-300 bg-white text-blue-600 font-semibold  dark:text-white dark:bg-gray-700 resize-none" value={text} onChange={e => setText(e.target.value)} placeholder={t.add}/>

			<div className="flex justify-between gap-2">
				{emojis.map(e => (<button key={e} type="button" onClick={() => addEmoji(e)} className="text-xl hover:scale-110 transition cursor-pointer">
					{e}
				</button>
				))}
				
				<select value={category} onChange={e => setCategory(e.target.value)} className="p-2 rounded border-2 border-blue-300 bg-white text-blue-500 font-semibold dark:bg-gray-800 dark:text-white">
					<option>{t.general}</option>
					<option>{t.work}</option>
					<option>{t.personal}</option>
					<option>{t.study}</option>
					<option>{t.another}</option>
				</select>
			</div>

			<div className="flex gap-3 items-center">
				<button onClick={() => setText("")} className="p-2.5 bg-gray-500 hover:bg-gray-700 text-white dark:bg-gray-600 font-semibold rounded cursor-pointer">{t.clear}</button>
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold dark:bg-blue-900 dark:text-white dark:hover:bg-indigo-900 p-2.5 rounded cursor-pointer">{t.add}</button>
			</div>
		</form>
	);
}