import { useRef, useState } from "react";

const EMOJIS = ["😀","📝","🔥","⭐","📚","💼","🏠","🚀","😄","😁","😆","😅"];

export default function NoteForm({ addNote, t }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(t.general);
  const textareaRef = useRef(null);

  const insertEmoji = emoji => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const newText =
      text.slice(0, start) + emoji + text.slice(end);

    setText(newText);

    // devolver cursor después del emoji
    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + emoji.length,
        start + emoji.length
      );
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;

    addNote({ text, category });
    setText("");
    setCategory(t.general);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Text */}
      <textarea
        ref={textareaRef}
        rows={4}
        autoFocus
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder={t.add}
        className="w-full resize-none rounded-xl border-2 border-blue-300 p-4 font-semibold text-blue-600 dark:bg-gray-700 dark:text-white"
        aria-label="Texto de la nota"
      />

      {/* Emojis */}
      <div className="grid grid-cols-6 gap-2 sm:grid-cols-12">
        {EMOJIS.map(e => (
          <button
            key={e}
            type="button"
            onClick={() => insertEmoji(e)}
            className="cursor-pointer rounded p-1 text-xl hover:bg-blue-100 dark:hover:bg-gray-600"
            aria-label={`Insertar emoji ${e}`}
          >
            {e}
          </button>
        ))}
      </div>

      {/* Category */}
      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        className="w-full rounded border-2 border-blue-300 bg-white p-2 font-semibold text-blue-500 dark:bg-gray-800 dark:text-white"
      >
        <option>{t.general}</option>
        <option>{t.work}</option>
        <option>{t.personal}</option>
        <option>{t.study}</option>
        <option>{t.another}</option>
      </select>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setText("")}
          className="flex-1 cursor-pointer rounded bg-gray-500 p-3 font-semibold text-white hover:bg-gray-800"
        >
          {t.clear}
        </button>

        <button
          type="submit"
          className="flex-1 cursor-pointer rounded bg-blue-500 p-3 font-semibold text-white hover:bg-blue-800"
        >
          {t.add}
        </button>
      </div>
    </form>
  );
}