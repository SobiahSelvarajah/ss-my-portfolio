

const skillGroups = [
    {
        title: "Frontend",
        skills: "React, Next.js, TypeScript and Tailwind CSS",
    },
    {
        title: "Backend",
        skills: "Node.js, REST APIs, Prisma and relational databases",
    },
    {
        title: "Approach",
        skills: "Responsive design, accessibility and intuitive user experiences",
    },
];

const paragraphStyles = "max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8";


export default function About() {
    return (
        <section
            id="about"
            className="mx-auto max-w-6xl scroll-mt-32 px-5 py-24 sm:px-10 lg:scroll-mt-0 lg:px-16 lg:py-32"
        >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-sky-300 sm:text-sm">
                About me
            </p>
            <div className="mt-6 grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
                <article>
                    <h2 className="mb-8 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                        I enjoy turning ideas into clear and useful 
                        digital experiences.
                    </h2>
                    <p className={paragraphStyles}>
                        I&apos;m a junior full-stack developer with a background
                        in mathematics and a particular interest in building
                        responsive, user-focused applications.
                    </p>
                    <p className={`${paragraphStyles} mt-5`}>
                        I enjoy working across the full development process,
                        from shaping an interface and integrating APIs to
                        designing database-backed features that solve 
                        practical problems.
                    </p>
                    <p className={`${paragraphStyles} mt-5`}>
                        I&apos;m currently seeking an opportunity where I can
                        continue developing my skills, contribute meaningful
                        work and grow as part of a collaborative team.
                    </p>
                </article>
                <ul className="space-y-4">
                    {skillGroups.map((group) => (
                        <li
                            key={group.title}
                            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                        >
                            <h3 className="font-medium text-white">
                                {group.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-white/60">
                                {group.skills}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}