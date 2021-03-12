import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Api from '../Api';
import AppContainer from './AppContainer';

const Products = () => {
    const [products, setProducts] = useState(null);

    const fetchProducts = () => {
        Api.getAllProducts().then(res => {
            setProducts(res.data.data);
        });
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const deleteProduct = (id) => {
        console.log(id);
    }

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
                <td className="text-center">
                    <Link to={`/${product.id}/edit`} key={product.id} className="text-blue-500">Edit</Link>
                    <button
                        className="p-0 ml-3 bg-transparent text-red-500 hover:text-red-800"
                        onClick={() => {
                            Api.deleteProduct(product.id).then(fetchProducts).catch(err => {
                                alert('Failed to delete product.');
                            });
                        }}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ));
    }

    return (
        <AppContainer pageTitle="List of All Products" pageLink="/create" pageLinkText="Add Product">
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
        </AppContainer>
    );
};

export default Products;
