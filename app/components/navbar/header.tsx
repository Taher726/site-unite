"use client";

import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import {
    Home,
    Info,
    Star,
    BookOpen,
    Briefcase,
    Mail
} from "lucide-react";
import { usePathname } from "next/navigation";
import { link } from "fs";


const navItems = [
    { label: "Home", icon: <Home size={18} className="mr-1" />, link: "/" },
    { label: "About", icon: <Info size={18} className="mr-1" />, link: "/about" },
    { label: "Features", icon: <Star size={18} className="mr-1" />, link: "/features" },
    { label: "Resources", icon: <BookOpen size={18} className="mr-1" />, link: "/resources" },
    { label: "Case Study", icon: <Briefcase size={18} className="mr-1" />, link: "/case-study" },
    { label: "Contact", icon: <Mail size={18} className="mr-1" />, link: "/contact" },
];


export function Header() {
    const pathName = usePathname();
    const isHomePage = pathName === "/";
    const isNotHomePage = pathName !== "/";
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 ", isScrolled ? "bg-white shadow-md py-2 opacity-90" : "bg-transparent py-4")}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <img
                        src={isNotHomePage && isScrolled ? "/logo_dc-origine.svg" : isHomePage && isScrolled ? "/logo_dc-origine.svg" : isHomePage && !isScrolled ? "/logo_dc-origine.svg": "/logo_dc-white.svg"}
                        alt="logo hpc"
                        className="h-13 w-auto mr-3 cursor-pointer px-6"
                    />
                </Link>

                {/* Desktop Navbar */}
                <nav className="hidden md:flex items-center space-x-7 px-5">
                    {navItems.map((item, index) => (
                        <Link key={index} href={item.link}>
                            <button
                                className={cn(
                                    `flex items-center cursor-pointer px-2 font-bold transition-colors duration-200 ease-in-out ${isNotHomePage && isScrolled ? "text-gray-800" : isHomePage ? "text-gray-800" : "text-white"}`,
                                )}
                            >
                                {item.icon}
                                {item.label}
                            </button>
                        </Link>
                    ))}

                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen
                        ? <X className={isScrolled ? "text-gray-800" : "text-blue-500"} />
                        : <Menu className={isScrolled ? "text-gray-800" : "text-white"} />
                    }
                </button>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4">
                    <nav className="flex flex-col space-y-4">
                        {navItems.map((item, index) => (
                            <Link key={index} href={item.link} onClick={() => setIsMenuOpen(false)}>
                                <button
                                    className={cn(
                                        "hover:bg-transparent flex items-center font-bold text-gray-800",
                                    )}
                                >
                                    {item.icon}
                                    {item.label}
                                </button>
                            </Link>
                        ))}

                    </nav>
                </div>
            )}

        </header>
    );
}