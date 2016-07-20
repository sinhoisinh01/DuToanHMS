<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

use App\Construction;
use Illuminate\Support\Facades\Auth;

$app->get('/', function () use ($app) {
    return redirect('/index.html');
});

$app->get('/testAuth', ['middleware' => 'auth', function () {
    return response()->json(Auth::user()->first_name);
}]);

$app->get('/home', function () {
    return response()->json(Construction::where('user_id',0)->get());
});

$app->get('/construction/{id}', 'ConstructionController@getCategories');