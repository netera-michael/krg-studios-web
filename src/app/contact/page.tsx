export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-center mb-16">
                    Get in <span className="text-primary">Touch</span>
                </h1>

                <div className="bg-card border border-border p-8 md:p-12 rounded-lg shadow-2xl">
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                                <input type="text" className="w-full bg-secondary border border-border p-4 rounded text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                                <input type="email" className="w-full bg-secondary border border-border p-4 rounded text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                            <select className="w-full bg-secondary border border-border p-4 rounded text-foreground focus:border-primary focus:outline-none transition-colors">
                                <option>Studio Rental Inquiry</option>
                                <option>Production Services</option>
                                <option>Tour Request</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                            <textarea className="w-full bg-secondary border border-border p-4 rounded text-foreground focus:border-primary focus:outline-none transition-colors min-h-[150px]" placeholder="Tell us about your production..."></textarea>
                        </div>

                        <button type="button" className="w-full py-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors rounded">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
