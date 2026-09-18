
const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];


export default function Navbar() {
    return (
        <>
            {/* DESKTOP / TABLET SIDEBAR */}
            <nav 
                aria-label="Desktop navigation"
                className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col justify-between bg-white/5 backdrop-blur-md md:flex"
            >

                {/* glow divider */}
                <div className="absolute right-0 top-0 h-full w-px bg-linear-to-b from-transparent via-white/40 to-transparent opacity-40 blur-[1px]" />
                
                {/* top */}
                <a 
                    href="#home"
                    className="px-10 pt-10 text-xl font-semibold tracking-tight text-white"
                >
                    Sobiah Selvarajah
                </a>

                {/* center links */}
                <div className="flex flex-col gap-14 px-10 text-lg text-white/70">
                    {navLinks.map((link) => (
                        <a 
                            key={link.href}
                            href={link.href}
                            className="transition hover:translate-x-1 hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* social links */}
                <div className="px-10 pb-10 text-white/60"></div>
            </nav>

            <nav
                aria-label="Mobile navigation"
                className="fixed inset-x-0 top-0 z-50 flex flex-col bg-white/5 px-6 py-6 backdrop-blur-md md:hidden"
            >
                <a 
                    href="#home"
                    className="text-lg font-semibold text-white"
                >
                    Sobiah Selvarajah
                </a>
                <div className="mt-6 flex gap-6 text-sm text-white/70">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="transition-colors hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </nav>
        </>
    );
}