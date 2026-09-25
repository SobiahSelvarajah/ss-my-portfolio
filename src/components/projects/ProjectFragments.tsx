"use client";

import { AnimatePresence, motion } from "framer-motion";
import { projectFragments } from "@/data/projectFragments";

type ProjectFragmentsProps = {
    projectId: string;
    isActive: boolean;
};


export default function ProjectFragments({
    projectId,
    isActive,
}: ProjectFragmentsProps) {
    return (
        <AnimatePresence>
            {isActive && (
                <motion.ul
                    id={`${projectId}-fragments`}
                    aria-label="Project detail categories"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-8 grid w-full max-w-lg grid-cols-2 gap-3 lg:pointer-events-none lg:absolute lg:inset-0 lg:mt-0 lg:max-w-none"
                >
                    {projectFragments.map((fragment, index) => (
                        <li
                            key={fragment.id}
                            className={`w-full last:col-span-2 lg:pointer-events-auto lg:absolute lg:w-40 lg:last:col-span-1 ${fragment.position}`}
                        >
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.35,
                                    x: fragment.startX,
                                    y: fragment.startY,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    x: 0,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.35,
                                    x: fragment.startX,
                                    y: fragment.startY,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 170,
                                    damping: 18,
                                    delay: index * 0.06,
                                }}
                                className="flex min-h-20 items-center justify-center rounded-xl border border-sky-200/15 bg-slate-950/70 px-5 py-4 text-center text-sm font-medium tracking-wide text-white/80 shadow-[0_0_30px_rgba(125,211,252,0.08)] backdrop-blur-md"
                            >
                                {fragment.label}
                            </motion.div>
                        </li>
                    ))}
                </motion.ul>
            )}
        </AnimatePresence>
    );
}