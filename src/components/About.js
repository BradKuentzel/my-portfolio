/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import image from "../background.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

export default function About() {
	const [author, setAuthor] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
			)
			.then((data) => setAuthor(data[0]))
			.catch(console.error);
	}, []);

	if (!author) return <div>...Loading</div>;

	return (
		<main className="relative">
			<img
				src={image}
				alt="retrowave synth background"
				className="absolute object-cover sm:object-scale-down w-full h-full"
			/>
			<div className="p-10 lg:pt-48 container mx-auto relative">
				<section className="bg-blue-400 bg-opacity-50 rounded-lg shadow-2xl lg:flex p-20">
					<img
						src={urlFor(author.authorImage).url()}
						className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
						alt={author.name}
					/>
					<div className="text-lg flex flex-col justify-center">
						<h1 className="cursive text-6xl text-blue-300 mb-4">
							Hello, I'm Brad
						</h1>
						<div className="prose lg:prose-xl text-white">
							<BlockContent
								blocks={author.bio}
								projectId="ey3hd5q9"
								dataset="production"
							/>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
