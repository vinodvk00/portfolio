import React from 'react';

import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'Military Asset Management System (MAMS)',
        description: (
            <>
                Full-stack MERN app for managing military assets, purchases,
                transfers, and expenditures with{' '}
                <span className="font-medium text-white">
                    RBAC, dashboards, and audit logging
                </span>
                . Deployed live with demo access.
            </>
        ),
        imageUrl: './media/mams.webp',
        techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
        liveDemoUrl: 'https://mams.beyondlocalhost.space',
        githubUrl: 'https://github.com/vinodvk00/MAMS',
    },
    {
        title: 'ReachInbox',
        description: (
            <>
                ReachInbox Onebox is an intelligent email aggregator that
                transforms cold outreach by automatically finding, categorizing,
                and engaging high-intent leads
            </>
        ),
        imageUrl:
            'https://placehold.co/1920x1440/000000/FFFFFF?text=ReachInbox',
        techStack: [
            'Node.js',
            'TypeScript',
            'ElasticSearch',
            'Express',
            'RAG (AI)',
            'Web-hooks',
            'slack integration',
        ],
        githubUrl: 'https://github.com/vinodvk00/reachinbox',
    },
    {
        title: 'BeyondLocalhost',
        description: (
            <>
                Full-stack blog app built with{' '}
                <span className="font-medium text-white">
                    Node.js, Express, MongoDB, React, JWT, Redux
                </span>
                . Features{' '}
                <span className="font-medium text-white">
                    secure auth, CRUD blogs, responsive UI
                </span>
                , and deployed on production.
            </>
        ),
        imageUrl: './media/beyondlocalhostdotspace.webp',
        techStack: ['React', 'Redux', 'Node.js', 'MongoDB', 'JWT'],
        liveDemoUrl: 'https://beyondlocalhost.space',
        githubUrl: 'https://github.com/vinodvk00/beyondlocalhost',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="mt-24 scroll-mt-36">
            <h2 className="mb-6 text-sm text-gray-500">~/work/projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        techStack={project.techStack}
                        liveDemoUrl={project.liveDemoUrl}
                        githubUrl={project.githubUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
