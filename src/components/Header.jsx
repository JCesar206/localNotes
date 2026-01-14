export default function Header({ lang, setLang, theme, setTheme, t }) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow dark:bg-gray-800">
      <div className="mx-auto max-w-xl p-4 space-y-3">
        <h1 className="text-center text-xl font-bold text-blue-500 dark:text-white">
          {t.title}
        </h1>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="rounded bg-blue-100 hover:bg-blue-200 hover:font-bold px-4 py-2 font-semibold text-blue-600 dark:bg-gray-700 dark:text-white cursor-pointer"
            aria-label={t.changeLanguage}
          >
            🌐 {lang === "es" ? "ES" : "EN"}
          </button>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded bg-blue-100 hover:bg-blue-200 px-4 py-2 font-semibold text-blue-600 dark:bg-gray-700 dark:text-white cursor-pointer"
            aria-label={t.theme}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
}