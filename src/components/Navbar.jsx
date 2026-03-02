import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export default function Navbar() {
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                gsap.to(navRef.current, {
                    backgroundColor: 'rgba(245, 243, 238, 0.6)',
                    backdropFilter: 'blur(16px)',
                    borderColor: 'rgba(17, 17, 17, 0.1)',
                    color: '#111111',
                    duration: 0.4,
                    ease: 'power2.inOut'
                });
            } else {
                gsap.to(navRef.current, {
                    backgroundColor: 'transparent',
                    backdropFilter: 'blur(0px)',
                    borderColor: 'transparent',
                    color: '#E8E4DD',
                    duration: 0.4,
                    ease: 'power2.inOut'
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4">
            <nav
                ref={navRef}
                className="flex items-center justify-between w-full max-w-5xl px-6 py-4 rounded-full border border-transparent transition-colors text-primary"
                aria-label="Main Navigation"
            >
                <div className="font-sans font-bold text-lg sm:text-xl tracking-tight shrink-0 mr-4">Anshul Malik</div>
                <div className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-widest">
                    <a href="#features" className="hover:-translate-y-[1px] transition-transform">Features</a>
                    <a href="#protocol" className="hover:-translate-y-[1px] transition-transform">Protocol</a>
                </div>
                <a
                    href="/anshul-resume.pdf"
                    download="Anshul_Malik_Resume.pdf"
                    className="btn-magnetic bg-accent text-primary px-4 sm:px-6 py-2 rounded-full font-sans font-bold flex items-center gap-2 group overflow-hidden text-sm sm:text-base ml-auto"
                >
                    <span className="relative z-10 flex items-center gap-2">Download Resume <ArrowRight size={16} /></span>
                    <div className="absolute inset-0 bg-dark transform scale-x-0 origin-left transition-transform duration-500 ease-magnetic group-hover:scale-x-100 z-0"></div>
                </a>
            </nav>
        </div>
    );
}
