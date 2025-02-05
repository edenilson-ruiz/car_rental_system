import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaCamera, FaRoad, FaGasPump, FaCog } from "react-icons/fa";

export default function CarCard({ car }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative w-full max-w-md">
            {/* Badges en la parte superior */}
            {car.featured && (
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-sm px-3 py-1 rounded-full font-medium z-10">
                    Featured
                </div>
            )}

            {/* Badge con el número de imágenes */}
            <div className="absolute top-3 right-20 bg-gray-800 bg-opacity-75 text-white text-sm px-2 py-1 rounded-full flex items-center gap-1 z-20">
                <FaCamera />
                {car.images.length}
            </div>

            {/* Badge con el año del auto */}
            <div className="absolute top-3 right-3 bg-orange-200 text-gray-800 text-sm px-3 py-1 rounded-full font-medium z-10">
                {car.year}
            </div>

            {/* Swiper Slider con imágenes del auto */}
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="w-full h-56"
            >
                {car.images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            alt={`Car ${index + 1}`}
                            className="object-cover w-full h-full"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Contenido de la tarjeta */}
            <div className="p-4">
                {/* Tipo del vehículo */}
                <p className="text-orange-500 uppercase font-semibold text-sm mb-1">
                    {car.type}
                </p>

                {/* Nombre / Modelo del auto */}
                <h2 className="text-xl font-semibold mb-2 leading-tight">
                    {car.title}
                </h2>

                {/* Sección de especificaciones con íconos */}
                <div className="flex items-center text-sm text-gray-600 mb-2 gap-4">
                    <div className="flex items-center gap-1">
                        <FaRoad />
                        <span>{car.kilometers.toLocaleString()} kms</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaGasPump />
                        <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaCog />
                        <span>{car.transmission}</span>
                    </div>
                </div>

                {/* Precio */}
                <p className="text-orange-600 text-2xl font-bold mb-4">
                    {car.currency}
                    {car.price.toLocaleString()}
                </p>

                {/* Línea divisoria */}
                <hr />

                {/* Información del propietario y botón */}
                <div className="flex items-center justify-between mt-4 pt-4">
                    <div className="flex items-center gap-2">
                        <img
                            src={car.owner.avatar}
                            alt={car.owner.name}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <p className="text-sm font-semibold">
                            {car.owner.name}
                        </p>
                    </div>
                    <button className="btn btn-outline btn-sm">View car</button>
                </div>
            </div>
        </div>
    );
}

// Ejemplo de uso del componente con datos de prueba
const carData = {
    featured: true,
    year: 2017,
    images: [
        "https://images.pexels.com/photos/9615358/pexels-photo-9615358.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2779447/pexels-photo-2779447.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/16728009/pexels-photo-16728009/free-photo-of-black-subaru-impreza.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    type: "SUV",
    title: "2017 BMV X1 xDrive 20d xline",
    kilometers: 85908,
    fuel: "Diesel",
    transmission: "Automatic",
    price: 70064,
    currency: "$",
    owner: {
        name: "Kathryn Murphy",
        avatar: "https://via.placeholder.com/50?text=User",
    },
};

// Renderizar la tarjeta con los datos de prueba
export function CarShowcase() {
    return <CarCard car={carData} />;
}
