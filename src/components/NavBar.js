import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
	return (
		<header className="bg-blue-900">
			<div className="container mx-auto flex justify-between">
				<nav className="flex">
					<NavLink
						to="/"
						exact
						activeClassName="text-white"
						className="inflex-flex items-center py-7 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
					>
						Brad
					</NavLink>
					<NavLink
						to="/post"
						activeClassName="text-red-100 bg-green-700"
						className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
					>
						Blog Posts
					</NavLink>
					<NavLink
						to="/projects"
						activeClassName="text-red-100 bg-green-700"
						className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
					>
						Projects
					</NavLink>
					<NavLink
						to="/about"
						activeClassName="text-red-100 bg-green-700"
						className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
					>
						About
					</NavLink>
				</nav>
				<div className="inflex-flex py-3 px-3 my-6">
					<SocialIcon
						url="https://www.linkedin.com/in/bradkuentzel/"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcon
						url="https://github.com/BradKuentzel"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcon
						url="https://www.facebook.com/brad.kuentzel.5"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
				</div>
			</div>
		</header>
	);
}
