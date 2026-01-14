import { FaHome, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-blue-950 dark:bg-gray-900 text-white">
      <div className="mx-auto max-w-xl px-4 py-6 space-y-4">
        {/* Links */}
        <nav
          className="flex justify-center gap-6"
          aria-label="Redes sociales"
        >
          <a
            href="https://jcesar206.github.io/myPersonalBlog/"
            target="_blank"
            rel="noreferrer"
            aria-label="Home"
          >
            <FaHome size={24} className="hover:text-sky-400" />
          </a>

          <a
            href="https://github.com/JCesar206"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={24} className="hover:text-sky-400" />
          </a>

          <a
            href="https://www.linkedin.com/in/jcesar206"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} className="hover:text-sky-400" />
          </a>

          <a
            href="mailto:jcesar206@hotmail.com"
            aria-label="Email Hotmail"
          >
            <FaEnvelope size={24} className="hover:text-sky-400" />
          </a>

          <a
            href="mailto:jcesary06@gmail.com"
            aria-label="Email Gmail"
          >
            <SiGmail size={24} className="hover:text-sky-400" />
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-center text-xs font-medium opacity-80">
          © {new Date().getFullYear()} Notes App Local · Juls
        </p>
      </div>
    </footer>
  );
}