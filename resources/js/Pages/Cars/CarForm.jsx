import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/inertia-react";
import { Head } from "@inertiajs/react";

export default function CarForm({ car = {}, errors, processing }) {
    // Configuramos el formulario con valores iniciales (si se trata de edición, se llenan; si no, quedan vacíos o con valores por defecto)
    const { data, setData, post, put } = useForm({
        marca: car.marca || "",
        modelo: car.modelo || "",
        color: car.color || "",
        tipo: car.tipo || "",
        transmision: car.transmision || "",
        combustible: car.combustible || "",
        puertas: car.puertas || "",
        pasajeros: car.pasajeros || "",
        capacidad: car.capacidad || "",
        motor: car.motor || "",
        chasis: car.chasis || "",
        vin: car.vin || "",
        estado: car.estado || "",
        agencia: car.agencia || "",
        ubicacion: car.ubicacion || "",
        precio: car.precio || "",
        moneda: car.moneda || "",
        imagen: car.imagen || "",
        imagen2: car.imagen2 || "",
        imagen3: car.imagen3 || "",
        anio: car.anio || "",
        placa: car.placa || "",
        kilometraje: car.kilometraje || 0,
    });

    // Determinar si se trata de edición (si existe id en el objeto car)
    const isEditing = Boolean(car.id);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            // Actualiza el registro enviando una solicitud PUT/PATCH
            put(route("cars.update", car.id));
        } else {
            // Crea un nuevo registro con POST
            post(route("cars.store"), {
                preserveScroll: true,
                preserveState: true,
            });
        }
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
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Fila 1: Marca y Modelo */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Marca
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            value={data.marca}
                                            onChange={(e) =>
                                                setData("marca", e.target.value)
                                            }
                                        />
                                        {errors.marca && (
                                            <span className="text-error">
                                                {errors.marca}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Modelo
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            value={data.modelo}
                                            onChange={(e) =>
                                                setData(
                                                    "modelo",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.modelo && (
                                            <span className="text-error">
                                                {errors.modelo}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Fila 2: Color, Tipo, Transmisión y Combustible */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Color
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            value={data.color}
                                            onChange={(e) =>
                                                setData("color", e.target.value)
                                            }
                                        />
                                        {errors.color && (
                                            <span className="text-error">
                                                {errors.color}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Tipo
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            value={data.tipo}
                                            onChange={(e) =>
                                                setData("tipo", e.target.value)
                                            }
                                        />
                                        {errors.tipo && (
                                            <span className="text-error">
                                                {errors.tipo}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Transmisión
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            value={data.transmision}
                                            onChange={(e) =>
                                                setData(
                                                    "transmision",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.transmision && (
                                            <span className="text-error">
                                                {errors.transmision}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Combustible
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            value={data.combustible}
                                            onChange={(e) =>
                                                setData(
                                                    "combustible",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.combustible && (
                                            <span className="text-error">
                                                {errors.combustible}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Fila 3: Puertas, Pasajeros y Capacidad */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Puertas
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            className="input input-bordered w-full"
                                            value={data.puertas}
                                            onChange={(e) =>
                                                setData(
                                                    "puertas",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.puertas && (
                                            <span className="text-error">
                                                {errors.puertas}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Pasajeros
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            className="input input-bordered w-full"
                                            value={data.pasajeros}
                                            onChange={(e) =>
                                                setData(
                                                    "pasajeros",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.pasajeros && (
                                            <span className="text-error">
                                                {errors.pasajeros}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Capacidad
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            className="input input-bordered w-full"
                                            value={data.capacidad}
                                            onChange={(e) =>
                                                setData(
                                                    "capacidad",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.capacidad && (
                                            <span className="text-error">
                                                {errors.capacidad}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Fila 4: Motor, Chasis y VIN */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Motor
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            value={data.motor}
                                            onChange={(e) =>
                                                setData("motor", e.target.value)
                                            }
                                        />
                                        {errors.motor && (
                                            <span className="text-error">
                                                {errors.motor}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Chasis
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            value={data.chasis}
                                            onChange={(e) =>
                                                setData(
                                                    "chasis",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.chasis && (
                                            <span className="text-error">
                                                {errors.chasis}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                VIN
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            value={data.vin}
                                            onChange={(e) =>
                                                setData("vin", e.target.value)
                                            }
                                        />
                                        {errors.vin && (
                                            <span className="text-error">
                                                {errors.vin}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Fila 5: Estado, Agencia y Ubicación */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Estado
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            value={data.estado}
                                            onChange={(e) =>
                                                setData(
                                                    "estado",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.estado && (
                                            <span className="text-error">
                                                {errors.estado}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Agencia
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            value={data.agencia}
                                            onChange={(e) =>
                                                setData(
                                                    "agencia",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.agencia && (
                                            <span className="text-error">
                                                {errors.agencia}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Ubicación
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            value={data.ubicacion}
                                            onChange={(e) =>
                                                setData(
                                                    "ubicacion",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.ubicacion && (
                                            <span className="text-error">
                                                {errors.ubicacion}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Fila 6: Precio y Moneda */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Precio
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            className="input input-bordered w-full"
                                            value={data.precio}
                                            onChange={(e) =>
                                                setData(
                                                    "precio",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.precio && (
                                            <span className="text-error">
                                                {errors.precio}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Moneda
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            value={data.moneda}
                                            onChange={(e) =>
                                                setData(
                                                    "moneda",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.moneda && (
                                            <span className="text-error">
                                                {errors.moneda}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Fila 7: Imágenes (URLs) */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Imagen 1 (URL)
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            value={data.imagen}
                                            onChange={(e) =>
                                                setData(
                                                    "imagen",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.imagen && (
                                            <span className="text-error">
                                                {errors.imagen}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Imagen 2 (URL)
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            value={data.imagen2}
                                            onChange={(e) =>
                                                setData(
                                                    "imagen2",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.imagen2 && (
                                            <span className="text-error">
                                                {errors.imagen2}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Imagen 3 (URL)
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            value={data.imagen3}
                                            onChange={(e) =>
                                                setData(
                                                    "imagen3",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.imagen3 && (
                                            <span className="text-error">
                                                {errors.imagen3}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Fila 8: Año, Placa y Kilometraje */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Año
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            className="input input-bordered w-full"
                                            value={data.anio}
                                            onChange={(e) =>
                                                setData("anio", e.target.value)
                                            }
                                        />
                                        {errors.anio && (
                                            <span className="text-error">
                                                {errors.anio}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Placa
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            value={data.placa}
                                            onChange={(e) =>
                                                setData("placa", e.target.value)
                                            }
                                        />
                                        {errors.placa && (
                                            <span className="text-error">
                                                {errors.placa}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Kilometraje
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            className="input input-bordered w-full"
                                            value={data.kilometraje}
                                            onChange={(e) =>
                                                setData(
                                                    "kilometraje",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.kilometraje && (
                                            <span className="text-error">
                                                {errors.kilometraje}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Botón de envío */}
                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-full"
                                        disabled={processing}
                                    >
                                        {isEditing
                                            ? "Actualizar Auto"
                                            : "Crear Auto"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
