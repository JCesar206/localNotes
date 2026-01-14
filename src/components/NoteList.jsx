import NoteItem from "./NoteItem";

export default function NoteList({
  notes,
  toggle,
  remove,
  save
}) {
  if (!notes.length) {
    return (
      <p className="rounded bg-gray-50 p-3 text-center text-sm font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-300">
        Sin notas
      </p>
    );
  }

  return (
    <ul className="space-y-2">
      {notes.map(note => (
        <li key={note.id}>
          <NoteItem
            note={note}
            toggle={toggle}
            remove={remove}
            save={save}
          />
        </li>
      ))}
    </ul>
  );
}