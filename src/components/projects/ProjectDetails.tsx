"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { ProjectFragmentId } from "@/data/projectFragments";

type ProjectDetailsProps = {
    projectName: string;
    selectedFragment: ProjectFragmentId;
    onClose: () => void;
};

const fragmentTitles: Record<ProjectFragmentId, string> = {
    overview: "Overview",
    features: "Main features",
    technologies: "Technologies",
    challenge: "Technical challenge",
    gallery: "Gallery",
};

export default function ProjectDetails({
    projectName,
    selectedFragment,
    onClose,
}: ProjectDetailsProps) {
    const title = fragmentTitles[selectedFragment];

    return (
        <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-details-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-x-5 bottom-5 top-28 z-60 overflow-y-auto rounded-2xl border border-white/10 bg-slate-950/95 p-6 shadow-[0_0_80px_rgba(125,211,252,0.15)] backdrop-blur-xl sm:inset-x-10 sm:p-8 lg:inset-x-auto lg:bottom-10 lg:left-74 lg:right-10 lg:top-10 lg:p-10"
        >
            <header className="flex items-start justify-between gap-6">
                <div>
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-sky-300">
                        {projectName}
                    </p>
                    <h2
                        id="project-details-title"
                        className="mt-3 text-3xl font-semibold text-white sm:text-4xl"
                    >
                        {title}
                    </h2>
                </div>
                <button
                    type="button"
                    aria-label="Close project details"
                    onClick={onClose}
                    className="rounded-full border border-white/10 bg-white/5 p-3 text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                    <X 
                        className="size-5" 
                        aria-hidden="true"
                    />
                </button>
            </header>

            <div className="mt-10">
                <p className="text-base leading-7 text-white/60">
                    The {title.toLowerCase()} content will appear here.
                </p>
            </div>
        </motion.section>
    );
}