
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Toaster } from "@/components/ui/toaster"

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
    title: 'Los Lobos Enduro Team | Aventura y Barro',
    description: 'Plataforma oficial para eventos de enduro, buggy y 4x4.',
    keywords: ['enduro', 'buggy', '4x4', 'montaña', 'eventos', 'offroad'],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" className="dark">
            <body className={`${outfit.variable} font-sans antialiased min-h-screen bg-stone-950 text-stone-100 flex flex-col`}>
                <Navbar />
                <main className="flex-1">
                    {children}
                </main>
                <footer className="border-t border-stone-800 bg-stone-900 py-8 text-center text-sm text-stone-500">
                    <div className="container mx-auto px-4">
                        <p>&copy; {new Date().getFullYear()} Los Lobos Enduro Team. Todos los derechos reservados.</p>
                        <p className="mt-2 text-xs">Aventura. Adrenalina. Barro.</p>
                    </div>
                </footer>
                {/* <Toaster /> Placeholder for toast notifications */}
            </body>
        </html>
    );
}
