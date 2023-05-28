<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Core\Auth\AuthController;
use App\Http\Controllers\Core\Role\RoleManagmentController;
use App\Http\Controllers\Core\Permission\PermissionManagmentController;
use App\Http\Controllers\Core\Product\ProductManagementController;

// Backend API
/*
    Common API for Backend and Frontend
*/
Route::post('/register', [AuthController::class,'register']);
Route::post('/login', [AuthController::class,'login']);

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/info', [AuthController::class, 'info']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::apiResource('products', ProductManagementController::class);
});
