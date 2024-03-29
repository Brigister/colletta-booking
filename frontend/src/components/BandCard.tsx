"use client";

import { Band } from "@/models/band.model";
import { getStrapiImage } from "@/utils/images";
import Image from "next/image";
import { useState } from "react";
import SocialLink from "./SocialLink";

interface BandCard {
	band: Band;
}

const BandCard: React.FC<BandCard> = ({ band }) => {
	const [image, setImage] = useState(getStrapiImage(band.coverImage.data?.attributes.url));
	const blurImage = getStrapiImage(band.coverImage.data?.attributes.formats.thumbnail.url);
	const logoImage = getStrapiImage(band.logoImage.data?.attributes.url);

	const goToUrl = () => {
		window.open(band.videoUrl.url, "_blank")?.focus();
	};

	return (
		<div className="flex w-fit flex-col items-center justify-self-center rounded-xl bg-gray-900 hover:scale-[102%]">
			<Image
				className="cursor-pointer rounded-lg"
				src={image}
				width={400}
				height={400}
				alt="dcnn"
				blurDataURL={blurImage}
				placeholder="blur"
				onClick={goToUrl}
			/>
			{band.logoImage.data?.attributes.url && (
				<div className="relative w-full">
					<Image
						alt={`${band.name} logo`}
						width="60"
						height="60"
						src={logoImage}
						className="absolute -top-12 right-4 rounded-full object-cover"
						onError={() => setImage("/assets/noimage.png")}
					/>
				</div>
			)}

			<div className="mt-2 w-full p-2 ">
				<h2 className="text-center text-xl font-semibold uppercase">{band.name}</h2>

				<p className="mb-4 mt-2 w-full text-left">{band.description}</p>
				<div className="flex justify-end gap-4">
					{band.spotifyUrl && <SocialLink link={band.spotifyUrl} image="spotify" />}
					{band.youtubeUrl && <SocialLink link={band.youtubeUrl} image="youtube" />}
					{band.instagramUrl && <SocialLink link={band.instagramUrl} image="instagram" />}
					{band.facebookUrl && <SocialLink link={band.facebookUrl} image="facebook" />}
				</div>
			</div>
		</div>
	);
};

export default BandCard;
