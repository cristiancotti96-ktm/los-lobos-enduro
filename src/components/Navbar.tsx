
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="border-b border-stone-800 bg-stone-950/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-orange-500 tracking-tighter uppercase">
                    Los Lobos Enduro
                </Link>
                <div className="hidden md:flex space-x-8">
                    <Link href="/events" className="text-stone-300 hover:text-orange-400 font-medium transition-colors">
                        Eventos
                    </Link>
                    <Link href="/about" className="text-stone-300 hover:text-orange-400 font-medium transition-colors">
                        Sobre Nosotros
                    </Link>
                    <Link href="/gallery" className="text-stone-300 hover:text-orange-400 font-medium transition-colors">
                        Galería
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link
                        href="/login"
                        className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded font-bold uppercase text-sm transition-colors"
                    >
                        Ingresar
                    </Link>
                </div>
            </div>
        </nav>
    );
}
