/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "static.abeghelp.me",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
