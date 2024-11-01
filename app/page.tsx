import clsx from "clsx";
import { Mail, Github, Instagram } from "lucide-react";
import { DynaPuff, Press_Start_2P } from "next/font/google";
import Image from "next/image";

const dynaPuff = DynaPuff({
  weight: ['500'], // Specify the weights you want to use
  subsets: ['latin'], // Specify the subsets you want to include
});

const pressStart2P = Press_Start_2P({
  weight: ['400'], // Specify the weights you want to use
  subsets: ['latin'], // Specify the subsets you want to include
});


const technologies = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="p-4 flex justify-between items-center">
        <h1 className={pressStart2P.className}>Mourad Beddibi</h1>
        <nav className="hidden md:flex space-x-4 font-bold">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#portfolio" className="hover:text-gray-300">Portfolio</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#posts" className="hover:text-gray-300">Posts</a>
          <a href="#contact" className="hover:text-gray-300">Contact Me</a>
        </nav>
        <div></div>
      </header>

      <main className="p-4 max-w-4xl mx-auto space-y-12">
        <section className="bg-gray-900 rounded-lg p-6 space-y-4">
          <h2 className={clsx(pressStart2P.className, "text-3xl font-bold")}>Mourad Beddibi</h2>
          <p className="text-gray-400">
            <span className="inline-block mr-2">📍</span>
            Meknes, Morocco
          </p>
          <p className={dynaPuff.className}>I&apos;m {new Date().getFullYear() - 2006} years old Full-Stack Web Developer. I have been programming for more than 4 years. I create professional websites.</p>
          <div className="flex space-x-4">
            <Mail className="w-6 h-6" />
            <a href="https://github.com/Mouradbdb" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
            <Instagram className="w-6 h-6" />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">What I work with</h2>
          <div className="grid grid-cols-7 gap-4">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center justify-center p-2 transition-transform hover:scale-110">
                <Image src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain" width={12} height={12} />
                <span className="mt-2 text-xs text-center font-bold">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}