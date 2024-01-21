import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Metadata from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "La colletta booking",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="it">
			<body className={`${inter.className} p-4`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
