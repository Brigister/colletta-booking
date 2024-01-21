import { StrapiImage } from "./strapi-image.model";

export interface Band {
	spotifyUrl: string;
	instagramUrl: string;
	facebookUrl: string;
	youtubeUrl: string;
	videoUrl: {
		provider: string;
		providerUid: string;
		url: string;
	};
	description: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	order: number;
	name: string;
	coverImage: StrapiImage;
	logoImage: StrapiImage;
}
