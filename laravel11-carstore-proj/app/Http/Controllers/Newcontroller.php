<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Newcontroller extends Controller
{
    public function welcome(){
        return view('welcome');
    }

}
