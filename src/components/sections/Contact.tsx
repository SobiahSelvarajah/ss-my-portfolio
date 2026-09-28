import { CodeXml, Mail } from "lucide-react";
import { Button } from "../ui/button";

export default function Contact() {
    return (
        <section
            id="contact"
            className="scroll-mt-32 px-5 py-24 sm:px-10 lg:scroll-mt-0 lg:px-16 lg:py-32"
        >
            <article className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-10 lg:p-14">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-sky-300 sm:text-sm">
                    Get in touch
                </p>
                <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                    Let&apos;s build something useful together.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                    If you&apos;d like to discuss an opportunity, ask about one
                    of my projects or simply start a conversation, I&apos;d be 
                    happy to hear from you.
                </p>
                <nav
                    aria-label="Contact links"
                    className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap"
                >
                    <Button
                        asChild
                        size="lg"
                        className="bg-sky-300 text-slate-950 hover:bg-sky-200"
                    >
                        <a href="mailto:sobiahselvarajah@hotmail.com">
                            Email me
                            <Mail aria-hidden="true" />
                        </a>
                    </Button>

                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                    >
                        <a 
                            href="https://github.com/SobiahSelvarajah"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View Github
                            <CodeXml aria-hidden="true" />
                        </a>
                    </Button>
                </nav>

                <a 
                    href="mailto:sobiahselvarajah@hotmail.com"
                    className="mt-10 inline-block text-sm text-white/50 transition-colors hover:text-sky-300"
                >
                    sobiahselvarajah@hotmail.com
                </a>
            </article>
        </section>
    );
}