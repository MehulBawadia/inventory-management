import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import Api from '../Api';

const EditProduct = () => {
    const { id } = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    useEffect(() => {
        Api.getSingleProduct(id).then(res => {
            const product = res.data.data;

            setName(product.name);
            setPrice(product.price);
            setStock(product.stock_available);
        });
    }, []);

    const updateProduct = async () => {
        setLoading(true);
        try {
            await Api.updateProduct(id, {name, price, stock});
            history.push('/products');
        } catch {
            alert('Failed to edit post');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto">
            <div className="flex py-3">
                <h1 className="text-3xl font-bold text-blue-500">Edit Product</h1>
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
                <button className="px-3 py-2 rounded bg-indigo-300 focus:outline-none text-indigo-900 hover:bg-indigo-500 focus:bg-indigo-500 w-1/2" onClick={updateProduct} disabled={loading}>
                    {loading ? 'Editing...' : 'Edit'}
                </button>
            </div>
        </div>
    );
};

export default EditProduct;
