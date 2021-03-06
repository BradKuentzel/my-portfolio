import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

export default function SinglePost() {
	const [post, setPost] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[slug.current == "${slug}"]{
		title,
		_id,
		slug,
		mainImage{
			asset->{
				_id,
				url
			}
		},
		body,
		"name": author->name,
		"authorImage": author->image
	}`
			)
			.then((data) => setPost(data[0]))
			.catch(console.error);
	}, [slug]);

	if (!post) return <div>Loading...</div>;

	return (
		<main className="bg-blue-200 min-h-screen p-12">
			<article className="container mx-auto bg-blue-100 rounded-large">
				<header className="relative">
					<div className="absolute h-full w-full flex items-center justify-center p-8">
						<div className="bg-white bg-opacity-75 rounded p-12">
							<h1 className="cursive text-3xl lg:text-6xl mb-4">
								{post.title}
							</h1>
							<div className="flex justify-center text-gray-600">
								<img
									src={urlFor(post.authorImage).url()}
									alt={post.name}
									className="w-10 h-10 rounded-full"
								/>
								<p className="cursive flex items-center pl-2 text-2xl">
									{post.name}
								</p>
							</div>
						</div>
					</div>
					<img
						src={post.mainImage.asset.url}
						alt={post.title}
						className="w-full object-cover rounded-t"
						style={{ height: "400px" }}
					/>
				</header>
				<div className="bg-red-100 px-16 lg:px-48 py-12 lg:py-20 max-w-full">
					<BlockContent
						blocks={post.body}
						projectId="ey3hd5q9"
						dataset="production"
					/>
				</div>
			</article>
		</main>
	);
}
