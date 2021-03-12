import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Api from '../Api';

const Products = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        Api.getAllProducts().then(res => {
            setProducts(res.data.data);
        });
    }, []);

    const renderProducts = () => {
        if (! products) {
            return (
                <tr>
                    <td colSpan="4">Loading products...</td>
                </tr>
            );
        }

        if (products.length === 0) {
            return (
                <tr>
                    <td colSpan="4">No products found. Add one.</td>
                </tr>
            );
        }

        return products.map((product, index) => (
            <tr className="border-b border-gray-300 bg-gray-100" key={++index}>
                <td className="text-center py-2">{product.id}</td>
                <td className="py-2 pl-2">{product.name}</td>
                <td className="text-center">{product.stock_available}</td>
                <td>
                    <Link to={`/products/${product.id}/edit`} key={product.id} className="text-blue-500">Edit</Link>
                </td>
            </tr>
        ));
    }

    return (
        <div className="container mx-auto">
            <div className="flex py-3">
                <h1 className="text-3xl font-bold text-blue-500">List of All Products</h1>
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
                <tbody>{renderProducts()}</tbody>
            </table>
        </div>
    );
};

export default Products;
