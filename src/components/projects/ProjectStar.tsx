import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectStarProps = {
    project: Project;
};


export default function ProjectStar({
    project
}: ProjectStarProps) {
    return (
        <article className="flex flex-col items-center">
            <div className="group relative flex size-52 items-center justify-center rounded-full sm:size-64">
                
                {/* glow */}
                <span
                    aria-hidden="true"
                    className="absolute inset-4 rounded-full bg-sky-300/10 blur-2xl transition-all duration-500 group-hover:bg-sky-300/25"
                />

                {/* orbit */}
                <span
                    aria-hidden="true"
                    className="absolute inset-8 rounded-full border border-sky-200/15 transition-all duration-500 group-hover:scale-110 group-hover:border-sky-200/40"
                />

                {/* star rays */}
                <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-transparent via-sky-200/40 to-transparent"
                />
                <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2 bg-linear-to-b from-transparent via-sky-200/40 to-transparent"
                />

                {/* project icon */}
                <span className="relative flex size-28 items-center justify-center rounded-full border border-white/15 bg-slate-950/90 shadow-[0_0_45px_rgba(125,211,252,0.25)] transition duration-500 group-hover:scale-110 group-hover:shadow-[0_0_70px_rgba(125,211,252,0.45)] sm:size-32">
                    <Image
                        src={project.icon}
                        alt=""
                        width={96}
                        height={96}
                        className="size-16 rounded-xl object-cover sm:size-20"
                    />
                </span>
            </div>
            <h3 className="mt-2 text-2xl font-semibold text-white">
                {project.name}
            </h3>
            <p className="mt-3 max-w-md text-center text-sm leading-6 text-white/60">
                {project.shortSummary}
            </p>
        </article>
    );
}