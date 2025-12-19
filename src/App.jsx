import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Toast from "./components/Toast";
import { texts } from "./i18n";
import "./App.css";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [lang, setLang] = useState("es");
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light");
  const [toast, setToast] = useState(null);
  const [query, setQuery] = useState("");

  const t = texts[lang];

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const showToast = msg => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };
  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = ({ text, category, emoji }) => {
    setNotes([...notes, {id: Date.now(), text, category, emoji, done: false}, ]);
    showToast(t.noteAdded || "Nota agregada");
  };

  const toggle = id => setNotes(notes.map(n => n.id === id ? {...n, done: !n.done} : n));

  const remove = id => setNotes(notes.filter(n => n.id !== id));

  const edit = id => {
    const text = prompt("Editar nota");
    if (!text) return;
    setNotes(notes.map(n => n.id === id ? {...n, text} : n));
  };

  const save = (id, newText) => {
    setNotes(notes.map(n => n.id === id ? {...n, text: newText} : n));
    showToast("Nota actualizada");
  };

  const filtered = notes.filter(n => n.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen pb-22 bg-white dark:bg-gray-900">
      <Header lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t}/>

      <Toast message={toast}/>
      <main className="p-4 space-y-4 max-w-xl mx-auto">

        <div className="flex gap-2">
          <input className="flex-1 p-2 border-2 border-blue-200 rounded bg-white text-blue-600 font-semibold dark:bg-gray-700 dark:text-white dark:border-gray-100" placeholder={t.search} onChange={e => setSearch(e.target.value)} onKeyDown={e => e.key === "Enter" && setSearch(query)}/>
          <button onClick={() => setSearch(query)} className="px-4 bg-blue-200 hover:bg-blue-500 dark:bg-gray-300 dark:hover:bg-gray-500 rounded cursor-pointer">🔍</button>
        </div>

        <NoteForm addNote={addNote} t={t}/>
        
        <h2 className="bg-white text-blue-400 dark:bg-gray-900 dark:text-white font-semibold text-center">{t.pending}</h2>

        <NoteList notes={filtered.filter(n => !n.done)} toggle={toggle} remove={remove} save={save}/>
      
        <h2 className="bg-white text-blue-400 dark:bg-gray-900 dark:text-white font-semibold text-center">{t.completed}</h2>
        <NoteList notes={filtered.filter(n => n.done)} toggle={toggle} remove={remove} edit={edit}/>
      </main>
      <Footer/>
    </div>
  );
}