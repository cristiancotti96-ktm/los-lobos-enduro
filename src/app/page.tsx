
import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center bg-stone-900 border-b border-orange-900 overflow-hidden">
                {/* Abstract Background/Image Placeholder */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-stone-950/90 pointer-events-none" />
                <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1533473359331-0135ef1bcfb0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />

                <div className="relative z-10 text-center space-y-6 max-w-4xl px-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white drop-shadow-lg uppercase italic">
                        Domina el <span className="text-orange-500">Terreno</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto drop-shadow-md font-medium">
                        La comunidad definitiva para amantes del barro, la velocidad y la adrenalina.
                        Únete a Los Lobos Enduro Team.
                    </p>
                    <div className="flex justify-center gap-4 pt-4">
                        <Link
                            href="/register"
                            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded text-lg uppercase tracking-wide transition-all transform hover:scale-105 shadow-orange-900/50 shadow-lg"
                        >
                            Únete a la Aventura
                        </Link>
                        <Link
                            href="/events"
                            className="bg-stone-800 hover:bg-stone-700 text-white font-bold py-4 px-8 rounded text-lg uppercase tracking-wide border border-stone-600 transition-all hover:border-orange-500"
                        >
                            Ver Próximos Eventos
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-stone-950 text-stone-100">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase text-orange-500 tracking-tight">
                            Más que un equipo, <br /> una hermandad.
                        </h2>
                        <p className="text-lg text-stone-400 leading-relaxed">
                            En Los Lobos Enduro Team no solo rodamos, vivimos la montaña. Desde rutas extremas de enduro hasta travesías en buggy por terrenos imposibles.
                            Somos apasionados del motor off-road y la naturaleza.
                        </p>
                        <ul className="space-y-4 text-stone-300">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-orange-500 rounded-full" /> Rutas exclusivas cada mes (GPS Tracks)
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-orange-500 rounded-full" /> Comunidad activa de pilotos expertos
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-orange-500 rounded-full" /> Eventos competitivos y recreativos
                            </li>
                        </ul>
                    </div>
                    <div className="bg-stone-800 rounded-lg aspect-square flex items-center justify-center p-8 border border-stone-700 shadow-2xl skew-y-3 transform hover:skew-y-0 transition-transform duration-500">
                        {/* Placeholder for About Image */}
                        <span className="text-stone-600 uppercase font-black text-4xl">4x4 Action Shot</span>
                    </div>
                </div>
            </section>

            {/* Social / Community Feed Placeholder */}
            <section className="py-20 bg-gradient-to-b from-stone-950 to-stone-900 border-t border-stone-800">
                <div className="container mx-auto px-4 text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
                            Síguenos en <span className="text-orange-500">Instagram</span>
                        </h2>
                        <p className="text-stone-400">Las mejores tomas de nuestras últimas salidas.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-square bg-stone-800 flex items-center justify-center rounded-lg overflow-hidden border border-stone-700 hover:border-orange-500 transition-colors cursor-pointer group">
                                <span className="text-stone-600 font-bold group-hover:text-orange-500 transition-colors">Post {i}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats/Features Section */}
            <section className="py-20 bg-orange-600">
                <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                    <div className="space-y-2">
                        <h3 className="text-4xl md:text-6xl font-black">500+</h3>
                        <p className="uppercase text-sm font-bold tracking-widest opacity-80">Riders Activos</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-4xl md:text-6xl font-black">50</h3>
                        <p className="uppercase text-sm font-bold tracking-widest opacity-80">Rutas GPX</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-4xl md:text-6xl font-black">12</h3>
                        <p className="uppercase text-sm font-bold tracking-widest opacity-80">Eventos Anuales</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-4xl md:text-6xl font-black">100%</h3>
                        <p className="uppercase text-sm font-bold tracking-widest opacity-80">Adrenalina</p>
                    </div>
                </div>
            </section>

        </div>
    );
}
