function Home() {
	return (
		<div className="h-screen flex items-center justify-center">
			<button className="bg-blue-600 hover:bg-blue-700 h-12 active:bg-blue-800 disabled:bg-blue-300 disabled:cursor-not-allowed text-gray-50 font-medium px-6 py-3 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center gap-2 justify-center">
				Build with me
			</button>
		</div>
	);
}
export default Home;
