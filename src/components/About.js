import React from "react";
import image from "../background.jpg";

export default function About() {
	return (
		<main>
			<img
				src={image}
				alt="retrowave synth background"
				className="absolute object-cover w-full h-full"
			/>
		</main>
	);
}
