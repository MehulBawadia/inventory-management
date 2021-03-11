<?php

namespace App\Http\Controllers;

use App\Models\Product;

class ProductsController extends Controller
{
    public function index()
    {
        return response()->json([
            'data' => Product::select('id', 'name', 'price', 'stock_available')->get()->toArray(),
        ]);
    }
}
