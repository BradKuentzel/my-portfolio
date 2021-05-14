import React from "react";
import image from "../background.jpg";

export default function Home() {
	return (
		<main>
			<img
				src={image}
				alt="retrowave synth background"
				className="absolute object-cover sm:object-scale-down w-full h-full"
			/>
			<section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
				<h1 className="text-6xl text-blue-300 font-bold cursive leading-none lg:leading-snug home-name">
					Hello! I'm Brad.
				</h1>
			</section>
		</main>
	);
}
