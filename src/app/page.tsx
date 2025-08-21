import { Github, Hand, Linkedin, Mail } from 'lucide-react';

import Blog from '@/components/blog/Blog';
import Projects from '@/components/projects/Project';
import WorkExperience from '@/components/work/WorkSection';
import Contact from '@/components/contact/Contact';

export default function Home() {
    return (
        <main className="mx-24 min-h-screen px-6 py-20 font-mono text-gray-200">
            {/* Hero Section */}
            <section className="">
                <div className="flex flex-col pb-8 md:flex-row md:items-start md:justify-between">
                    <h1 className="text-4xl font-bold text-white md:w-1/3 md:text-6xl">
                        <div className="mb-4 flex">
                            Hello
                            <img
                                src="/chat-smile-2.svg"
                                alt="smile"
                                className="ml-0.5 h-6 w-6"
                            />
                        </div>
                        I&apos;m Vinod
                    </h1>
                    <div className="mt-6 text-2xl leading-relaxed md:mt-0 md:w-2/3">
                        {/* A{" "}
                        <span className="text-white font-semibold">
                            Software Engineer
                        </span>
                        , 
                        <span className="text-white font-semibold">
                            JavaScript, TypeScript, C++, Java
                        </span>
                        , and experienced with{" "}
                        <span className="text-white font-semibold">
                            MERN, NestJS, and system design
                        </span>
                        . Passionate about building scalable apps, solving
                        real-world problems, and mentoring peers in{" "}
                        <span className="text-white font-semibold">DSA</span>. */}
                        <div>
                            a Software Engineer focused on building powerful,
                            scalable backend systems while delivering clean,
                            purposeful frontends that make complex functionality
                            feel effortless
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 flex gap-6">
                    <a
                        href="https://github.com/vinodvk00"
                        target="_blank"
                        className="transition hover:text-white"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://linkedin.com/in/iamvinod00/"
                        target="_blank"
                        className="transition hover:text-white"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="mailto:vinodkumar197904@gmail.com"
                        className="transition hover:text-white"
                    >
                        <Mail size={24} />
                    </a>
                </div>
            </section>

            {/* Work/Projects Section */}
            <Projects />

            <WorkExperience />

            <Blog />

            <Contact />
        </main>
    );
}
