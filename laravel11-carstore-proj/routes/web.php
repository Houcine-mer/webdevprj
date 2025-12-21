<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;

$htmlPath = dirname(base_path());

Route::get('/', function () use ($htmlPath) {
    return file_get_contents($htmlPath . '/index.html');
});

Route::get('/signup.html', function () use ($htmlPath) {
    return file_get_contents($htmlPath . '/signup.html');
});

Route::get('/Login.html', function () use ($htmlPath) {
    return file_get_contents($htmlPath . '/Login.html');
});

Route::get('/home.html', function () use ($htmlPath) {
    return file_get_contents($htmlPath . '/home.html');
});

Route::get('/About.html', function () use ($htmlPath) {
    return file_get_contents($htmlPath . '/About.html');
});

Route::get('/CarsList.html', function () use ($htmlPath) {
    return file_get_contents($htmlPath . '/CarsList.html');
});

Route::get('/review.html', function () use ($htmlPath) {
    return file_get_contents($htmlPath . '/review.html');
});

Route::get('/tour.html', function () use ($htmlPath) {
    return file_get_contents($htmlPath . '/tour.html');
});

Route::prefix('api')->group(function () {
    Route::post('/register', [UsersController::class, 'register']);
    Route::post('/login', [UsersController::class, 'login']);
    Route::get('/dashboard', [UsersController::class, 'dashboard']);
    Route::post('/logout', [UsersController::class, 'logout']);
});