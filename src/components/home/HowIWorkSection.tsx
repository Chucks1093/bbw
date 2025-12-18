function HowIWorkSection() {
	return (
		<section className="w-full border-b border-b-zinc-300">
			<div className="max-w-6xl mx-auto py-24 px-4">
				<div className="max-w-3xl">
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-manrope">
						How I work
					</h2>

					<p className="mt-4 text-gray-600">
						I keep things simple, transparent, and focused so projects
						move forward without confusion or wasted time.
					</p>

					<ul className="mt-10 space-y-4 text-lg list-disc pl-6">
						<li>
							We start with a short call to understand the current state
							of your product and what needs to be shipped or fixed
						</li>
						<li>
							We agree on scope, timeline, and deliverables before any
							work begins
						</li>
						<li>
							A simple contract is signed, with 50% paid upfront and 50%
							on delivery
						</li>
						<li>
							Progress is tracked in a shared project board so everything
							is visible
						</li>
						<li>
							Code is pushed regularly to GitHub so there are no
							surprises
						</li>
						<li>
							You can always see what’s done, what’s in progress, and
							what’s next
						</li>
						<li>
							After delivery, I stay available briefly to handle final
							fixes or adjustments
						</li>
						<li>The project is then closed cleanly and intentionally</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default HowIWorkSection;
