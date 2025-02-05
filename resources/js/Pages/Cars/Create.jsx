import React from "react";
import { useForm } from "@inertiajs/inertia-react";

export default function Create() {
    const { data, setData, post, errors } = useForm({
        marca: "",
        modelo: "",
        anio: "",
        placa: "",
        kilometraje: 0,
        imagen: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post("/cars");
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Agregar Auto</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control mb-2">
                    <label className="label">Marca</label>
                    <input
                        type="text"
                        className="input input-bordered"
                        value={data.marca}
                        onChange={(e) => setData("marca", e.target.value)}
                    />
                    {errors.marca && (
                        <span className="text-red-500">{errors.marca}</span>
                    )}
                </div>
                <div className="form-control mb-2">
                    <label className="label">Modelo</label>
                    <input
                        type="text"
                        className="input input-bordered"
                        value={data.modelo}
                        onChange={(e) => setData("modelo", e.target.value)}
                    />
                    {errors.modelo && (
                        <span className="text-red-500">{errors.modelo}</span>
                    )}
                </div>
                <div className="form-control mb-2">
                    <label className="label">Año</label>
                    <input
                        type="number"
                        className="input input-bordered"
                        value={data.anio}
                        onChange={(e) => setData("anio", e.target.value)}
                    />
                    {errors.anio && (
                        <span className="text-red-500">{errors.anio}</span>
                    )}
                </div>
                <div className="form-control mb-2">
                    <label className="label">Placa</label>
                    <input
                        type="text"
                        className="input input-bordered"
                        value={data.placa}
                        onChange={(e) => setData("placa", e.target.value)}
                    />
                    {errors.placa && (
                        <span className="text-red-500">{errors.placa}</span>
                    )}
                </div>
                <div className="form-control mb-2">
                    <label className="label">Kilometraje</label>
                    <input
                        type="number"
                        className="input input-bordered"
                        value={data.kilometraje}
                        onChange={(e) => setData("kilometraje", e.target.value)}
                    />
                    {errors.kilometraje && (
                        <span className="text-red-500">
                            {errors.kilometraje}
                        </span>
                    )}
                </div>
                <div className="form-control mb-2">
                    <label className="label">Imagen</label>
                    <input
                        type="text"
                        className="input input-bordered"
                        value={data.imagen}
                        onChange={(e) => setData("imagen", e.target.value)}
                    />
                    {errors.imagen && (
                        <span className="text-red-500">{errors.imagen}</span>
                    )}
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                    Guardar
                </button>
            </form>
        </div>
    );
}
