"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const productions = [
    { title: "El Beit Beity", image: "/images/productions/el-beit-beity.avif" },
    { title: "Al Harsha", image: "/images/productions/al-harsha.avif" },
    { title: "Ashghal Shaka", image: "/images/productions/ashghal-shaka.avif" },
    { title: "Newton's Game", image: "/images/productions/newtons-game.webp" },
    { title: "Akhwaty", image: "/images/productions/akhwaty.jpg" },
    { title: "Aho Da Elly Sar", image: "/images/productions/aho-da-elly-sar.jpg" },
    { title: "1000 Hamdela", image: "/images/productions/1000-hamdela.jpg" },
    { title: "Gamila", image: "/images/productions/gamila.jpg" },
    { title: "Sodfa", image: "/images/productions/sodfa.jpg" },
    { title: "Lam Shamsia", image: "/images/productions/lam-shamsia.avif" },
];

export default function Showcase() {
    return (
        <section className="py-24 bg-secondary/30 border-y border-border overflow-hidden">
            <div className="container px-6 mb-12">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-center">
                    Filmed at <span className="text-primary">KRG</span>
                </h2>
                <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
                    From blockbuster hits to critically acclaimed series, our studios have been the home for Egypt's most iconic productions.
                </p>
            </div>

            <div className="relative w-full">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div className="flex gap-8 animate-scroll whitespace-nowrap px-6 overflow-x-auto scrollbar-hide">
                    {productions.map((show, index) => (
                        <motion.div
                            key={index}
                            className="relative shrink-0 w-[200px] md:w-[280px] aspect-[2/3] rounded-lg overflow-hidden group cursor-pointer bg-neutral-900"
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={show.image}
                                alt={show.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 200px, 280px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-bold tracking-wider text-sm md:text-base whitespace-normal line-clamp-2">
                                    {show.title}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
