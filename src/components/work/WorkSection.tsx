'use client';

import { useState } from 'react';

import { ChevronRight, ExternalLink } from 'lucide-react';

export const WorkExperience = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="mt-24 max-w-[70%]">
            <h2 className="mb-6 text-sm text-gray-500">~/work/experience</h2>

            <div className="space-y-2">
                <div className="group ">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center justify-between gap-2 text-left transition-colors hover:text-white"
                    >
                        <div className="flex items-center gap-2 text-xl font-semibold text-white">
                            <ChevronRight
                                size={16}
                                className={`text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                            />
                            <span className="font-medium text-white">
                                Software Engineer (Intern)
                            </span>
                        </div>
                        <span className="text-sm text-gray-400">
                            April 2025 - June 2025
                        </span>
                    </button>

                    {isExpanded && (
                        <div className="mt-4 ml-6 space-y-4">
                            <div className="flex items-center gap-2">
                                <a
                                    href="https://www.linkedin.com/company/pangea-tech/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-blue-400 hover:underline"
                                >
                                    Pangea Tech
                                    <ExternalLink size={14} />
                                </a>
                                <span className="text-gray-500">•</span>
                                <span className="text-sm text-gray-400">
                                    Bengaluru, India
                                </span>
                            </div>

                            <div className="space-y-3 leading-relaxed text-gray-300">
                                <p>
                                    Collaborated on full-stack architecture,
                                    gaining valuable experience in
                                    backend-frontend integration patterns and
                                    API consumption strategies
                                </p>

                                <div>
                                    <p className="mb-2 font-medium text-white">
                                        Key Highlights:
                                    </p>
                                    <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                                        <li>
                                            Developed a RAG-based system to
                                            generate intelligent job description
                                            templates by analyzing historical JD
                                            data, improving HR efficiency by
                                            automating content creation
                                        </li>
                                        <li>
                                            Built RESTful APIs with NestJS
                                            framework implementing MVC
                                            architecture, JWT authentication,
                                            and MongoDB integration for a
                                            restaurant order management system
                                        </li>
                                        <li>
                                            Gained hands-on experience with
                                            backend development practices
                                            including API design, authentication
                                            flows, and database schema design
                                            during intensive 3-month on-site
                                            program
                                        </li>
                                        <li>
                                            Developed the complete frontend for
                                            a job portal using React and
                                            TypeScript, implementing features
                                            like automated resume parsing, admin
                                            dashboards, and AI-powered job
                                            posting creation
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="mb-2 font-medium text-white">
                                        Technologies Used:
                                    </p>
                                    <p className="text-gray-300">
                                        React, TypeScript, NestJS, MongoDB, RAG
                                        (AI)
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
