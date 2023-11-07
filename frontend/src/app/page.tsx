import BandCard from "@/components/BandCard";
import Bio from "@/components/Bio";

async function fetchBands() {
	const url = `${process.env.STRAPI_URL}/api/bands?sort=order:asc&populate=*`;

	try {
		const response = await fetch(url, {
			method: "GET",
			cache: "no-cache",
			headers: {
				"Content-Type": "application/json",
				Authorization: `bearer ${process.env.STRAPI_TOKEN}`,
			},
		});

		const data = await response.json();
		return data.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

export default async function Home() {
	const bands = (await fetchBands()) || [];
	return (
		<>
			<Bio />

			<section className="mt-4 grid grid-cols-1 justify-center gap-y-20 md:grid-cols-2 lg:grid-cols-3">
				{bands.map((band: any) => (
					<BandCard key={band.id} band={band.attributes} />
				))}
			</section>
		</>
	);
}
