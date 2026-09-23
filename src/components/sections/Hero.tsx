

export default function Hero() {
    return (
        <section
            id="home"
            className="flex min-h-svh items-center px-6 pb-10 pt-32 sm:px-10 lg:px-16 lg:py-16"
        >
            <div className="max-w-3xl">
                <p className="mb-6 text-sm font-medium uppercase tracking-[0.32em] text-sky-300">
                    Junior Full-Stack Developer
                </p>
                <h1 className="text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
                    Hi, I&apos;m Sobiah.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 tracking-[0.01em] text-white/70 sm:text-xl">
                    I build thoughtful and responsive web applications using React,
                    Next.js and TypeScript.
                </p>
            </div>
        </section>
    )
}