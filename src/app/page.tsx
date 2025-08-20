import { Github, Hand, Linkedin, Mail } from 'lucide-react';

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
                    <p className="mt-6 text-2xl leading-relaxed md:mt-0 md:w-2/3">
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
                    </p>
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
            <section className="mt-24">
                <h2 className="mb-6 text-sm text-gray-500">~/work/projects</h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* MAMS */}
                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 transition hover:border-gray-700 hover:bg-gray-800">
                        <h3 className="text-lg font-semibold text-white">
                            Military Asset Management System (MAMS)
                        </h3>
                        <p className="mt-2 text-sm text-gray-400">
                            Full-stack MERN app for managing military assets,
                            purchases, transfers, and expenditures with{' '}
                            <span className="font-medium text-white">
                                RBAC, dashboards, and audit logging
                            </span>
                            . Deployed live with demo access.
                        </p>
                        <div className="mt-4 flex gap-3">
                            <a
                                href="https://mams.beyondlocalhost.space"
                                target="_blank"
                                className="text-blue-400 hover:underline"
                            >
                                Live Demo
                            </a>
                            <a
                                href="https://github.com/vinodvk00/MAMS"
                                target="_blank"
                                className="text-blue-400 hover:underline"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/* ReachInbox */}
                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 transition hover:border-gray-700 hover:bg-gray-800">
                        <h3 className="text-lg font-semibold text-white">
                            ReachInbox
                        </h3>
                        <p className="mt-2 text-sm text-gray-400">
                            Email outreach platform with{' '}
                            <span className="font-medium text-white">
                                multi-step campaigns, inbox rotation, warm-up
                            </span>{' '}
                            and{' '}
                            <span className="font-medium text-white">
                                analytics for high deliverability
                            </span>
                            . Built for collaboration and scalability.
                        </p>
                        <div className="mt-4 flex gap-3">
                            <a
                                href="https://github.com/vinodvk00/reachinbox"
                                target="_blank"
                                className="text-blue-400 hover:underline"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/* BeyondLocalhost */}
                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 transition hover:border-gray-700 hover:bg-gray-800">
                        <h3 className="text-lg font-semibold text-white">
                            BeyondLocalhost
                        </h3>
                        <p className="mt-2 text-sm text-gray-400">
                            Full-stack blog app built with{' '}
                            <span className="font-medium text-white">
                                Node.js, Express, MongoDB, React, JWT, Redux
                            </span>
                            . Features{' '}
                            <span className="font-medium text-white">
                                secure auth, CRUD blogs, responsive UI
                            </span>
                            , and deployed on production.
                        </p>
                        <div className="mt-4 flex gap-3">
                            <a
                                href="https://beyondlocalhost.space"
                                target="_blank"
                                className="text-blue-400 hover:underline"
                            >
                                Live Demo
                            </a>
                            <a
                                href="https://github.com/vinodvk00/beyondlocalhost"
                                target="_blank"
                                className="text-blue-400 hover:underline"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
