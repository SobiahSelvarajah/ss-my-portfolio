import Image from "next/image";
import { Check, Code2, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import type { ProjectFragmentId } from "@/data/projectFragments";

type ProjectDetailContentProps = {
    project: Project;
    selectedFragment: ProjectFragmentId;
};

export default function ProjectDetailContent({
    project,
    selectedFragment,
}: ProjectDetailContentProps) {
    switch (selectedFragment) {
        case "overview":
            return (
                <div className="max-w-3xl space-y-5">
                    {project.description.map((paragraph) => (
                        <p
                            key={paragraph}
                            className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            );

        case "features":
            return (
                <ul className="grid gap-4 sm:grid-cols-2">
                    {project.features.map((feature) => (
                        <li
                            key={feature}
                            className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/70"
                        >
                            <Check
                                aria-hidden="true"
                                className="mt-1 size-4 shrink-0 text-sky-300"
                            />

                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            );

        case "technologies":
            return (
                <div className="grid gap-5 sm:grid-cols-2">
                    {project.technologies.map((group) => (
                        <section
                            key={group.category}
                            className="rounded-xl border border-white/10 bg-white/5 p-5"
                        >
                            <h3 className="font-medium text-white">
                                {group.category}
                            </h3>
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {group.items.map((technology) => (
                                    <li
                                        key={technology} 
                                        className="rounded-full border border-sky-200/15 bg-sky-300/5 px-3 py-1.5 text-xs text-sky-100/80"
                                    >
                                        {technology}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>
            );

        case "challenge":
            return (
                <div className="max-w-3xl">
                    <h3 className="text-xl font-medium text-white sm:text-2xl">
                        {project.challenge.title}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                        {project.challenge.description}
                    </p>
                    <aside className="mt-8 rounded-xl border border-sky-200/15 bg-sky-300/5 p-5 sm:p-6">
                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-sky-300">
                            What I learned
                        </p>
                        <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
                            {project.challenge.takeaway}
                        </p>
                    </aside>
                </div>
            );
        
        case "gallery":
            return (
                <div>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-sky-300 px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
                        >
                            View live project
                            <ExternalLink
                                aria-hidden="true"
                                className="size-4"
                            />
                        </a>

                        <a 
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
                        >
                            View source code
                            <Code2
                                aria-hidden="true"
                                className="size-4"
                            />
                        </a>
                    </div>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
                        {project.screenshots.map((screenshot, index) => (
                            <figure
                                key={screenshot.src}
                                className={`overflow-hidden rounded-xl border border-white/10 bg-black/30 ${
                                    index === 0 ? "sm:col-span-2" : ""
                                }`}
                            >
                                <div className="relative aspect-video">
                                    <Image
                                        src={screenshot.src}
                                        alt={screenshot.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="object-contain"
                                    />
                                </div>
                            </figure>
                        ))}
                    </div>
                </div>
            );
    }
}