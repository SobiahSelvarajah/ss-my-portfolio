
export type TechnologyGroup = {
    category: string;
    items: string[];
};

export type ProjectScreenshot = {
    src: string;
    alt: string;
};

export type Project = {
    id: string;
    name: string;
    icon: string;
    shortSummary: string;
    description: string[];
    features: string[];
    technologies: TechnologyGroup[];
    challenge: {
        title: string;
        description: string;
        takeaway: string;
    };
    liveUrl: string;
    githubUrl: string;
    screenshots: ProjectScreenshot[];
};


export const projects: Project[] = [
    {
        id: "bookdrop",
        name: "BookDrop",
        icon: "/projects/bookdrop/icon.png",

        shortSummary: 
            "A full-stack book recommendation subscription app with personalised weekly picks, built with Next.js, TypeScript, Prisma and MySQL.",

        description: [
            "BookDrop is a full-stack book recommendation subscription service designed to make discovering your next read easier and more enjoyable.",
            "Users choose their favourite genre and subscribe with their email address to receive personalised weekly book recommendations directly in their inbox.",
            "The project focuses on creating a polished, low-friction subscription experience while demonstrating form validation, database persistence, transactional email and responsive interface development.",
        ],

        features: [
            "Fully responsive experience across mobile, tablet and desktop",
            "Genre-based book subscription signup",
            "Client-side and server-side form validation",
            "Persistent subscriber storage using MySQL",
            "Duplicate subscription handling",
            "Transactional confirmation emails",
            "Loading, validation and success states",
            "Animated testimonial carousel",
            "Responsive desktop and mobile navigation",
            "Smooth anchor navigation across routes",
            "Accessible form feedback amd dialog interactions",
            "Dark, editorial-inspired interface",
        ],

        technologies: [
            {
                category: "Frontend",
                items: [
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "shadcn/ui",
                    "Framer Motion",
                    "Lucide React",
                ],
            },
            {
                category: "Backend and database",
                items: [
                    "Next.js Server Actions",
                    "Prisma ORM",
                    "MySQL",
                    "Railway",
                ],
            },
            {
                category: "Email",
                items: ["Resend"],
            },
        ],

        challenge: {
            title: 
                "Building a reliable end-to-end subscription flow",

            description:
                "The main technical challenge was coordinating client-side validation, server-side validation, database persistence, duplicate email handling and confirmation email delivery as one consistent flow. A subscriber should only receive a success response after their data has been validated and stored correctly, while duplicate or invalid submissions need clear and useful feedback.",
            
            takeaway:
                "This taught me to treat server-side validation and database constraints as the source of truth, return structured results from server actions and design the interface around every possible request state rather than only the successful path.",
        },

        liveUrl: "https://ss-bookdrop.vercel.app/",
        githubUrl: "https://github.com/SobiahSelvarajah/ss-bookdrop",

        screenshots: [
            {
                src: "/projects/bookdrop/hero-desktop.png",
                alt: "BookDrop desktop landing page showing the weekly book recommendation service",
            },
            {
                src: "/projects/bookdrop/hero-mobile.png",
                alt: "BookDrop landing page displayed on a mobile screen",
            },            
            {
                src: "/projects/bookdrop/how-it-works.png",
                alt: "BookDrop three-step book subscription process",
            },
            {
                src: "/projects/bookdrop/genres.png",
                alt: "BookDrop genre selection interface",
            },
            {
                src: "/projects/bookdrop/pricing.png",
                alt: "BookDrop free trial and monthly subscription pricing",
            },
            {
                src: "/projects/bookdrop/testimonials.png",
                alt: "BookDrop animated reader testimonial section",
            },
        ],
    },
];