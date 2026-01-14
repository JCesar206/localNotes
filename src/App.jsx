import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Toast from "./components/Toast";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { texts } from "./i18n";
import "./App.css";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [lang, setLang] = useState("es");
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  const [toast, setToast] = useState(null);

  const t = texts[lang];

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const showToast = message => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const addNote = ({ text, category, emoji }) => {
    setNotes(prev => [
      ...prev,
      { id: Date.now(), text, category, emoji, done: false }
    ]);
    showToast(t.noteAdded || "Nota agregada");
  };

  const toggleNote = id =>
    setNotes(prev =>
      prev.map(n => (n.id === id ? { ...n, done: !n.done } : n))
    );

  const removeNote = id =>
    setNotes(prev => prev.filter(n => n.id !== id));

  const updateNote = (id, newText) => {
    setNotes(prev =>
      prev.map(n => (n.id === id ? { ...n, text: newText } : n))
    );
    showToast(t.noteUpdated || "Nota actualizada");
  };

  const filteredNotes = notes.filter(n =>
    n.text.toLowerCase().includes(search.toLowerCase())
  );

  const pendingNotes = filteredNotes.filter(n => !n.done);
  const completedNotes = filteredNotes.filter(n => n.done);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pb-1">
      <Header
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        t={t}
      />

      <Toast message={toast} />

      <main className="mx-auto max-w-xl p-4 space-y-4">
        {/* Search */}
        <div className="flex gap-2">
          <input
            className="flex-1 rounded border-2 border-blue-200 p-2 font-semibold text-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            placeholder={t.search}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <NoteForm addNote={addNote} t={t} />

        <section className="space-y-2">
          <h2 className="text-center font-semibold text-blue-400 dark:text-white">
            {t.pending}
          </h2>
          <NoteList
            notes={pendingNotes}
            toggle={toggleNote}
            remove={removeNote}
            save={updateNote}
          />
        </section>

        <section className="space-y-2">
          <h2 className="text-center font-semibold text-blue-400 dark:text-white">
            {t.completed}
          </h2>
          <NoteList
            notes={completedNotes}
            toggle={toggleNote}
            remove={removeNote}
          />
        </section>
      </main>

      <WhatsAppIcon />
      <Footer />
    </div>
  );
}