import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Api from '../Api';

const AddProduct = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    const addNewProduct = async () => {
        setLoading(true);
        try {
            await Api.addProduct({name, price, stock});
            history.push('/products');
        } catch {
            alert('Failed to add post');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto">
            <div className="flex py-3">
                <h1 className="text-3xl font-bold text-blue-500">Add Product</h1>
            </div>

            <div className="mt-5 flex flex-col">
                <label htmlFor="name" className="text-sm text-gray-700 tracking-wider">Name:</label>
                <input type="text" id="name" className="border border-gray-300 rounded outline-none focus:ring bg-white pl-2 py-2 text-sm w-1/2" value={name} onChange={e => setName(e.target.value)} />
            </div>

            <div className="mt-5 flex flex-col">
                <label htmlFor="price" className="text-sm text-gray-700 tracking-wider">Price:</label>
                <input type="text" id="price" className="border border-gray-300 rounded outline-none focus:ring bg-white pl-2 py-2 text-sm w-1/2" value={price} onChange={e => setPrice(e.target.value)}  />
            </div>

            <div className="mt-5 flex flex-col">
                <label htmlFor="stock" className="text-sm text-gray-700 tracking-wider">Stock Available:</label>
                <input type="text" id="stock" className="border border-gray-300 rounded outline-none focus:ring bg-white pl-2 py-2 text-sm w-1/2" value={stock} onChange={e => setStock(e.target.value)}  />
            </div>

            <div className="mt-5">
                <button className="px-3 py-2 rounded bg-indigo-300 focus:outline-none text-indigo-900 hover:bg-indigo-500 focus:bg-indigo-500 w-1/2" onClick={addNewProduct} disabled={loading}>
                    {loading ? 'Adding...' : 'Add'}
                </button>
            </div>
        </div>
    );
};

export default AddProduct;
