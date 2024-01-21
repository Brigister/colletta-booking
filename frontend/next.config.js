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
				hostname: "*.lacollettadischi.it",
				port: "",
			},
			{
				protocol: "https",
				hostname: "*.lacollettadischi.it",
				port: "",
			},
		],
		domains: ["localhost", "127.0.0.1", "strapi.lacollettadischi.it"],
	},
};

module.exports = nextConfig;
