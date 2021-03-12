<?php

namespace App\Http\Controllers;

use App\Models\Product;

class ProductsController extends Controller
{
    public function index()
    {
        return response()->json([
            'data' => Product::orderBy('id', 'DESC')->select('id', 'name', 'price', 'stock_available')->get()->toArray(),
        ]);
    }

    public function store()
    {
        $data = request()->validate([
            'name' => 'required',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|numeric|min:0'
        ]);

        $data['stock_available'] = $data['stock'];
        Product::create($data);

        return response()->json([
            'message' => 'Product added!'
        ]);
    }
}
