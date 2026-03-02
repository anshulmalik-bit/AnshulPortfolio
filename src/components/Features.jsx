import React, { useState, useEffect, useRef } from 'react';
import { Activity, Database, GitBranch, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

// --- Card 1: Diagnostic Shuffler --- //
const shufflerData = [
    { id: 1, label: "Legacy Deconstruction", metric: "BluePi Engagements" },
    { id: 2, label: "Script Optimization", metric: "1,200+ Optimized" },
    { id: 3, label: "Performance Audit", metric: "Execution Time -40%" }
];

function DiagnosticShuffler() {
    const [cards, setCards] = useState(shufflerData);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newArr = [...prev];
                const last = newArr.pop();
                newArr.unshift(last);
                return newArr;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-48 w-full flex flex-col items-center justify-center">
            {cards.map((card, i) => {
                const isFront = i === 0;
                return (
                    <div
                        key={card.id}
                        className="absolute w-full px-6 py-4 bg-background border border-dark/10 shadow-lg rounded-2xl transition-all duration-[800ms] flex justify-between items-center"
                        style={{
                            transform: `translateY(${i * 12}px) scale(${1 - i * 0.05})`,
                            zIndex: 10 - i,
                            opacity: 1 - i * 0.3,
                            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <Database className="text-accent" size={20} />
                            <span className="font-sans font-bold text-dark">{card.label}</span>
                        </div>
                        <span className="font-mono text-sm tracking-tighter text-dark/70 bg-primary px-2 py-1 rounded">
                            {card.metric}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

// --- Card 2: Telemetry Typewriter --- //
const typeFeed = [
    "Initialize Predictive Module...",
    "Loading syntax: Python & GenAI.",
    "Compiling HRprep engine.",
    "Simulating outcomes... [SUCCESS]",
    "Probability curve optimized."
];

function TelemetryTypewriter() {
    const [lines, setLines] = useState([]);
    const [currentLine, setCurrentLine] = useState("");
    const [feedIndex, setFeedIndex] = useState(0);

    useEffect(() => {
        if (feedIndex >= typeFeed.length) {
            setTimeout(() => {
                setLines([]);
                setFeedIndex(0);
            }, 4000);
            return;
        }

        const goalWord = typeFeed[feedIndex];
        let charIndex = 0;

        const interval = setInterval(() => {
            setCurrentLine(goalWord.slice(0, charIndex + 1));
            charIndex++;
            if (charIndex === goalWord.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setLines(p => [...p, goalWord]);
                    setCurrentLine("");
                    setFeedIndex(i => i + 1);
                }, 800);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [feedIndex]);

    return (
        <div className="h-48 w-full bg-dark text-primary font-mono text-xs p-5 rounded-2xl border border-dark/20 flex flex-col justify-end overflow-hidden relative shadow-inner">
            <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="animate-pulse w-2 h-2 rounded-full bg-accent"></span>
                <span className="text-primary/50 uppercase tracking-widest text-[10px]">Live Feed</span>
            </div>
            <div className="flex flex-col gap-1">
                {lines.map((l, i) => <div key={i} className="opacity-70">&gt; {l}</div>)}
                <div className="flex items-center">
                    &gt; {currentLine}<span className="inline-block w-2 h-3 bg-accent ml-1 animate-pulse"></span>
                </div>
            </div>
        </div>
    );
}

// --- Card 3: Cursor Protocol Scheduler --- //
function CursorProtocolScheduler() {
    const containerRef = useRef(null);
    const [activeDay, setActiveDay] = useState(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            tl.set('.cursor', { x: 0, y: 0, opacity: 0 })
                .to('.cursor', { opacity: 1, duration: 0.3 })
                .to('.cursor', { x: 120, y: 30, duration: 1, ease: 'power2.inOut' })
                .to('.cursor', { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1, onStart: () => setActiveDay(3) })
                .to('.cursor', { x: 220, y: 80, duration: 1, ease: 'power2.inOut', delay: 0.5 })
                .to('.cursor', { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
                .to('.cursor', { opacity: 0, duration: 0.3, delay: 0.5 });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
        <div ref={containerRef} className="h-48 w-full bg-primary rounded-2xl border border-dark/10 p-5 relative overflow-hidden flex flex-col justify-between">
            <div className="grid grid-cols-7 gap-1">
                {days.map((d, i) => (
                    <div
                        key={i}
                        className={`h-12 flex items-center justify-center rounded-lg border border-dark/5 font-mono text-sm transition-colors duration-300 ${activeDay === i ? 'bg-accent text-primary' : 'bg-background text-dark'}`}
                    >
                        {d}
                    </div>
                ))}
            </div>
            <div className="flex justify-end mt-4">
                <div className="px-4 py-2 bg-dark text-primary rounded-full font-sans text-xs uppercase tracking-widest">
                    Save Timeline
                </div>
            </div>

            <svg className="cursor absolute top-0 left-0 w-6 h-6 z-10 filter drop-shadow-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 3.21V20.8C5.5 21.46 6.27 21.82 6.78 21.4L11.43 17.38C11.66 17.18 11.96 17.07 12.27 17.07H18.99C19.64 17.07 20.02 16.32 19.61 15.82L5.5 3.21Z" fill="#E63B2E" stroke="white" strokeWidth="2" strokeLinejoin="round" />
            </svg>
        </div>
    );
}

// --- Main Features Component --- //
export default function Features() {
    return (
        <section id="features" className="w-full py-32 bg-background relative z-10 px-6 scroll-mt-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-sans font-bold text-4xl mb-16 text-dark tracking-tighter">FUNCTIONAL ARTIFACTS</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="flex flex-col gap-6 bg-primary p-8 rounded-[2rem] border border-dark/10 hover-lift">
                        <DiagnosticShuffler />
                        <div className="flex flex-col h-full justify-between gap-4">
                            <div>
                                <h3 className="font-sans font-bold text-xl mb-2 text-dark">Systematic Optimization</h3>
                                <p className="font-serif italic text-dark/70 leading-relaxed">
                                    Legacy refactored. 1,200+ BluePi scripts logically dismantled and structurally perfected for maximum execution velocity.
                                </p>
                            </div>
                            <a href="https://github.com/anshulmalik-bit" target="_blank" rel="noopener noreferrer" className="font-mono text-sm uppercase tracking-widest text-accent font-bold mt-auto flex items-center gap-2 group hover:translate-x-1 transition-transform cursor-pointer">
                                View Engineering Case <ArrowRight className="w-4 h-4 translate-y-[1px]" />
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col gap-6 bg-primary p-8 rounded-[2rem] border border-dark/10 hover-lift">
                        <TelemetryTypewriter />
                        <div className="flex flex-col h-full justify-between gap-4">
                            <div>
                                <h3 className="font-sans font-bold text-xl mb-2 text-dark">Predictive Modeling</h3>
                                <p className="font-serif italic text-dark/70 leading-relaxed">
                                    The HRprep engine. Deploying Python + GenAI to simulate, predict, and ultimately engineer interview outcomes probabilistically.
                                </p>
                            </div>
                            <a href="https://github.com/anshulmalik-bit" target="_blank" rel="noopener noreferrer" className="font-mono text-sm uppercase tracking-widest text-accent font-bold mt-auto flex items-center gap-2 group hover:translate-x-1 transition-transform cursor-pointer">
                                Review HRprep Build <ArrowRight className="w-4 h-4 translate-y-[1px]" />
                            </a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col gap-6 bg-primary p-8 rounded-[2rem] border border-dark/10 hover-lift">
                        <CursorProtocolScheduler />
                        <div className="flex flex-col h-full justify-between gap-4">
                            <div>
                                <h3 className="font-sans font-bold text-xl mb-2 text-dark">Strategic Alignment</h3>
                                <p className="font-serif italic text-dark/70 leading-relaxed">
                                    Dual MBA specialization converting abstracted HR operations into hard, calculable Business Analytics models.
                                </p>
                            </div>
                            <a href="https://github.com/anshulmalik-bit" target="_blank" rel="noopener noreferrer" className="font-mono text-sm uppercase tracking-widest text-accent font-bold mt-auto flex items-center gap-2 group hover:translate-x-1 transition-transform cursor-pointer">
                                View MBA Portfolio <ArrowRight className="w-4 h-4 translate-y-[1px]" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
