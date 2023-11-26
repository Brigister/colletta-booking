/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "1337",
				pathname: "/uploads/**",
			},
			{
				protocol: "http",
				hostname: "127.0.0.1",
				port: "1337",
				pathname: "/uploads/**",
			},
			{
				protocol: "http",
				hostname: "strapi.lacollettadischi.it",
				port: "1337",
				pathname: "/uploads/**",
			},
			{
				protocol: "https",
				hostname: "strapi.lacollettadischi.it",
				port: "1337",
				pathname: "/uploads/**",
			},
		],
		domains: ["localhost", "127.0.0.1", "strapi.lacollettadischi.it"],
	},
};

module.exports = nextConfig;
