export default function Toast({ message }) {
	if (!message) return null;

	return (
		<div className="fixed top-5 right-5 bg-blue-200 text-blue-500 dark:bg-white dark:text-black font-semibold px-4 py-2 rounded shadow">
			{message}
		</div>
	);
}