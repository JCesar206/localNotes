import { useEffect, useState } from "react";

export default function NoteItem({ note, toggle, remove, save }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(note.text);

  useEffect(() => {
    setText(note.text);
  }, [note.text]);

  const handleSave = () => {
    if (!text.trim()) return;
    save(note.id, text);
    setIsEditing(false);
  };

  return (
    <article className="rounded-xl border-2 bg-white p-3 shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={note.done}
          onChange={() => toggle(note.id)}
          className="mt-1 h-5 w-5 accent-blue-500"
          aria-label="Marcar nota como completada"
        />

        <div className="flex-1 space-y-2">
          {isEditing ? (
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              rows={4}
              autoFocus
              className="w-full resize-none rounded border-2 border-blue-400 p-2 font-medium text-blue-600 dark:bg-gray-700 dark:text-white"
            />
          ) : (
            <p
              className={`whitespace-pre-wrap font-medium ${
                note.done ? "text-gray-400 line-through" : "text-blue-600 dark:text-white"
              }`}
            >
              {note.text}
            </p>
          )}

          {note.category && (
            <span className="inline-block rounded bg-gray-200 px-2 py-1 text-xs font-medium dark:bg-gray-700">
              {note.category}
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-3 flex justify-end gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="rounded bg-green-500 hover:bg-green-800 px-3 py-1 text-sm font-semibold text-white cursor-pointer"
            >
              Guardar
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setText(note.text);
              }}
              className="rounded bg-gray-300 hover:bg-gray-600 px-3 py-1 text-sm font-semibold dark:bg-gray-600 cursor-pointer"
            >
              Cancelar
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="rounded bg-blue-500 hover:bg-blue-800 px-3 py-1 text-sm font-semibold text-white cursor-pointer"
            >
              Editar
            </button>
            <button
              onClick={() => remove(note.id)}
              className="rounded bg-red-500 hover:bg-red-800 px-3 py-1 text-sm font-semibold text-white cursor-pointer"
            >
              Eliminar
            </button>
          </>
        )}
      </div>
    </article>
  );
}