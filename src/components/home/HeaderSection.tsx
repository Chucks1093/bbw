import { Link } from 'react-router';

function HeaderSection() {
	return (
		<header className="h-[10vh] fixed w-full inset-0 border-b border-b-zinc-300 bg-white z-10">
			<div className="max-w-6xl h-full flex items-center  mx-auto ">
				<Link
					to="/"
					className="font-manrope font-bold text-2xl  text-zinc-700"
				>
					BBS{' '}
					<span className="font-bold text-5xl bg-yellow-300 size-2 inline-block rounded-full" />
				</Link>
			</div>
		</header>
	);
}
export default HeaderSection;
