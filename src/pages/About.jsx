import React from 'react';
import Header from '../components/Header';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function About() {
	return (
		<div>
			<Header />
			<div className="bg-black text-center pt-3 pb-10">
				<h2 className="text-white text-2xl underline font-semibold">
					<span className="text-blue-500">A</span>BOUT ME
				</h2>
			</div>
			<div className="bg-zinc-900 px-[138px] py-5 text-white">
				<h3 className="text-xl">PERSONAL INFO</h3>
				<p className="my-5">
					ADAWWWWWWWWWWWWWWWWWWW
					I'm a Freelance Web Designer & Developer based in Moscow, Russia. I
					have serious passion for UI effects, animations and creating
					intuitive, with over a decade of experience.
				</p>
				<div className="flex justify-between">
					<div className=" w-[200px]">
						{' '}
						<p className="flex justify-between">
							<strong>First Name:</strong> Temurxon
						</p>
						<p className="flex justify-between">
							<strong>First Name:</strong> Temurxon
						</p>
						<p className="flex justify-between">
							<strong>First Name:</strong> Temurxon
						</p>
						<p className="flex justify-between">
							<strong>First Name:</strong> Temurxon
						</p>
						<p className="flex justify-between">
							<strong>First Name:</strong> Temurxon
						</p>
					</div>
					<div className=" w-[200px]">
						{' '}
						<p className="flex justify-between">
							<strong>First Name:</strong> Temurxon
						</p>
						<p className="flex justify-between">
							<strong>First Name:</strong> Temurxon
						</p>
						<p className="flex justify-between">
							<strong>First Name:</strong> Temurxon
						</p>
						<p className="flex justify-between">
							<strong>First Name:</strong> Temurxon
						</p>
						<p className="flex justify-between">
							<strong>First Name:</strong> Temurxon
						</p>
					</div>
				</div>
				<div className="flex gap-9 mt-5 mb-10">
					<button className="border-none bg-blue-500 px-10 rounded-md py-3">
						DOWNLOAD RESUME
					</button>
					<button className="border px-10 rounded-md py-3 text-blue-500 border-blue-500">
						MY BLOG{' '}
					</button>
				</div>
				<hr />
				<div className="py-10 flex gap-5 items-start ">
					<div className="w-[355px]">
						<NavLink className="block py-3 px-36 mt-4 border">
							EXPERIENCE
						</NavLink>
						<NavLink className="block py-3 px-36 mt-4 border"> EDUCATION</NavLink>
						<NavLink className="block py-3 px-36 mt-4 border">SKILLS</NavLink>
					</div>
					<div className="w-full mt-[17px]">
						<h3 className="text-center border py-3 w-full">EXPERIENCE</h3>
						<div className="border py-5">web developer</div>
					</div>
				</div>
      <hr />
			</div>
		</div>
	);
}

export default About;
