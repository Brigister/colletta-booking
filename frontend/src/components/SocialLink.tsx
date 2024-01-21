import Image from "next/image";
import Link from "next/link";

interface SocialLinkProps {
	link: string;
	image: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ link, image }) => {
	return (
		<Link href={link} target="_blank">
			<Image src={`/assets/${image}.png`} width={25} height={25} alt={`${image} link`} />
		</Link>
	);
};

export default SocialLink;
