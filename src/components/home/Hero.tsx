"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Background Gradient/Image Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/30 via-background to-background" />
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 grayscale" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="container relative z-10 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary border border-border text-primary text-xs tracking-[0.2em] font-bold uppercase mb-6">
                        Premier Production Facilities
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold tracking-tighter text-foreground mb-6">
                        KRG <span className="text-primary">STUDIOS</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
                        The beating heart of Cairo's cinema industry.
                        Massive soundstages, world-class amenities, and the home of Egypt's biggest productions.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link
                            href="/studios"
                            className="group relative px-8 py-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase transition-transform hover:scale-105"
                        >
                            Explore Studios
                            <span className="absolute inset-0 border border-primary transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform -z-10" />
                        </Link>
                        <Link
                            href="/contact"
                            className="group px-8 py-4 bg-transparent border border-border text-foreground font-bold tracking-widest uppercase hover:bg-secondary transition-colors flex items-center gap-2"
                        >
                            Book a Tour
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
