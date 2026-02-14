
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        vehicleType: 'Enduro',
        emergencyContact: '',
        event: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
        alert('Registro simulado exitoso for ' + formData.fullName);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-stone-950 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-stone-900 p-8 rounded-xl border border-stone-800 shadow-2xl">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-white uppercase tracking-tighter">
                        Únete a la <span className="text-orange-500">Manada</span>
                    </h2>
                    <p className="mt-2 text-sm text-stone-400">
                        Regístrate para los próximos eventos y asegura tu cupo.
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="fullName" className="sr-only">Nombre Completo</label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                required
                                className="appearance-none relative block w-full px-3 py-3 border border-stone-700 bg-stone-950 text-stone-100 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm placeholder-stone-500"
                                placeholder="Nombre Completo"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Correo Electrónico</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none relative block w-full px-3 py-3 border border-stone-700 bg-stone-950 text-stone-100 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm placeholder-stone-500"
                                placeholder="Correo Electrónico"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="vehicleType" className="sr-only">Tipo de Vehículo</label>
                            <select
                                id="vehicleType"
                                name="vehicleType"
                                required
                                className="appearance-none relative block w-full px-3 py-3 border border-stone-700 bg-stone-950 text-stone-100 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                                value={formData.vehicleType}
                                onChange={handleChange}
                            >
                                <option value="Enduro">Moto Enduro</option>
                                <option value="Buggy">Buggy / UTV</option>
                                <option value="Quad">Cuatrimoto / ATV</option>
                                <option value="4x4">Camioneta 4x4</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="emergencyContact" className="sr-only">Contacto de Emergencia</label>
                            <input
                                id="emergencyContact"
                                name="emergencyContact"
                                type="text"
                                required
                                className="appearance-none relative block w-full px-3 py-3 border border-stone-700 bg-stone-950 text-stone-100 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm placeholder-stone-500"
                                placeholder="Contacto de Emergencia (Nombre y Teléfono)"
                                value={formData.emergencyContact}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 uppercase tracking-widest transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? 'Procesando...' : 'Registrarse'}
                        </button>
                    </div>
                </form>
                <div className="text-center mt-4">
                    <Link href="/login" className="font-medium text-orange-500 hover:text-orange-400 text-sm">
                        ¿Ya tienes cuenta? Inicia sesión
                    </Link>
                </div>
            </div>
        </div>
    );
}
