"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Soundstages", value: "12" },
    { label: "Square Meters", value: "50,000+" },
    { label: "Years of Experience", value: "25" },
];

export default function About() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                            Where Masterpieces <br />
                            <span className="text-primary">Come to Life</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Located in the heart of Cairo, KRG Studios offers the most expansive and technically advanced production facilities in the region.
                            Our massive soundstages have hosted the biggest blockbusters, TV series, and commercials in the Middle East.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            From pre-production suites to state-of-the-art post-production labs, we provide an end-to-end ecosystem for creators who demand excellence.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <div className="space-y-4 pt-12">
                            <div className="bg-card border border-border p-8 rounded-lg">
                                <h3 className="text-4xl font-bold text-primary mb-2">{stats[0].value}</h3>
                                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{stats[0].label}</p>
                            </div>
                            <div className="bg-card border border-border p-8 rounded-lg">
                                <h3 className="text-4xl font-bold text-primary mb-2">{stats[2].value}</h3>
                                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{stats[2].label}</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-secondary border border-border p-8 rounded-lg">
                                <h3 className="text-4xl font-bold text-primary mb-2">{stats[1].value}</h3>
                                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{stats[1].label}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
