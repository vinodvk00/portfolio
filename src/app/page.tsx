import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen text-gray-200 font-mono px-6 md:px-20 lg:px-32 py-20">
            {/* Hero Section */}
            <section className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Hello, I&apos;m <span className="text-gray-400">Vinod</span>
                    .
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-gray-400">
                    A{" "}
                    <span className="text-white font-semibold">
                        Software Development Intern @ Pangea Tech
                    </span>{" "}
                    and grad 2k25{" "}
                    <span className="text-white font-semibold">
                        CS & IT student at MLRIT
                    </span>
                    . Skilled in{" "}
                    <span className="text-white font-semibold">
                        JavaScript, TypeScript, C++, Java
                    </span>
                    , and experienced with{" "}
                    <span className="text-white font-semibold">
                        MERN, NestJS, and system design
                    </span>
                    . Passionate about building scalable apps, solving
                    real-world problems, and mentoring peers in{" "}
                    <span className="text-white font-semibold">DSA</span>.
                </p>

                {/* Social Links */}
                <div className="flex gap-6 mt-8">
                    <a
                        href="https://github.com/vinodvk00"
                        target="_blank"
                        className="hover:text-white transition">
                        <Github size={24} />
                    </a>
                    <a
                        href="https://linkedin.com/in/iamvinod00/"
                        target="_blank"
                        className="hover:text-white transition">
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="mailto:vinodkumar197904@gmail.com"
                        className="hover:text-white transition">
                        <Mail size={24} />
                    </a>
                </div>
            </section>

            {/* Work/Projects Section */}
            <section className="mt-24">
                <h2 className="text-gray-500 text-sm mb-6">~/work/projects</h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* MAMS */}
                    <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-700 hover:bg-gray-800 transition">
                        <h3 className="text-lg font-semibold text-white">
                            Military Asset Management System (MAMS)
                        </h3>
                        <p className="text-gray-400 mt-2 text-sm">
                            Full-stack MERN app for managing military assets,
                            purchases, transfers, and expenditures with{" "}
                            <span className="text-white font-medium">
                                RBAC, dashboards, and audit logging
                            </span>
                            . Deployed live with demo access.
                        </p>
                        <div className="mt-4 flex gap-3">
                            <a
                                href="https://mams.beyondlocalhost.space"
                                target="_blank"
                                className="text-blue-400 hover:underline">
                                Live Demo
                            </a>
                            <a
                                href="https://github.com/vinodvk00/MAMS"
                                target="_blank"
                                className="text-blue-400 hover:underline">
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/* ReachInbox */}
                    <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-700 hover:bg-gray-800 transition">
                        <h3 className="text-lg font-semibold text-white">
                            ReachInbox
                        </h3>
                        <p className="text-gray-400 mt-2 text-sm">
                            Email outreach platform with{" "}
                            <span className="text-white font-medium">
                                multi-step campaigns, inbox rotation, warm-up
                            </span>{" "}
                            and{" "}
                            <span className="text-white font-medium">
                                analytics for high deliverability
                            </span>
                            . Built for collaboration and scalability.
                        </p>
                        <div className="mt-4 flex gap-3">
                            <a
                                href="https://github.com/vinodvk00/reachinbox"
                                target="_blank"
                                className="text-blue-400 hover:underline">
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/* BeyondLocalhost */}
                    <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-700 hover:bg-gray-800 transition">
                        <h3 className="text-lg font-semibold text-white">
                            BeyondLocalhost
                        </h3>
                        <p className="text-gray-400 mt-2 text-sm">
                            Full-stack blog app built with{" "}
                            <span className="text-white font-medium">
                                Node.js, Express, MongoDB, React, JWT, Redux
                            </span>
                            . Features{" "}
                            <span className="text-white font-medium">
                                secure auth, CRUD blogs, responsive UI
                            </span>
                            , and deployed on production.
                        </p>
                        <div className="mt-4 flex gap-3">
                            <a
                                href="https://beyondlocalhost.space"
                                target="_blank"
                                className="text-blue-400 hover:underline">
                                Live Demo
                            </a>
                            <a
                                href="https://github.com/vinodvk00/beyondlocalhost"
                                target="_blank"
                                className="text-blue-400 hover:underline">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
