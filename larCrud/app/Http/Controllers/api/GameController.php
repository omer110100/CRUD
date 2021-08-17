<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Models\Game;
use App\Http\Resources\Game as GameResource;
class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //Get all games record
        $games = Game::all();
        return new GameResource($games);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Create a new game record
        $game = new Game();
        $game->name = $request->input('name');
        $game->price = $request->input('price');
        $game->platform = $request->input('platform');
        $game->save();
        return new GameResource($game);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //Get a certain game by id
        $game = Game::findOrFail($id);
        return new GameResource($game);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //Update a certain game record by id
        $game = Game::findOrFail($id);
        $game->name = $request->input('name');
        $game->price = $request->input('price');
        $game->platform = $request->input('platform');
        $game->save();
        return new GameResource($game);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //delete a certain game by id
        $game = Game::findOrFail($id);
        if($game->delete()){
            return new GameResource($game);
        }
    }
}
