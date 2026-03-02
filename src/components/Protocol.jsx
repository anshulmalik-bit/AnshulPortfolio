import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const protocols = [
    {
        phase: "01",
        title: "Legacy Deconstruction",
        desc: "Databricks-to-GCP migration. 1,200+ scripts systematically analyzed and optimized.",
        Anim: () => (
            <svg className="w-48 h-48 animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
                <circle cx="50" cy="50" r="10" fill="currentColor" />
            </svg>
        )
    },
    {
        phase: "02",
        title: "Intelligent Simulation",
        desc: "The HRprep build. Antigravity & GenAI architecture predicting human system outcomes.",
        Anim: () => (
            <div className="w-48 h-48 relative border border-current rounded-lg overflow-hidden flex items-center justify-center">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-red-500 blur-[1px] shadow-[0_0_10px_red] animate-[scan_2s_linear_infinite]"></div>
                <div className="grid grid-cols-5 gap-2 opacity-50">
                    {[...Array(25)].map((_, i) => <div key={i} className="w-2 h-2 bg-current rounded-full"></div>)}
                </div>
            </div>
        )
    },
    {
        phase: "03",
        title: "Performance Scaling",
        desc: "MBA Decision Modeling translating workforce attrition vectors into hard business strategy.",
        Anim: () => (
            <svg className="w-48 h-48 pulse-wave" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 0 50 L 20 50 L 30 20 L 50 80 L 60 50 L 100 50" strokeDasharray="200" strokeDashoffset="200" className="animate-[dash_3s_ease-in-out_infinite]" />
            </svg>
        )
    }
];

export default function Protocol() {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Add custom keyframes for embedded animations
            const style = document.createElement('style');
            style.innerHTML = `
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes dash {
          0% { stroke-dashoffset: 200; }
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -200; }
        }
      `;
            document.head.appendChild(style);

            // Stacking Archive Animation
            cardsRef.current.forEach((card, i) => {
                if (i === 0) return; // Skip first card

                ScrollTrigger.create({
                    trigger: card,
                    start: 'top top',
                    endTrigger: containerRef.current,
                    end: 'bottom bottom',
                    pin: true,
                    pinSpacing: false,
                });

                if (i > 0) {
                    gsap.to(cardsRef.current[i - 1], {
                        scale: 0.9,
                        opacity: 0.5,
                        filter: 'blur(20px)',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top bottom',
                            end: 'top top',
                            scrub: true,
                        }
                    });
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="protocol" ref={containerRef} className="relative w-full bg-background pb-32 scroll-mt-0">
            {protocols.map((p, i) => (
                <div
                    key={i}
                    ref={el => cardsRef.current[i] = el}
                    className="h-screen w-full flex items-center justify-center sticky top-0"
                >
                    <div className="w-[90%] max-w-5xl h-[80vh] bg-primary rounded-[2rem] md:rounded-[3rem] border border-dark/10 shadow-2xl flex flex-col md:flex-row items-center p-8 md:p-24 overflow-hidden relative">
                        <div className="absolute top-10 right-10 font-mono text-xl tracking-tighter text-dark/20 hidden md:block">
                            PHASE // {p.phase}
                        </div>

                        <div className="flex-1 flex justify-center text-accent mb-12 md:mb-0">
                            <p.Anim />
                        </div>

                        <div className="flex-1 flex flex-col gap-6">
                            <span className="font-mono text-sm uppercase tracking-widest text-dark/50 bg-dark/5 w-fit px-3 py-1 rounded">
                                Phase {p.phase}
                            </span>
                            <h2 className="font-sans font-bold text-[clamp(2rem,6vw,4rem)] md:text-5xl text-dark leading-tight">{p.title}</h2>
                            <p className="font-serif italic text-dark/70 text-lg md:text-2xl leading-relaxed">
                                {p.desc}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
