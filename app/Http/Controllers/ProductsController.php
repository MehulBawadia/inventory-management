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

    public function show($id)
    {
        $product = Product::find($id);
        if (! $product) {
            return response()->json([
                'message' => 'No product found.'
            ]);
        }

        return response()->json([
            'data' => $product->toArray()
        ]);
    }

    public function update($id)
    {
        $data = request()->validate([
            'name' => 'required',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|numeric|min:0'
        ]);

        $data['stock_available'] = $data['stock'];
        $product = Product::find($id);
        if (! $product) {
            return response()->json([
                'message' => 'No product found.'
            ]);
        }
        $product->update($data);

        return response()->json([
            'message' => 'Product added!'
        ]);
    }

    public function destroy($id)
    {
        $product = Product::find($id);
        if (! $product) {
            return response()->json([
                'message' => 'No product found.'
            ]);
        }
        $product->delete();

        return response()->json([
            'message' => 'Product deleted!'
        ]);
    }
}
