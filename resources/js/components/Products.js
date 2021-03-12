import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('allProducts')) || []);

    const fetchAllProducts = async () => {
        const response = await axios.get('/api/products');

        setProducts(response.data.data);

        localStorage.setItem('allProducts', JSON.stringify(response.data.data));
    }

    return (
        <div className="container mx-auto">
            <div className="flex py-3">
                <h1 className="text-3xl font-bold text-blue-500">List of All Products</h1>

                <button className="ml-3 px-3 rounded bg-indigo-300 text-indigo-900 hover:bg-indigo-500" onClick={fetchAllProducts}>Fetch data</button>
            </div>

            <table className="w-full border border-gray-300">
                <thead className="bg-indigo-400 text-white text-sm tracking-wider">
                    <tr>
                        <th className="py-2 text-center">Sr. No.</th>
                        <th className="py-2 pl-2 text-left">Name</th>
                        <th className="py-2 text-center">Stock Available</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map((product, index) => {
                        return (
                            <tr className="border-b border-gray-300 bg-gray-100" key={++index}>
                                <td className="text-center py-2">{product.id}</td>
                                <td className="py-2 pl-2">{product.name}</td>
                                <td className="text-center">{product.stock_available}</td>
                                <td></td>
                            </tr>
                        )})
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Products;
