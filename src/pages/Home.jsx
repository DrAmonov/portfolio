import React from 'react';
import Header from '../components/Header';
import Man from '../assets/man.png';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<>
			<Header />
			<div className="bg-black py-3">
				<div className="w-[780px] ms-[216px] underline-offset-2 flex items-center gap-3">
					<div>
						{' '}
						<img src={Man} height="360px" width="360px" alt="" />
					</div>
					<div>
						<h2 className="text-white font-semibold text-4xl">
							Hi I'm <br />
							Temurxon <br /> Amonov <br />
							<span className="text-blue-500 text-xl underline">
								Backend developer
							</span>
						</h2>
					</div>
				</div>
			</div>
			<div className="bg-zinc-950 py-3">
				<div className="flex justify-between px-10 py-7">
					<div className="bg-black px-[137px] py-[160px]">
						{' '}
						<Link
							to="about"
							className="underline text-white text-2xl font-semibold">
							<span className="text-blue-500">A</span>BOUT ME
						</Link>{' '}
					</div>
					<div className="bg-black px-[137px] py-[160px]">
						{' '}
						<Link
							to="portfolio"
							className="underline text-white text-2xl font-semibold">
							<span className="text-blue-500">M</span>Y PORTFOLIO
						</Link>{' '}
					</div>
					<div className="bg-black px-[90px] py-[160px]">
						{' '}
						<Link
							to="touch"
							className="underline text-white text-2xl font-semibold">
							<span className="text-blue-500">G</span>ET IN TOUCH
						</Link>{' '}
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
