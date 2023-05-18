<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/kino',[\App\Http\Controllers\Api\KinoController::class, 'index']);
Route::get('/popular',[\App\Http\Controllers\Api\KinoController::class, 'getPopularFilm']);
Route::get('/trend',[\App\Http\Controllers\Api\KinoController::class, 'getTrendFilm']);
Route::get('/trailer',[\App\Http\Controllers\Api\KinoController::class, 'getTrailers']);

