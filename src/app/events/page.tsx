
import { EventCard, Event } from '@/components/EventCard';
import Link from 'next/link';

// Mock Data Function (Simulating Supabase Fetch with 2s delay)
async function getEvents(): Promise<Event[]> {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate slow network/API

    return [
        {
            id: "1",
            title: "Ruta del Zorro - Edición Nocturna",
            description: "Desafío de orientación nocturna por los senderos más técnicos de Sierra Nevada. Solo para pilotos experimentados con luces potentes.",
            date: "15 Nov 2026",
            location: "Sierra Nevada, Base Camp",
            price: 45,
            image: "https://images.unsplash.com/photo-1579624586948-438902d33405?q=80&w=2670&auto=format&fit=crop",
            difficulty: "Dificil",
            status: "Open",
            maxParticipants: 50,
            currentParticipants: 45,
        },
        {
            id: "2",
            title: "Travesía 4x4 - El Valle Perdido",
            description: "Expedición familiar en 4x4 y Buggys. Cruzaremos ríos, barrizales y tendremos un asado al final del recorrido. Nivel medio.",
            date: "02 Dic 2026",
            location: "Cañón del Río",
            price: 80,
            image: "https://images.unsplash.com/photo-1533473359331-0135ef1bcfb0?q=80&w=1740&auto=format&fit=crop",
            difficulty: "Medio",
            status: "Open",
            maxParticipants: 30,
            currentParticipants: 12,
        },
        {
            id: "3",
            title: "Hill Climb - La Bestia",
            description: "¿Quién llegará más alto? Competición de subida en pendiente extrema. Categorías para motos y quads. Premios en efectivo.",
            date: "10 Ene 2027",
            location: "Cantera Abandonada",
            price: 25,
            image: "https://images.unsplash.com/photo-1558981359-219d6364c969?q=80&w=1740&auto=format&fit=crop",
            difficulty: "Extremo",
            status: "Open",
            maxParticipants: 100,
            currentParticipants: 88,
        },
        {
            id: "4",
            title: "Paseo de Iniciación - Enduro Kids",
            description: "Para los más pequeños. Circuito cerrado y seguro con monitores. Ideal para familias y futuros campeones.",
            date: "20 Feb 2027",
            location: "Finca Los Lobos",
            price: 15,
            image: "https://images.unsplash.com/photo-1563299796-b729d0af54a5?q=80&w=1925&auto=format&fit=crop",
            difficulty: "Facil",
            status: "Open",
            maxParticipants: 50,
            currentParticipants: 10,
        },
        {
            id: "5",
            title: "El Desafío de los 3 Picos",
            description: "Ruta de resistencia de 8 horas. Conecta tres cumbres en un solo día. Requiere autonomía extendida y buen estado físico.",
            date: "14 Mar 2027",
            location: "Cordillera Central",
            price: 60,
            image: "https://images.unsplash.com/photo-1518659170366-cc319b999120?q=80&w=1740&auto=format&fit=crop",
            difficulty: "Leyenda",
            status: "Open",
            maxParticipants: 20,
            currentParticipants: 18,
        }
    ];
}

export default async function EventsPage() {
    const events = await getEvents();

    return (
        <div className="min-h-screen bg-stone-950 text-stone-100 pb-20">

            {/* Header */}
            <div className="bg-stone-900 border-b border-stone-800 py-12 mb-12">
                <div className="container mx-auto px-4 text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-orange-500">
                        Próximos Eventos
                    </h1>
                    <p className="text-xl text-stone-400 max-w-2xl mx-auto">
                        Explora las rutas más salvajes de la temporada. Desde paseos familiares hasta desafíos extremos.
                    </p>
                </div>
            </div>

            {/* Events Grid */}
            <div className="container mx-auto px-4">
                {/* Filters (Mock UI) */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {['Todos', 'Enduro', '4x4', 'Buggy', 'Competencia'].map((filter) => (
                        <button
                            key={filter}
                            className={`px-6 py-2 rounded-full border border-stone-700 text-sm font-bold uppercase transition-colors ${filter === 'Todos' ? 'bg-orange-600 text-white border-orange-600' : 'hover:border-orange-500 hover:text-orange-500 text-stone-400'}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-20 text-center space-y-6 bg-secondary/10 p-12 rounded-2xl border border-secondary/20">
                    <h2 className="text-3xl font-bold uppercase">¿No encuentras lo que buscas?</h2>
                    <p className="text-stone-400">Sugiere una nueva ruta o contáctanos para eventos privados.</p>
                    <Link
                        href="/contact"
                        className="inline-block bg-secondary hover:bg-green-700 text-white font-bold py-3 px-8 rounded uppercase transition-colors"
                    >
                        Contactar Organización
                    </Link>
                </div>
            </div>
        </div>
    );
}
