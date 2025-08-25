import { BookOpen, Play } from 'lucide-react';

interface BlogPost {
    title: string;
    url: string;
    readTime: string;
    isBookmarked?: boolean;
}

const blogPosts: BlogPost[] = [
    {
        title: 'Born from the Stars',
        url: 'https://beyondlocalhost.space/post/born-from-the-stars',
        readTime: '2 min Read',
        isBookmarked: true,
    },
    {
        title: 'From Email Overwhelm to Lead Pipeline: Building ReachInbox',
        url: 'https://beyondlocalhost.space/post/from-email-overwhelm-to-lead-pipeline-building-reachinbox',
        readTime: '4 min Read',
    },
    {
        title: 'Test Post from Deployed',
        url: 'https://beyondlocalhost.space/post/test-post-from-deployed',
        readTime: '2 min Read',
        isBookmarked: true,
    },
];

export const Blog = () => {
    return (
        <section id="blog" className="mt-24 scroll-mt-36">
            <h2 className="mb-6 text-sm text-gray-500">
                ~/blog/documentations
            </h2>

            <div className="space-y-4 text-xl">
                {blogPosts.map((post, index) => (
                    <div key={index} className="group flex items-center gap-3">
                        <BookOpen
                            size={16}
                            className={`${post.isBookmarked ? 'text-yellow-400' : 'text-gray-500'} flex-shrink-0`}
                        />
                        <a
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white transition-colors hover:text-gray-300"
                        >
                            {post.title}
                        </a>
                        <div className="flex items-center gap-2">
                            <Play size={12} className="text-yellow-400" />
                            <span className="rounded bg-gray-800 px-2 py-1 text-sm text-gray-500">
                                {post.readTime}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
