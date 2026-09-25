"use client";

import { useState } from "react";
import ProjectStar from "../projects/ProjectStar";
import { projects } from "@/data/projects";


export default function Projects() {
    const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

    return (
        <section
            id="projects"
            className="scroll-mt-32 px-5 py-24 sm:px-10 lg:scroll-mt-0 lg:px-16 lg:py-20"
        >
            <div className="mx-auto max-w-6xl">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-sky-300 sm:text-sm">
                    Selected work
                </p>
                <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                    Projects built around real user experiences.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                    Select a project star to explore the decisions, technologies
                    and challenges behind the finished application.
                </p>
                <div className="mt-14 grid place-items-center sm:mt-10">
                    {projects.map((project) => (
                        <ProjectStar 
                            key={project.id} 
                            project={project} 
                            isActive={activeProjectId === project.id}
                            onToggle={() =>
                                setActiveProjectId((currentId) =>
                                    currentId === project.id ? null : project.id
                                )
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}