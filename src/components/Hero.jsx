import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
    const container = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Intro animation for text elements
            gsap.from('.hero-reveal', {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.08,
                ease: 'power3.out',
                delay: 0.2
            });

            // Subtle float animation for the prism image
            gsap.to('.hero-prism', {
                y: -15,
                rotation: 2,
                duration: 4,
                yoyo: true,
                repeat: -1,
                ease: 'sine.inOut'
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={container}
            className="relative w-full h-[100dvh] bg-dark flex items-end overflow-hidden"
        >
            {/* Background brutalist image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-60 mix-blend-luminosity"
                style={{ backgroundImage: 'url(/brutalist_data_bg.png)' }}
            ></div>

            {/* Gradient Overlay for high-contrast */}
            <div className="absolute inset-0 z-1 bg-gradient-to-t from-dark/95 via-dark/50 to-transparent"></div>

            <div className="hero-prism absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-64 h-64 md:w-96 md:h-96 mix-blend-screen opacity-80 pointer-events-none">
                <img
                    src="/hr_eng_data_core.png"
                    alt="Engineering, Data & HR Systems Core"
                    className="w-full h-full object-cover grayscale"
                    style={{ WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)', maskImage: 'radial-gradient(circle, black 30%, transparent 70%)' }}
                />
            </div>

            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pb-20 md:pb-32 flex flex-col justify-end">
                <h1 className="flex flex-col text-primary leading-[0.9] tracking-tighter mb-8">
                    <span className="hero-reveal font-sans font-bold text-[clamp(4rem,12vw,8rem)] uppercase">
                        OPTIMIZE
                    </span>
                    <span className="hero-reveal font-serif italic text-[clamp(4.5rem,14vw,11rem)] -mt-2 md:-mt-8 text-primary shadow-dark/50 drop-shadow-xl">
                        The Human System.
                    </span>
                </h1>

                <div className="hero-reveal">
                    <div className="hero-reveal flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
                        <a
                            href="/anshul-resume.pdf"
                            download="Anshul_Malik_Resume.pdf"
                            className="group relative inline-flex items-center justify-center font-sans font-bold text-primary bg-accent px-10 py-5 rounded-full overflow-hidden transition-transform duration-300 ease-magnetic hover:-translate-y-1 hover:scale-105 w-full sm:w-auto"
                            aria-label="Download Anshul Malik's Resume"
                        >
                            <span className="relative z-10 flex items-center gap-3 text-lg">
                                Download Resume <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-dark transform scale-x-0 origin-left transition-transform duration-500 ease-magnetic group-hover:scale-x-100 z-0"></div>
                        </a>
                        <a
                            href="#protocol"
                            className="group relative inline-flex items-center justify-center font-sans font-bold text-primary bg-dark/40 backdrop-blur-md px-10 py-5 rounded-full border border-primary/20 transition-all duration-300 hover:bg-primary/10 hover:-translate-y-1 hover:border-primary/40 w-full sm:w-auto"
                            aria-label="Explore Projects"
                        >
                            <span className="relative z-10 flex items-center gap-3 text-lg">
                                Explore Projects
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
