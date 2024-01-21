export const getStrapiImage = (path: string = ""): string => {
	if (path) {
		if (path.includes("http")) {
			return path;
		} else {
			return `${process.env.NEXT_PUBLIC_STRAPI_URL}${path}`;
		}
	} else {
		return "/assets/noimage.png";
	}
};
