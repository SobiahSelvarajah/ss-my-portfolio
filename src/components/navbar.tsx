import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <div>
                <Link href="/">Sobiah Selvarajah</Link>
                <div>
                    <Link href="#projects">Projects</Link>
                    <Link href="#skills">Skills</Link>
                    <Link href="#contact">Contact</Link>
                </div>
                <div>
                    <Link href="#resume">Resume</Link>
                </div>
            </div>
        </nav>
    )
}