
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
    // bookdrop app
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
            "Accessible form feedback and dialog interactions",
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
                category: "Forms and validation",
                items: [
                    "React Hook Form",
                    "Zod",
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

    // weather forecast app
    {
        id: "weather-forecast",
        name: "Weather Forecast",
        icon: "/projects/weather/icon.png",

        shortSummary:
            "A responsive weather app with five-day forecasts, weather-based activities and Spotify music recommendations.",
        
        description: [
            "Weather Forecast is a responsive application that combines real-time weather data with personalised activity and music recommendations.",
            "Users can search for a location to view current conditions and a five-day forecast, alongside activity suggestions and Spotify tracks tailored to the current weather.",
            "The project focuses on transforming external API data, creating contextual recommendations and adapting both the interface and its visual theme to changing weather conditions.",
        ],

        features: [
            "Location-based current weather data",
            "Five-day weather forecast",
            "Daily minimum and maximum temperatures",
            "Current temperature, condition and feels-like temperature",
            "Humidity and wind speed information",
            "Weather-based activity suggestions",
            "Weather-based music recommendations",
            "Embedded Spotify track previews",
            "Dynamic background themes based on weather conditions",
            "Rotating recommendations across repeated searches",
            "Parallel weather and forecast requests",
            "Responsive mobile forecast carousel",
            "Loading and search states",
            "Empty-search validation",
            "Clear invalid-location feedback",
            "Responsive layouts across mobile, tablet and desktop",
            "Accessible labels and feedback",
        ],

        technologies: [
            {
                category: "Frontend",
                items: [
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Lucide React",
                ],
            },
            {
                category: "APIs and integrations",
                items: [
                    "OpenWeather API",
                    "Spotify Embeds",
                ],
            },
        ],

        challenge: {
            title:
                "Transforming three-hour readings into useful daily forecasts",

            description:
                "The main technical challenge was transforming OpenWeather's three-hour forecast readings into a clear five-day forecast. The readings needed to be grouped by local calendar day, used to calculate minimum and maximum temperatures and reduced to one representative weather condition without allowing an overnight reading to misrepresent the entire day.",

            takeaway:
                "This taught me to treat third-party API responses as raw data rather than interface-ready content, create a dedicated transformation layer and provide components with a predictable data structure. Selecting the reading closest to midday also produced a more useful representation of each day's expected weather.",
        },

        liveUrl: "https://ss-weather-app.vercel.app/",
        githubUrl: "https://github.com/SobiahSelvarajah/ss-weather-app",

        screenshots: [
            {
                src: "/projects/weather/search-desktop.png",
                alt: "Weather Forecast desktop search page before a location is selected",
            },
            {
                src: "/projects/weather/forecast-desktop.png",
                alt: "Weather Forecast desktop results showing the five-day forecast, current conditions, activities and music recommendations",
            },
            {
                src: "/projects/weather/dynamic-tablet.png",
                alt: "Weather Forecast tablet layout with a dynamic theme based on clear weather",
            },
            {
                src: "/projects/weather/forecast-mobile.png",
                alt: "Weather Forecast mobile layout with horizontally navigable daily forecasts",
            },
        ],
    },

    // kiln and clay app
    {
        id: "kiln-and-clay",
        name: "Kiln & Clay",
        icon: "/projects/kiln-and-clay/icon.png",

        shortSummary:
            "A full-stack pottery studio discovery and booking app with live availability, capacity-aware reservations and automated confirmation emails.",
        
        description: [
            "Kiln & Clay is a full-stack discovery and booking platform that allows users to explore independent pottery studios across London and reserve available studio sessions.",
            "Users can browse studio locations, explore featured pottery classes, view upcoming availability through an interactive calendar and book sessions based on the remaining capacity.",
            "The project focuses on delivering a complete booking experience with persistent data, server-side validation, automated availability management, transactional emails and responsive interfaces.",
        ],

        features: [
            "Browse independent pottery studios across London",
            "Filter studios by location",
            "Image carousels for individual studios",
            "Dedicated studio pages with information and booking availability",
            "Interactive booking calendar",
            "Morning, afternoon and evening session selection",
            "Remaining-space calculations based on existing bookings",
            "Automatic disabling of fully booked sessions",
            "Automatic disabling of dates with no remaining availability",
            "Rolling 60-day booking window",
            "Multi-guest bookings",
            "Server-side booking validation",
            "Booking confirmation emails",
            "Automatic availability refresh after successful bookings",
            "Reusable featured pottery class cards",
            "Detailed featured class dialogs",
            "Contact form with database persistence",
            "Contact confirmation emails",
            "Loading, success and error states",
            "Responsive layouts across mobile, tablet and desktop",
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
                    "Base UI",
                    "Lucide React",
                ],
            },
            {
                category: "Backend and database",
                items: [
                    "Next.js Route Handlers",
                    "Prisma ORM",
                    "PostgreSQL",
                ],
            },
            {
                category: "Services and integrations",
                items: [
                    "Resend",
                    "React Email",
                ],
            },
        ],

        challenge: {
            title:
                "Keeping session availability accurate throughout the booking flow",
            
            description:
                "The main technical challenge was coordinating generated future sessions, existing reservations and per-session capacity without allowing users to book more places than were available. Availability needed to remain accurate on both the interface and the server, including after a successful booking changed the remaining capacity.",

            takeaway:
                "This taught me to treat server-side capacity checks as the source of truth, derive availability from persisted booking data and refresh client-facing information after mutations so that the interface continues to reflect the database accurately.",
        },

        liveUrl: "https://ss-pottery-class-booking.vercel.app/",
        githubUrl: "https://github.com/SobiahSelvarajah/ss-pottery-class-booking",

        screenshots: [
            {
                src: "/projects/kiln-and-clay/home-desktop.png",
                alt: "Kiln and Clay desktop landing page introducing pottery classes",
            },
            {
                src: "/projects/kiln-and-clay/studios.png",
                alt: "Kiln and Clay pottery studio directory",
            },
            {
                src: "/projects/kiln-and-clay/class-details.png",
                alt: "Kiln and Clay featured pottery class details dialog",
            },
            {
                src: "/projects/kiln-and-clay/booking-calendar.png",
                alt: "Kiln and Clay booking calendar and session selection",
            },
            {
                src: "/projects/kiln-and-clay/booking-success-mobile.png",
                alt: "Successful Kiln and Clay booking confirmation on mobile",
            },
            {
                src: "/projects/kiln-and-clay/contact-tablet.png",
                alt: "Kiln and Clay contact page displayed at tablet size",
            },
        ],
    },
];