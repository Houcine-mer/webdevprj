<?php

use App\Http\Controllers\Newcontroller;
use Illuminate\Support\Facades\Route;

Route::get('/', [Newcontroller::class, 'welcome' ])->name('welcome');
