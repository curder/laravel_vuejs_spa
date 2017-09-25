<?php

use Illuminate\Http\Request;

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

Route::group(['middleware' => ['cors', 'api']], function() {

    Route::get('/todos', function() {
        return response()->json(App\Todo::all());
    });

    Route::get('/todos/{todo}', function(App\Todo $todo) {
        return $todo;
    });

    Route::post('/todos/create',function(Request $request) {
        $data = ['title'=>$request->get('title'), 'computed'=>false];
        $todo = App\Todo::create($data);

        return $todo;
    });

    Route::patch('/todos/{id}/computed', function($id) {
        $todo = App\Todo::find($id);
        $todo->computed = ! $todo->computed;
        $todo->save();

        return $todo;
    });

    Route::delete('/todos/{id}/delete',function($id) {
        $todo = App\Todo::find($id);
        $todo->delete();

        return response()->json(['deleted']);
    });
});
