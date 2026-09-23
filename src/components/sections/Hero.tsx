import { ArrowDown, Mail } from "lucide-react";
import { Button } from "../ui/button";


export default function Hero() {
    return (
        <section
            id="home"
            className="flex min-h-svh items-start px-5 pb-16 pt-44 sm:items-center sm:px-10 sm:pb-12 sm:pt-32 lg:px-16 lg:py-16"
        >
            <div className="w-full max-w-3xl">
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-sky-300 sm:mb-6 sm:text-sm sm:tracking-[0.32em]">
                    Junior Full-Stack Developer
                </p>
                <h1 className="text-3xl font-semibold leading-tight tracking-normal text-white sm:text-6xl lg:text-7xl">
                    Hi, I&apos;m Sobiah.
                </h1>
                <p className="mt-6 max-w-2xl text-sm leading-6 tracking-[0.01em] text-white/70 sm:mt-8 sm:text-xl sm:leading-8">
                    I build thoughtful and responsive web applications using React,
                    Next.js and TypeScript.
                </p>

                <div className="mt-12 flex flex-col items-start gap-3 sm:mt-16 sm:flex-row sm:flex-wrap sm:gap-4">
                    <Button 
                        asChild 
                        size="lg"
                        className="bg-sky-300 text-slate-950 hover:bg-sky-200 sm:w-auto"
                    >
                        <a href="#projects">
                            View my work
                            <ArrowDown />
                        </a>
                    </Button>
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white sm:w-auto"
                    >
                        <a href="#contact">
                            Contact me
                            <Mail />
                        </a>
                    </Button>
                </div>
                <div className="mt-12 flex max-w-2xl flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-6 text-xs tracking-wide text-white/60 sm:mt-10 sm:gap-x-6 sm:border-0 sm:pt-0">
                    <span>React</span>
                    <span>Next.js</span>
                    <span>TypeScript</span>
                    <span>Tailwind CSS</span>
                    <span>Node.js</span>
                    <span>Prisma</span>
                </div>
            </div>
        </section>
    );
}