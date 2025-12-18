function ProblemsSection() {
	return (
		<section className="w-full border-b border-b-zinc-300">
			<div className="max-w-6xl mx-auto py-24 px-4">
				<div className="max-w-3xl">
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-manrope">
						The kind of problems I help teams solve
					</h2>

					<p className="mt-4 text-gray-600 font-inter">
						These are common issues I see in early-stage products and
						growing businesses that already have users but struggle to
						move forward.
					</p>

					<ul className="mt-10 space-y-4 text-lg list-disc pl-6">
						<li>Shipping is slow and MVP timelines keep stretching</li>
						<li>Every new change takes longer than it should</li>
						<li>
							Bugs reach production and fixing one thing breaks another
						</li>
						<li>
							Engineers avoid touching certain parts of the codebase
						</li>
						<li>
							Users complain about slowness or rough edges in the
							experience
						</li>
						<li>
							The backend exists, but changes are slow and hard to scale
							safely
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default ProblemsSection;
