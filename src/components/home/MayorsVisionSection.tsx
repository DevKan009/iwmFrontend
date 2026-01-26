
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function MayorsVisionSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-emerald-400 text-sm font-semibold tracking-wide uppercase">
                            Leadership Vision
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Empowering Youth for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Brighter Indore</span>
                        </h2>

                        <div className="relative">
                            <span className="absolute -top-6 -left-4 text-7xl text-primary/20 font-serif leading-none">"</span>
                            <blockquote className="relative z-10 text-lg md:text-xl text-slate-200 leading-relaxed pl-6 border-l-4 border-emerald-500/50 italic">
                                The youth of Indore are the architects of its future. Internship with Mayor is not just a program; it's a platform for young minds to engage with governance, understand civic challenges, and contribute to the development of our beloved city. Together, let's build an Indore that is not only clean but also smart, sustainable, and inclusive.
                            </blockquote>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <div className="h-12 w-1 bg-gradient-to-b from-emerald-500 to-transparent rounded-full" />
                            <div>
                                <h3 className="text-2xl font-bold text-white">Shri Pushyamitra Bhargav</h3>
                                <p className="text-emerald-400 font-medium tracking-wide">Mayor, Indore Municipal Corporation</p>

                                {/* Social Media Links */}
                                <div className="flex items-center gap-4 mt-3">
                                    <a
                                        href="https://www.instagram.com/advpushyamitra/?hl=en"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/60 hover:text-[#E1306C] transition-colors duration-300"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/advpushyamitra/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/60 hover:text-[#1877F2] transition-colors duration-300"
                                        aria-label="Facebook"
                                    >
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="https://twitter.com/advpushyamitra"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/60 hover:text-white transition-colors duration-300"
                                        aria-label="X (Twitter)"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/pushyamitra-bhargav-1987331b2/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/60 hover:text-[#0077B5] transition-colors duration-300"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative group">
                        <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] max-w-sm mx-auto lg:mr-auto lg:ml-0 xl:mx-auto">
                            {/* Frame/Backdrop */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent rounded-2xl transform rotate-6 transition-transform group-hover:rotate-3 duration-500" />
                            <div className="absolute inset-0 bg-slate-800 rounded-2xl transform -rotate-3 border border-white/5 transition-transform group-hover:-rotate-1 duration-500" />

                            {/* Actual Image */}
                            <img
                                src="https://res.cloudinary.com/dvneefjpi/image/upload/v1768365089/572388928_18346669150203742_1134080856149661706_n_x8m0il_m9urns.png"
                                alt="Mayor Pushyamitra Bhargav"
                                className="relative z-10 w-full h-full object-cover rounded-xl shadow-2xl border border-white/10"
                            />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 z-20 bg-white text-slate-900 p-4 rounded-xl shadow-xl border border-slate-100 hidden sm:block">
                                <p className="text-sm font-bold flex items-center gap-1">
                                    <span className="text-emerald-600">#</span>IndoreNumber1
                                </p>
                                <p className="text-xs text-slate-500 font-medium">Cleanest City in India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
