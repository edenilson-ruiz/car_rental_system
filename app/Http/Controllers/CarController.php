<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\ValidationException;


class CarController extends Controller
{
    public function index(Request $request)
    {
        // Iniciamos la consulta sobre el modelo Car
        $query = Car::query();

        // Si se envía un término de búsqueda, filtramos por algunos campos
        if ($search = $request->input('search')) {
            $query->where(function($q) use ($search) {
                $q->where('marca', 'like', "%{$search}%")
                  ->orWhere('modelo', 'like', "%{$search}%")
                  ->orWhere('placa', 'like', "%{$search}%");
            });
        }

        // Obtenemos los autos (puedes implementar paginación con ->paginate(10) si lo prefieres)
        // $cars = $query->get();

        // Obtener autos con paginación de 10 por página
        // $cars = $query->paginate(10)->withQueryString();
        // Paginar los resultados con los filtros activos
        $cars = $query->paginate(10)->withQueryString();

        // dd($cars);

        // Retornamos la vista Inertia, enviando además el filtro actual
        return Inertia::render('Cars/Index', [
            'cars'    => $cars,
            'filters' => $request->only('search'),
        ]);
    }

    public function create()
    {
        return Inertia::render('Cars/CarForm');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'marca'       => 'required|string|max:255',
            'modelo'      => 'required|string|max:255',
            'anio'        => 'required|digits:4',
            'placa'       => 'required|string|max:255|unique:cars',
            'kilometraje' => 'required|integer',
            'imagen'      => 'required|string',
            'color'       => 'string|max:255',
        ]);

                // Guardar en la BD
        Car::create($validated);

        // Retornar con mensaje de éxito
        return redirect()->route('cars.index')->with('success', 'Auto agregado correctamente.');

    }

    public function edit(Car $car)
    {
        return Inertia::render('Cars/CarForm', ['car' => $car]);
    }

    public function update(Request $request, Car $car)
    {
        $validated = $request->validate([
            'marca'       => 'required|string|max:255',
            'modelo'      => 'required|string|max:255',
            'anio'        => 'required|digits:4',
            'placa'       => 'required|string|max:255|unique:cars,placa,' . $car->id,
            'kilometraje' => 'required|integer',
            'imagen'      => 'required|string',
            'color'       => 'string|max:255',
        ]);

        $car->update($validated);

        return redirect()->route('cars.index')->with('success', 'Auto actualizado exitosamente.');
    }

    public function destroy(Car $car)
    {
        $car->delete();
        return redirect()->route('cars.index')->with('success', 'Auto eliminado exitosamente.');
    }
}
