export default function Header({lang, setLang, theme, setTheme, t}) {
	return (
		<header className="bg-white text-blue-400 font-semibold dark:bg-gray-800 dark:text-white shadow p-4 flex justify-between items-center">
			<h1 className="text-xl font-bold">{t.title}</h1>

			<div className="flex gap-4">
				<button onClick={() => setLang(lang === "es" ? "en" : "es")} className="font-semibold cursor-pointer" title={t.changeLanguage}>🌐 {lang === "es" ? "ES" : "US"}
				</button>

				<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="cursor-pointer" title={t.theme}>
					{theme === "dark" ? "☀️" : "🌙"}
				</button>
			</div>
		</header>
	);
}