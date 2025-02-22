<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    protected $fillable = [
        'marca',
        'modelo',
        'anio',
        'placa',
        'kilometraje',
        'imagen',
        'color',
        'precio',
    ];
}
