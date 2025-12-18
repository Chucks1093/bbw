function ContactSection() {
	return (
		<section className="max-w-6xl mx-auto px-4 py-24">
			<div className="max-w-3xl">
				<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
					Let’s talk
				</h2>

				<p className="mt-4 text-gray-600">
					If you have a product that needs to be shipped, fixed, or
					stabilized, send me a message and we’ll see if it’s a good fit.
				</p>

				<div className="mt-8">
					<a
						href="mailto:aniokechukwudi7@gmail.com"
						className="inline-block rounded-md px-6 py-3 text-white bg-black hover:bg-gray-800 transition"
					>
						Send me an email
					</a>
				</div>
			</div>
		</section>
	);
}

export default ContactSection;
