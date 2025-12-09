<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\Contracts\JWTAuth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email'=> 'required|email|unique:users,email',
            'password'=> 'required|string|max:12|min:8',
        ]);

        if ($validator->fails()) {
            return response() -> json(['errors'=> $validator->errors(),422]);
        }   

        $user = User::create([
            'name'=> $request->name,
            'email'=> $request->email,
            'password'=> Hash::make($request->password),
        ]);

        $token = JWTAuth::fromUser($user);

        return response()->json(['message'=>'User Registered' ,
            'user'=>$user,
            'token'=>$token
        ],201);
    }

}
