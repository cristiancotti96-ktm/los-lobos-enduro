
export default function Dashboard() {
    return (
        <div className="container mx-auto px-4 py-8 space-y-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold uppercase text-stone-100">Panel de Control</h1>
                <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded shadow-lg transition-colors flex items-center gap-2">
                    <span>+ Nuevo Evento</span>
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Statistics Cards */}
                <div className="bg-stone-900 border border-stone-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-stone-400 font-bold uppercase text-sm mb-2">Total Inscritos</h3>
                    <p className="text-4xl text-orange-500 font-black">124</p>
                </div>
                <div className="bg-stone-900 border border-stone-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-stone-400 font-bold uppercase text-sm mb-2">Ingresos Mes</h3>
                    <p className="text-4xl text-green-500 font-black">$4,250</p>
                </div>
                <div className="bg-stone-900 border border-stone-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-stone-400 font-bold uppercase text-sm mb-2">Eventos Activos</h3>
                    <p className="text-4xl text-stone-100 font-black">3</p>
                </div>
            </div>

            {/* Main Content Area: Events/Inscriptions */}
            <div className="bg-stone-900 border border-stone-800 rounded-lg overflow-hidden shadow-lg mt-8">
                <div className="bg-stone-800 px-6 py-4 border-b border-stone-700 flex justify-between items-center">
                    <h2 className="font-bold text-lg uppercase text-stone-200">Próximos Eventos & Rutas</h2>
                    <span className="text-xs text-stone-500 uppercase font-bold tracking-widest">Vista de Admin</span>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-stone-400">
                        <thead className="bg-stone-950 uppercase text-xs font-bold text-stone-500 tracking-wider">
                            <tr>
                                <th className="px-6 py-3">Nombre del Evento</th>
                                <th className="px-6 py-3">Fecha</th>
                                <th className="px-6 py-3">Ubicación</th>
                                <th className="px-6 py-3">Dificultad</th>
                                <th className="px-6 py-3 text-right">Inscritos</th>
                                <th className="px-6 py-3 text-right">Estado</th>
                                <th className="px-6 py-3 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-800">
                            {/* Mock Data Row 1 */}
                            <tr className="hover:bg-stone-800/50 transition-colors">
                                <td className="px-6 py-4 font-medium text-stone-200">Ruta del Zorro - Edición Nocturna</td>
                                <td className="px-6 py-4">15 Nov 2026</td>
                                <td className="px-6 py-4">Sierra Nevada</td>
                                <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-red-900 text-red-100 text-xs font-bold uppercase">Dificil</span></td>
                                <td className="px-6 py-4 text-right">45/50</td>
                                <td className="px-6 py-4 text-right"><span className="text-green-500 font-bold">Activo</span></td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <button className="text-blue-400 hover:underline">Editar</button>
                                    <button className="text-orange-500 hover:underline">Ver Lista</button>
                                </td>
                            </tr>
                            {/* Mock Data Row 2 */}
                            <tr className="hover:bg-stone-800/50 transition-colors">
                                <td className="px-6 py-4 font-medium text-stone-200">Travesía 4x4 - El Valle Perdido</td>
                                <td className="px-6 py-4">02 Dic 2026</td>
                                <td className="px-6 py-4">Cañón del Río</td>
                                <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-yellow-900 text-yellow-100 text-xs font-bold uppercase">Medio</span></td>
                                <td className="px-6 py-4 text-right">12/30</td>
                                <td className="px-6 py-4 text-right"><span className="text-green-500 font-bold">Activo</span></td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <button className="text-blue-400 hover:underline">Editar</button>
                                    <button className="text-orange-500 hover:underline">Ver Lista</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
