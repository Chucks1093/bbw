function FooterSection() {
	return (
		<footer className="border-t border-gray-200">
			<div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-gray-600">
				<p>© {new Date().getFullYear()} Sebastian</p>

				<div className="flex gap-4">
					<a
						href="https://linkedin.com/in/sebastian-anioke"
						target="_blank"
						rel="noreferrer"
						className="hover:text-black"
					>
						LinkedIn
					</a>
					<a
						href="mailto:aniokechukwudi7@gmail.com"
						className="hover:text-black"
					>
						Email
					</a>
				</div>
			</div>
		</footer>
	);
}

export default FooterSection;
