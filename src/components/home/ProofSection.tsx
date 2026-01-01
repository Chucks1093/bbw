function ProofSection() {
	return (
		<section className="w-full border-b border-b-zinc-300">
			<div className="max-w-6xl mx-auto px-4 py-24">
				<div className="max-w-3xl">
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-manrope">
						Recent work
					</h2>

					<p className="mt-4 text-gray-600">
						A few examples of products and systems I’ve worked on
						recently. More detailed case studies will be added over time.
					</p>

					<div className="mt-10 space-y-8">
						<div>
							<h3 className="text-xl font-medium">
								My Toilet, My Dignity
							</h3>
							<p className="mt-2 text-gray-600">
								A citizen powered platform for reporting toilet
								conditions across Nigeria with real time maps and admin
								review tools
							</p>

							<a
								href="/case-studies/my-toilet-my-dignity"
								className="inline-block mt-2 text-sm text-zinc-700 underline hover:text-zinc-900"
							>
								View case study
							</a>
						</div>

						<div>
							<h3 className="text-xl font-medium">Nora Tutor</h3>
							<p className="mt-2 text-gray-600">
								Co-built an AI-powered learning platform used by
								hundreds of users, working across frontend and backend
								to support real usage and iteration.
							</p>
						</div>

						<div>
							<h3 className="text-xl font-medium">
								Business landing page
							</h3>
							<p className="mt-2 text-gray-600">
								Designed and built a fast, production-ready landing
								page, handled deployment, and connected the domain so
								the business could go live quickly.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProofSection;
