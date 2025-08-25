import Link from 'next/link';

import {
    Briefcase,
    CircleUserRound,
    Library,
    Mail,
    Newspaper,
} from 'lucide-react';

export const Header = () => {
    return (
        <header className="sticky top-0 right-0 left-0 z-50 mx-24 flex items-center justify-between p-4 text-lg md:p-6">
            {/* Logo */}
            <Link
                href="/"
                className="text-2xl font-bold tracking-widest uppercase hover:text-gray-300"
            >
                VK
            </Link>

            {/* Navigation */}
            <nav>
                <ul className="flex items-center gap-6">
                    <li>
                        <Link
                            href="/#about"
                            className="flex items-center gap-2 hover:text-gray-300"
                        >
                            <CircleUserRound className="h-4 w-4" />
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#projects"
                            className="flex items-center gap-2 hover:text-gray-300"
                        >
                            <Briefcase className="h-4 w-4" />
                            Project
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#blog"
                            className="flex items-center gap-2 hover:text-gray-300"
                        >
                            <Newspaper className="h-4 w-4" />
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#resources"
                            className="flex items-center gap-2 hover:text-gray-300"
                        >
                            <Library className="h-4 w-4" />
                            Resources
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#contact"
                            className="flex items-center gap-2 hover:text-gray-300"
                        >
                            <Mail className="h-4 w-4" />
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
