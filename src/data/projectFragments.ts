export type ProjectFragmentId = 
    | "overview"
    | "features"
    | "technologies"
    | "challenge"
    | "gallery";

export type ProjectFragment = {
    id: ProjectFragmentId;
    label: string;
    position: string;
    startX: number;
    startY: number;
};

export const projectFragments: ProjectFragment[] = [
    {
        id: "overview",
        label: "Overview",
        position: "lg:left-[10%] lg:top-[8%]",
        startX: 220,
        startY: 130,
    },
    {
        id: "features",
        label: "Features",
        position: "lg:right-[10%] lg:top-[8%]",
        startX: -220,
        startY: 130,
    },
    {
        id: "technologies",
        label: "Technologies",
        position: "lg:left-[2%] lg:top-[46%]",
        startX: 280,
        startY: 0,
    },
    {
        id: "challenge",
        label: "Challenge",
        position: "lg:right-[2%] lg:top-[46%]",
        startX: -280,
        startY: 0,
    },
    {
        id: "gallery",
        label: "Gallery",
        position: "lg:bottom-[2%] lg:left-1/2 lg:-translate-x-1/2",
        startX: 0,
        startY: -180,
    },
];