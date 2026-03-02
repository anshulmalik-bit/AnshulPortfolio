import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-dark text-primary pt-24 pb-12 px-6 rounded-t-[4rem] relative z-50">
            <div className="max-w-7xl mx-auto flex flex-col gap-24">

                {/* Main CTA */}
                <div className="flex flex-col md:flex-row justify-between items-end border-b border-primary/20 pb-16">
                    <div className="max-w-xl mb-12 md:mb-0">
                        <h2 className="font-sans font-bold text-5xl md:text-7xl uppercase tracking-tighter mb-4">Ready to Optimize?</h2>
                        <p className="font-serif italic text-2xl text-primary/70">Engineering a scalable, data-backed human system.</p>
                    </div>
                    <a
                        href="mailto:anshulmalik694@gmail.com"
                        className="group font-sans font-bold text-dark bg-primary px-8 py-4 rounded-full flex items-center gap-2 hover:bg-accent hover:text-primary transition-colors duration-300 ease-magnetic"
                    >
                        Contact Anshul Malik <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>

                {/* Links & Status */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm font-mono tracking-wider">
                    <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
                        <div className="font-sans font-bold text-2xl tracking-tighter mb-4">Anshul Malik</div>
                        <div className="flex items-center gap-3 bg-primary/10 w-fit px-4 py-2 rounded-full mt-auto">
                            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse"></span>
                            <span className="uppercase text-xs text-primary/70 tracking-widest">System Operational</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-primary/40 uppercase mb-2">Navigation</h4>
                        <a href="#features" className="hover:text-accent transition-colors">Features</a>
                        <a href="#protocol" className="hover:text-accent transition-colors">Protocol</a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-primary/40 uppercase mb-2">Socials</h4>
                        <a href="https://www.linkedin.com/in/anshul-malik-33584622a/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1">LinkedIn <ArrowUpRight size={14} /></a>
                        <a href="https://github.com/anshulmalik-bit" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1">GitHub <ArrowUpRight size={14} /></a>
                    </div>
                </div>

                <div className="text-center font-mono text-xs text-primary/30 pt-8 border-t border-primary/10">
                    © {new Date().getFullYear()} Anshul Malik. Built with architectural rigor.
                </div>
            </div>
        </footer>
    );
}
