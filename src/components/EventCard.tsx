
import Image from 'next/image';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';

export type EventStatus = 'Open' | 'Full' | 'Closed';
export type EventDifficulty = 'Facil' | 'Medio' | 'Dificil' | 'Extremo' | 'Leyenda';

export interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    price: number;
    image: string;
    difficulty: EventDifficulty;
    status: EventStatus;
    maxParticipants: number;
    currentParticipants: number;
}

export function EventCard({ event }: { event: Event }) {
    const difficultyColors = {
        'Facil': 'bg-green-600 text-green-100',
        'Medio': 'bg-yellow-600 text-yellow-100',
        'Dificil': 'bg-red-600 text-red-100',
        'Extremo': 'bg-purple-600 text-purple-100',
        'Leyenda': 'bg-stone-100 text-stone-900',
    };

    return (
        <div className="group bg-stone-900 border border-stone-800 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-orange-900/20 hover:border-orange-500/50 flex flex-col h-full">
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${difficultyColors[event.difficulty] || 'bg-stone-600'}`}>
                        {event.difficulty}
                    </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-60" />
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-stone-100 uppercase leading-tight group-hover:text-orange-500 transition-colors">
                            {event.title}
                        </h3>
                        <span className="text-lg font-bold text-green-500">
                            ${event.price}
                        </span>
                    </div>
                    <div className="flex items-center text-stone-400 text-sm mb-1 gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                        {event.date}
                    </div>
                    <div className="flex items-center text-stone-400 text-sm gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                        {event.location}
                    </div>
                </div>

                <p className="text-stone-400 text-sm line-clamp-2 mb-6 flex-1">
                    {event.description}
                </p>

                <div className="mt-auto space-y-4">
                    <div className="space-y-1">
                        <div className="flex justify-between text-xs font-medium text-stone-500 uppercase">
                            <span>Cupos ({event.currentParticipants}/{event.maxParticipants})</span>
                            <span>{Math.round((event.currentParticipants / event.maxParticipants) * 100)}% Lleno</span>
                        </div>
                        <div className="h-2 w-full bg-stone-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-orange-600 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${(event.currentParticipants / event.maxParticipants) * 100}%` }}
                            />
                        </div>
                    </div>

                    <Link
                        href={`/events/${event.id}`}
                        className="block w-full text-center bg-stone-800 hover:bg-orange-600 text-white font-bold py-3 rounded uppercase text-sm tracking-wide transition-colors border border-stone-700 hover:border-orange-500"
                    >
                        Ver Detalles & Inscribirse
                    </Link>
                </div>
            </div>
        </div>
    );
}

export function EventCardSkeleton() {
    return (
        <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
            <Skeleton className="h-48 w-full rounded-none" />
            <div className="p-6 flex-1 space-y-4">
                <div className="space-y-2">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/4" />
                </div>
                <div className="space-y-2">
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-1/3" />
                </div>
                <Skeleton className="h-16 w-full" />
                <div className="mt-auto pt-4 space-y-2">
                    <Skeleton className="h-2 w-full" />
                    <Skeleton className="h-10 w-full" />
                </div>
            </div>
        </div>
    );
}
