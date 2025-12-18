import { openEmail } from '@/utils/openEmail';

function Hero() {
	return (
		<section className="flex items-center h-[90vh] border-b border-b-zinc-300 px-4">
			<div className="max-w-6xl mx-auto w-full relative top-5">
				<h1 className="text-4xl text-zinc-800 md:text-5xl font-semibold tracking-tight leading-snug font-manrope max-w-4xl">
					I help early-stage founders, startups, and SMEs ship real web
					products in weeks.
				</h1>

				<p className="mt-4 max-w-2xl text-xl text-gray-500 leading-relaxed">
					Short-term frontend and backend work for businesses with real
					users that need to move faster without breaking their product.
				</p>

				<button
					onClick={openEmail}
					className="bg-zinc-800 hover:bg-zinc-700 h-12 text-zinc-50 font-medium px-11 py-3 rounded-4xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 mt-10"
				>
					Talk to me
				</button>
			</div>
		</section>
	);
}

export default Hero;
