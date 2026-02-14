
import { NextResponse } from 'next/server';
// import { stripe } from "@/lib/stripe"; // Assuming stripe lib is created later
import { supabase } from "@/lib/supabase";

export const runtime = 'edge';

export async function POST(req: Request) {
    // Mock Stripe Signature Verification
    // In a real app, you would verify the Stripe signature here
    // using stripe.webhooks.constructEvent(buf, sig, webhookSecret);

    const payload = await req.json();
    const event = payload; // In real app, this is the verified event

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

        // Fulfill the purchase, update Supabase
        const { error } = await supabase
            .from('inscripciones')
            .update({
                status_pago: 'paid',
                monto_pagado: session.amount_total / 100,
                stripe_payment_intent_id: session.payment_intent
            })
            .eq('user_id', session.metadata.userId)
            .eq('evento_id', session.metadata.eventId);

        if (error) {
            console.error('Error updating inscription:', error);
            return NextResponse.json({ error: 'Database update failed' }, { status: 500 });
        }
    }

    return NextResponse.json({ received: true });
}
