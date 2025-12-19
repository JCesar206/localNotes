import { FaHome, FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
	return (
		<footer className="fixed bg-blue-950 text-white bottom-0 left-0 py-4 -pt-3 w-full">
			<div className="flex justify-center space-x-6 mb-2">
				<a href="https://jcesar206.github.io/myPersonalBlog/" target="_blank" rel="noreferrer" title="Github"><FaHome className="text-white hover:text-orange-500" size={20} title="Home Page"/></a>
				<a href="https://github.com/JCesar206" target="_blank" rel="noreferrer" title="Github"><FaGithub className="text-white hover:text-orange-500" size={20} title="Github"/></a>
				<a href="https://www.linkedin.com/in/jcesar206" target="_blank" rel="noreferrer" title="Linkedin"><FaLinkedin className="text-white hover:text-orange-500" size={20} title="Linkedin"/></a>
				<a href="mailto:jcesar206@hotmail.com" title="Hotmail"><FaEnvelope className="text-white hover:text-orange-500" size={20}/></a>
				<a href="mailto:jcesary06@gmail.com" title="Gmail"><SiGmail className="text-white hover:text-orange-500" size={20}/></a>
			</div>

			<p className="text-sm text-center text-white font-semibold hover:text-orange-500">&copy; {new Date().getFullYear()} Notes App Local | Juls. 😁| All right reserved.
			</p>
		</footer>
	);
}