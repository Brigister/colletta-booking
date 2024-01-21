import Image from "next/image";
import fullLogo from "../../public/assets/full-logo.png";

const Bio: React.FC = async () => {
	const year = new Date().getFullYear();

	return (
		<section className="mx-4 mb-6 flex flex-col gap-y-4">
			<div className="flex items-center">
				<Image src={fullLogo} width={150} height={150} alt="Logo colletta booking" />
				<div className="mr-[150px] w-full">
					<h1 className="text-center text-2xl font-bold  lg:text-7xl">La Colletta Booking</h1>
					<p className="text-center text-xl lg:text-4xl">Roster {year}</p>
				</div>
			</div>

			<p className="text-sm lg:text-base">
				​Ciao!
				<br />A seguire una breve presentazione del reparto alternative/indie. Di seguito una breve presentazione del reparto
				cantautorale disponibile. Troverete una breve descrizione, un brano rappresentativo ed i loro link social.
			</p>

			<div>
				<p className="pb-1 text-sm lg:text-base">Per ulteriori info o per organizzare un concerto:</p>
				<p className="text-sm lg:text-base">
					Giovanni Favaro <a href="tel:+393292777765">(+39) 329 27 77 765</a>
				</p>
				<p className="text-sm lg:text-base">
					<a href="mailto:booking@lacollettadischi.it">booking@lacollettadischi.it</a>
				</p>
			</div>
		</section>
	);
};

export default Bio;
