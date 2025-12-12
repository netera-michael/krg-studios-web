export default function StudiosPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-center mb-16">
                    Our <span className="text-primary">Facilities</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="group relative aspect-video bg-secondary overflow-hidden rounded-lg hover:shadow-2xl transition-all hover:scale-[1.02]">
                            <div className="absolute inset-0 bg-neutral-900/50 group-hover:bg-neutral-900/30 transition-colors" />
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-2xl font-bold text-foreground mb-1">Studio {i}</h3>
                                <p className="text-sm text-muted-foreground uppercase tracking-widest">1200 Sqm • Soundproof</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
