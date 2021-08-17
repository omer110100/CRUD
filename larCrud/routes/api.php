<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\GameController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('games',[GameController::class, 'index']);//getting all the games

Route::get('game/{id}',[GameController::class, 'show']);//getting a certain game by id

Route::post('game',[GameController::class, 'store']);//creating new game

Route::put('game/{id}',[GameController::class, 'update']);//updating a game

Route::delete('game/{id}',[GameController::class, 'destroy']);//deleting a game
