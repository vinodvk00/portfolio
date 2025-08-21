import React from 'react';

import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: React.ReactNode;
    imageUrl: string;
    techStack: string[];
    liveDemoUrl?: string;
    githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    imageUrl,
    techStack,
    liveDemoUrl,
    githubUrl,
}) => {
    const mainLink = liveDemoUrl || githubUrl;

    return (
        <div className="group relative h-80 w-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-lg">
            {/* Background Image */}
            <img
                src={imageUrl}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover Content - Title, Description, and Tech Stack */}
            <a href={mainLink} target="_blank" className="cursor-pointer">
                <div className="absolute inset-0 flex flex-col bg-gradient-to-t from-black/90 via-black/60 to-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {/* Title at top */}
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-white">
                            {title}
                        </h3>
                    </div>

                    {/* Centered content */}
                    <div className="flex flex-1 items-center justify-center px-6 pb-16">
                        <div className="text-center">
                            <div className="mb-4 rounded border border-gray-600 bg-black/80 p-4 text-sm text-gray-100">
                                {description}
                            </div>
                            <div className="flex flex-wrap justify-center gap-2">
                                {techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-white"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </a>

            {/* Footer - Hidden on hover */}
            <div className="absolute bottom-0 w-full p-4">
                <div className="flex items-center justify-between">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white transition-colors hover:text-blue-400"
                    >
                        <Github size={20} />
                        <span className="font-medium">GitHub</span>
                    </a>
                    {liveDemoUrl && (
                        <a
                            href={liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white transition-colors hover:text-blue-400"
                        >
                            <span className="font-medium">View</span>
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
