
import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className="flex-1 flex flex-col justify-center items-center p-4 bg-stone-950">
            <div className="w-full max-w-md bg-stone-900 border border-stone-800 rounded-lg shadow-2xl overflow-hidden p-8">
                <h2 className="text-3xl font-bold mb-6 text-center text-orange-500 uppercase tracking-tight">Acceso Pilotos</h2>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-stone-300 uppercase tracking-widest" htmlFor="email">Email</label>
                        <input
                            className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-3 text-stone-100 focus:outline-none focus:border-orange-500 transition-colors"
                            type="email"
                            id="email"
                            placeholder="tu@email.com"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-stone-300 uppercase tracking-widest" htmlFor="password">Contraseña</label>
                        <input
                            className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-3 text-stone-100 focus:outline-none focus:border-orange-500 transition-colors"
                            type="password"
                            id="password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded uppercase tracking-wide transition-all shadow-md mt-4"
                    >
                        Iniciar Sesión
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-stone-500 space-y-2">
                    <p>¿No tienes cuenta? <Link href="/register" className="text-orange-500 hover:underline">Regístrate aquí</Link></p>
                    <p><Link href="/reset-password" className="text-stone-400 hover:text-stone-300">Recuperar contraseña</Link></p>
                </div>
            </div>
        </div>
    );
}
