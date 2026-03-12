
export default function Navbar() {

  return (
    <nav className="fixed left-0 top-0 h-screen
                    w-64 z-50 flex flex-col 
                    justify-center backdrop-blur-md 
                    bg-white/5 border-r border-white/10">
      <div className="flex flex-col gap-12 
                      px-10 text-white">
        <div className="text-xl font-semibold 
                        tracking-tight">
          Sobiah
        </div>
        <div className="flex flex-col 
                        gap-10 text-lg 
                        text-white/70">
          <a className="hover:text-white transition-colors cursor-pointer">
            Projects
          </a>
          <a className="hover:text-white transition-colors cursor-pointer">
            Resume
          </a>
          <a className="hover:text-white transition-colors cursor-pointer">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}