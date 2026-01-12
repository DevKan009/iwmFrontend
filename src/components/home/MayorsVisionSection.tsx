import mayorImg from "@/assets/mayor Sir.webp";

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
                                <h3 className="text-2xl font-bold text-white">Pushyamitra Bhargav</h3>
                                <p className="text-emerald-400 font-medium tracking-wide">Mayor, Indore Municipal Corporation</p>
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
                                src={mayorImg}
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
        </section>
    );
}
