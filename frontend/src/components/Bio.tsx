const Bio: React.FC = () => {
	return (
		<>
			<h1 className="pb-2 text-center text-7xl font-bold">La Colletta Booking</h1>
			<p className="pb-2 text-center text-4xl">Roster 2023</p>

			<p className="m-4">
				​Ciao!, A seguire una breve presentazione del reparto alternative/indie. Di seguito una breve presentazione del reparto
				cantautorale disponibile. Troverete una breve descrizione, un brano rappresentativo ed i loro link social.
			</p>

			<p className="text-center">
				Per ulteriori info o per organizzare un concerto: Giovanni Favaro <a href="tel:+393292777765">(+39) 329 27 77 765</a> |{" "}
				<a href="mailto:booking@lacollettadischi.it">booking@lacollettadischi.it</a>
			</p>
		</>
	);
};

export default Bio;
