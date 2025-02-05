<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string('marca');
            $table->string('modelo');
            $table->string('color')->nullable();
            $table->string('tipo')->nullable();
            $table->string('transmision')->nullable();
            $table->string('combustible')->nullable();
            $table->integer('puertas')->nullable();
            $table->integer('pasajeros')->nullable();
            $table->integer('capacidad')->nullable();
            $table->string('motor')->nullable();
            $table->string('chasis')->nullable();
            $table->string('vin')->nullable();
            $table->string('estado')->nullable();
            $table->string('agencia')->nullable();
            $table->string('ubicacion')->nullable();
            $table->decimal('precio', 10, 2)->nullable();
            $table->string('moneda')->nullable();
            $table->string('imagen')->nullable();
            $table->string('imagen2')->nullable();
            $table->string('imagen3')->nullable();
            $table->year('anio');
            $table->string('placa')->unique();
            $table->integer('kilometraje')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};
