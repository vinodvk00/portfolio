export const Contact = () => {
    return (
        <section className="mt-24 mb-12 max-w-[80%]">
            <h2 className="mb-6 text-sm text-gray-500">
                ~/contact/get-in-touch
            </h2>

            <div className="space-y-4 text-xl leading-relaxed text-gray-200">
                <p>
                    Do you have a project in mind? Or would like to colab? Feel
                    free to contact me. You can find me at various places around
                    the web, including{' '}
                    <a
                        href="https://linkedin.com/in/iamvinod00/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        LinkedIn
                    </a>{' '}
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
