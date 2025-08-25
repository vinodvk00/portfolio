export const Contact = () => {
    return (
        <section id="contact" className="mt-24 mb-12 max-w-[80%] scroll-mt-36">
            <h2 className="mb-6 text-sm text-gray-500">
                ~/contact/get-in-touch
            </h2>

            <div className="space-y-4 text-xl leading-relaxed text-gray-200">
                <p>
                    Do you have a project in mind? Or would like to colab? Feel
                    free to contact me. You can find me at various places around
                    the web, including{' '}
                    <span className="group relative inline-block">
                        <a
                            href="https://linkedin.com/in/iamvinod00/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            LinkedIn
                        </a>

                        {/* Hover Card images */}
                        <div className="absolute bottom-full left-0 mb-2 w-[40vw] scale-0 transform opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100">
                            <div className="group/image relative overflow-hidden">
                                <img
                                    src="./media/linkedin-profile-preview-mobile.webp"
                                    alt="LinkedIn Profile - Slanted"
                                    className="h-full w-full object-cover object-top transition-all duration-500 ease-in-out group-hover/image:opacity-0"
                                    loading="lazy"
                                />

                                {/* Scrollable vertical image - shows on hover over the image */}
                                <div className="scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 absolute inset-0 overflow-y-auto opacity-0 transition-all duration-500 ease-in-out group-hover/image:opacity-100">
                                    <img
                                        src="./media/linkedin-profile-preview-mobile-vertical.webp"
                                        alt="LinkedIn Profile - Vertical (Scrollable)"
                                        className="w-full object-cover object-top"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </span>{' '}
                    and{' '}
                    <a
                        href="https://x.com/iamvinod0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:underline"
                    >
                        X (Twitter)
                    </a>
                    . Or send me an email at{' '}
                    <a
                        href="mailto:vinodkumar197904@gmail.com"
                        className="text-blue-400 hover:underline"
                    >
                        vinodkumar197904@gmail.com
                    </a>
                    .
                </p>
            </div>
        </section>
    );
};

export default Contact;
