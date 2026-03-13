

export default function Navbar() {

    return (
        <>
            {/* DESKTOP / TABLET SIDEBAR */}
            <nav className="hidden md:flex fixed left-0 top-0 
                            h-screen w-64 z-50 flex-col 
                            justify-between backdrop-blur-md 
                            bg-white/5">

                {/* glow divider */}
                <div className="absolute right-0 top-0 h-full 
                                w-px bg-linear-to-b from-transparent 
                                via-white/40 to-transparent 
                                opacity-40 blur-[1px]" />

                {/* top */}
                <div className="px-10 pt-10 text-white">
                    <div className="text-xl font-semibold 
                                    tracking-tight">
                        Sobiah Selvarajah
                    </div>
                </div>

                {/* center links */}
                <div className="flex flex-col gap-14 px-10 
                                text-lg text-white/70">
                    <a className="hover:text-white transition 
                                  hover:translate-x-1">
                        About
                    </a>
                    <a className="hover:text-white transition 
                                  hover:translate-x-1">
                        Projects
                    </a>
                    <a className="hover:text-white transition 
                                  hover:translate-x-1">
                        Contact
                    </a>
                </div>

                {/* bottom socials */}
                <div className="px-10 pb-10 text-white/60">
                    {/* icons later */}
                </div>
            </nav>

            {/* MOBILE TOP NAV */}
            <nav className="flex md:hidden fixed top-0 left-0 
                            w-full flex-col px-10 py-8 
                            backdrop-blur-md bg-white/5 z-50">

                {/* name */}
                <div className="text-white font-semibold text-lg">
                    Sobiah Selvarajah
                </div>

                {/* links */}
                <div className="flex gap-6 text-white/70 
                                mt-10 text-sm">
                    <a className="hover:text-white transition">
                        About
                    </a>
                    <a className="hover:text-white transition">
                        Projects
                    </a>
                    <a className="hover:text-white transition">
                        Contact
                    </a>
                </div>

            </nav>
        </>
    )
}