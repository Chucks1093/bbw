function WhatIHelpWithSection() {
	return (
		<section className="w-full border-b border-b-zinc-300">
			<div className="max-w-6xl mx-auto px-4 py-24">
				<div className="max-w-3xl">
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-manrope">
						What I help teams do
					</h2>

					<p className="mt-4 text-gray-600">
						This is how I typically help early-stage founders, startups,
						and small businesses move faster and ship with confidence.
					</p>

					<ul className="mt-10 space-y-4 text-lg list-disc pl-6">
						<li>
							Turning existing designs and APIs into a product users can
							actually use
						</li>
						<li>
							Shipping MVPs in weeks so you can get real user feedback
							faster
						</li>
						<li>
							Fixing fragile frontend and backend systems so changes stop
							breaking things
						</li>
						<li>
							Improving performance and reliability so the product feels
							solid to users
						</li>
						<li>
							Cleaning up codebases so teams can move faster with
							confidence
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default WhatIHelpWithSection;
