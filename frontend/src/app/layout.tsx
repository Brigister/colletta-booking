import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { Metadata } from "next/types";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "La Colletta Booking",
	description: "Roster per la colletta dischi",
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
