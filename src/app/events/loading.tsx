
import { EventCardSkeleton } from '@/components/EventCard';

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-12 space-y-8">
            <div className="space-y-4 text-center mb-12 animate-pulse">
                <div className="h-10 bg-stone-800 w-1/3 mx-auto rounded" />
                <div className="h-4 bg-stone-900 w-1/2 mx-auto rounded" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <EventCardSkeleton key={i} />
                ))}
            </div>
        </div>
    );
}
