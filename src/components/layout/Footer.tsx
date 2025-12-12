import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary/50 border-t border-border pt-16 pb-8">
            <div className="container px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-serif font-bold text-primary mb-6 block">
                            KRG STUDIOS
                        </Link>
                        <p className="text-muted-foreground max-w-sm mb-6">
                            The premier destination for film and television production in the Middle East.
                            Providing world-class facilities, cutting-edge technology, and unmatched support for creators.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-foreground mb-6 uppercase tracking-wider">Explore</h3>
                        <ul className="space-y-4 text-muted-foreground">
                            <li>
                                <Link href="/studios" className="hover:text-primary transition-colors">Our Studios</Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">Portfolio</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-foreground mb-6 uppercase tracking-wider">Contact</h3>
                        <ul className="space-y-4 text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-primary shrink-0" />
                                <span>Cairo, Egypt</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-primary shrink-0" />
                                <span>+20 123 456 7890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-primary shrink-0" />
                                <span>info@krgstudios.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} KRG Studios. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
