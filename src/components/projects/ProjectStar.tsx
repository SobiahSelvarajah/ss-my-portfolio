import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectStarProps = {
    project: Project;
    isActive: boolean;
    onToggle: () => void;
};


export default function ProjectStar({
    project,
    isActive,
    onToggle,
}: ProjectStarProps) {
    return (
        <article className="flex flex-col items-center">
            <button
                type="button"
                aria-label={`${isActive ? "Close" : "Explore"} ${project.name}`}
                aria-expanded={isActive}
                onClick={onToggle}
                className="group flex flex-col items-center rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
            >
                <span className="relative flex size-52 items-center justify-center rounded-full sm:size-64">
                    
                    {/* glow */}
                    <span 
                        aria-hidden="true"
                        className={`absolute inset-4 rounded-full blur-2xl transition-all duration-500 ${
                            isActive
                                ? "scale-110 bg-sky-300/30"
                                : "bg-sky-300/10 group-hover:bg-sky-300/25"
                        }`}
                    />

                    {/* orbit */}
                    <span
                        aria-hidden="true"
                        className={`absolute inset-8 rounded-full border transition-all duration-500 ${
                            isActive
                                ? "scale-110 border-sky-200/50"
                                : "border-sky-200/15 group-hover:scale-110 group-hover:border-sky-200/40"
                        }`} 
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
                    <span
                        className={`relative flex size-28 items-center justify-center rounded-full border border-white/15 bg-slate-950/90 transition duration-500 sm:size-32 ${
                            isActive
                                ? "scale-110 shadow-[0_0_75px_rgba(125,211,252,0.5)]"
                                : "shadow-[0_0_45px_rgba(125,211,252,0.25)] group-hover:scale-110 group-hover:shadow-[0_0_70px_rgba(125,211,252,0.45)]"
                        }`}
                    >
                        <Image
                            src={project.icon}
                            alt=""
                            width={96}
                            height={96}
                            className="size-16 rounded-xl object-cover sm:size-20"
                        />
                    </span>
                </span>
            </button>

            <h3 className="mt-1 text-2xl font-semibold text-white">
                {project.name}
            </h3>
            <span className="mt-3 text-xs uppercase tracking-[0.2em] text-sky-300/70">
                {isActive ? "Selected" : "Select to explore"}
            </span>

            <p className="mt-3 max-w-md text-center text-sm leading-6 text-white/60">
                {project.shortSummary}
            </p>
        </article>
    );
}