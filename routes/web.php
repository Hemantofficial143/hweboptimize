<?php

use App\Http\Controllers\AppController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::post('task-store',[\App\Http\Controllers\TaskController::class,'store']);
Route::post('task-priority-change/{task}',[\App\Http\Controllers\TaskController::class,'changeTaskPriority']);
Route::post('task-complete-status-change/{task}',[\App\Http\Controllers\TaskController::class,'changeCompleteStatus']);
Route::post('task-delete/{task}',[\App\Http\Controllers\TaskController::class,'deleteTask']);
Route::get('task-get',[\App\Http\Controllers\TaskController::class,'get']);

Route::get('/{any}', [AppController::class, 'index'])->where('any', '.*');
