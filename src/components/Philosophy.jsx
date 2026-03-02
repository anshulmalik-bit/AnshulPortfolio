import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const container = useRef(null);
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Fade up staggered words
            gsap.to('.reveal-word-1', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.05,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 60%',
                }
            });
            gsap.to('.reveal-word-2', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.05,
                delay: 0.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 60%',
                }
            });

            // Parallax bg
            gsap.to('.parallax-bg', {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={container}
            className="relative w-full py-40 bg-dark overflow-hidden flex items-center justify-center min-h-[80vh]"
        >
            {/* Parallax Background using unified Data/HR/Engineering structural asset */}
            <div
                className="parallax-bg absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-screen"
                style={{ backgroundImage: 'url(/brutalist_data_bg.png)' }}
            ></div>

            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col gap-12">
                <p className="font-sans text-xl md:text-2xl text-primary/70 max-w-2xl tracking-tight leading-relaxed">
                    {"Most HR focuses on: Subjective intuition and standard checklists.".split(" ").map((w, i) => (
                        <span key={i} className="inline-block mr-[0.3em] opacity-0 translate-y-[20px] reveal-word-1">{w}</span>
                    ))}
                </p>

                <h2 className="font-serif italic text-4xl md:text-[5rem] text-primary leading-[1.1] pb-4">
                    {"We focus on: Architectural integrity and".split(" ").map((w, i) => (
                        <span key={`a-${i}`} className="inline-block mr-[0.25em] opacity-0 translate-y-[20px] reveal-word-2">{w}</span>
                    ))}
                    <span className="inline-block mr-[0.25em] opacity-0 translate-y-[20px] reveal-word-2 text-accent not-italic font-sans font-bold pt-2 md:pt-0">data-backed</span>
                    {"execution.".split(" ").map((w, i) => (
                        <span key={`b-${i}`} className="inline-block opacity-0 translate-y-[20px] reveal-word-2">{w}</span>
                    ))}
                </h2>
            </div>
        </section>
    );
}
