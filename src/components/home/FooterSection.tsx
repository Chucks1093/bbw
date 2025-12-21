import { openEmail } from '@/utils/openEmail';

function FooterSection() {
	return (
		<footer className="border-t border-gray-200">
			<div className="max-w-6xl mx-auto px-4 py-8 flex  items-start md:items-center justify-between gap-4 text-sm text-gray-600">
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
					<button onClick={openEmail} className="hover:text-black">
						Email
					</button>
				</div>
			</div>
		</footer>
	);
}

export default FooterSection;
