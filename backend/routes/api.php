<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Core\Auth\AuthController;

use App\Http\Controllers\Core\Product\ProductManagementController;
use App\Http\Controllers\Core\Purchase\PurchaseManagementController;
use Psy\Readline\Hoa\Protocol;

// Backend API
/*
    Common API for Backend and Frontend
*/
Route::post('/register', [AuthController::class,'register']);
Route::post('/login', [AuthController::class,'login']);
Route::get('/current_user_all_products',[PurchaseManagementController::class, 'currentUserAllProducts']);
Route::apiResource('purchases', PurchaseManagementController::class);

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/info', [AuthController::class, 'info']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('products', ProductManagementController::class);
});
