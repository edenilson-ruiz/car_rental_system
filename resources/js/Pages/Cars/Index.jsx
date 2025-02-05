import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

// Importamos algunos iconos ilustrativos
import { FaCalendarAlt, FaIdBadge, FaTachometerAlt } from "react-icons/fa";
import { CarShowcase } from "@/Components/CarCard";

export default function Index({ cars, filters }) {
    const [search, setSearch] = useState(filters.search || "");

    // Manejar la búsqueda sin recargar la página
    const handleSearch = (e) => {
        e.preventDefault();
        Inertia.get(
            route("cars.index"),
            { search },
            { preserveState: true, replace: true }
        );
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Create a new Car
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="mx-auto max-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="container mx-auto p-4">
                                <h1 className="text-2xl font-bold mb-4">
                                    Listado de Autos
                                </h1>

                                {/* Formulario de búsqueda */}
                                <form
                                    onSubmit={handleSearch}
                                    className="mb-4 flex gap-2"
                                >
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                        placeholder="Buscar por marca, modelo o placa..."
                                        className="input input-bordered w-full"
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Buscar
                                    </button>
                                </form>

                                {/* Botón para agregar auto */}
                                <div className="mb-4">
                                    <Link
                                        href="/cars/create"
                                        className="btn btn-primary"
                                    >
                                        Agregar Auto
                                    </Link>
                                </div>

                                {/* Grid de cards */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {cars.data.map((car) => (
                                        <div
                                            key={car.id}
                                            className="card bg-base-100 shadow-xl"
                                        >
                                            {/* Imagen del auto */}
                                            <figure>
                                                <img
                                                    src={
                                                        car.imagen
                                                            ? car.imagen
                                                            : "https://placehold.co/400x300/png"
                                                    }
                                                    alt={`${car.marca} ${car.modelo}`}
                                                    className="w-full h-52 object-cover"
                                                />
                                            </figure>

                                            {/* Contenido de la card */}
                                            <div className="card-body">
                                                <h2 className="card-title">
                                                    {car.marca} {car.modelo}
                                                </h2>

                                                {/* Sección de atributos con iconos */}
                                                <div className="mt-2 space-y-1">
                                                    <p className="flex items-center">
                                                        <FaCalendarAlt className="mr-2 text-lg" />
                                                        <span>
                                                            <strong>
                                                                Año:
                                                            </strong>{" "}
                                                            {car.anio}
                                                        </span>
                                                    </p>
                                                    <p className="flex items-center">
                                                        <FaIdBadge className="mr-2 text-lg" />
                                                        <span>
                                                            <strong>
                                                                Placa:
                                                            </strong>{" "}
                                                            {car.placa}
                                                        </span>
                                                    </p>
                                                    <p className="flex items-center">
                                                        <FaTachometerAlt className="mr-2 text-lg" />
                                                        <span>
                                                            <strong>
                                                                Kilometraje:
                                                            </strong>{" "}
                                                            {car.kilometraje}
                                                        </span>
                                                    </p>
                                                </div>

                                                {/* Acciones (botones de editar y eliminar) */}
                                                <div className="card-actions justify-end mt-4">
                                                    <Link
                                                        href={`/cars/${car.id}/edit`}
                                                        className="btn btn-warning btn-sm"
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
                                                                Inertia.delete(
                                                                    `/cars/${car.id}`
                                                                );
                                                            }
                                                        }}
                                                        className="btn btn-error btn-sm"
                                                    >
                                                        Eliminar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Paginación */}
                                <div className="flex justify-center mt-6">
                                    {cars.links.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.url || "#"}
                                            className={`mx-1 px-3 py-2 border rounded ${
                                                link.active
                                                    ? "bg-blue-500 text-white"
                                                    : "bg-gray-200 text-gray-700"
                                            }`}
                                            dangerouslySetInnerHTML={{
                                                __html: link.label,
                                            }}
                                        />
                                    ))}
                                </div>
                                <CarShowcase />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
