import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";

export default function Index({ cars, filters }) {
    // Inicializamos el estado con el valor del filtro recibido
    const [search, setSearch] = useState(filters.search || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Enviamos el parámetro de búsqueda mediante Inertia.get
        Inertia.get(
            "/cars",
            { search },
            {
                preserveState: true, // Conserva el estado de la página
                replace: true, // Reemplaza la URL sin agregar una nueva entrada en el historial
            }
        );
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Listado de Autos</h1>

            {/* Formulario de búsqueda */}
            <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Buscar por marca, modelo o placa..."
                    className="input input-bordered w-full"
                />
                <button type="submit" className="btn btn-primary">
                    Buscar
                </button>
            </form>

            <Link href="/cars/create" className="btn btn-primary mb-4">
                Agregar Auto
            </Link>

            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Año</th>
                        <th>Placa</th>
                        <th>Kilometraje</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car) => (
                        <tr key={car.id}>
                            <td>{car.marca}</td>
                            <td>{car.modelo}</td>
                            <td>{car.anio}</td>
                            <td>{car.placa}</td>
                            <td>{car.kilometraje}</td>
                            <td>
                                <Link
                                    href={`/cars/${car.id}/edit`}
                                    className="btn btn-sm btn-warning mr-2"
                                >
                                    Editar
                                </Link>
                                <button
                                    onClick={() => {
                                        if (
                                            confirm(
                                                "¿Estás seguro de eliminar este auto?"
                                            )
                                        ) {
                                            Inertia.delete(`/cars/${car.id}`);
                                        }
                                    }}
                                    className="btn btn-sm btn-error"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
