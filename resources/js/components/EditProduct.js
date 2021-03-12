import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Api from '../Api';
import AppContainer from './AppContainer';

const EditProduct = () => {
    const { id } = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [submitted, setSubmitted] = useState(false);

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
            setSubmitted(true);
        } catch {
            alert('Failed to edit post');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (submitted) {
            history.push('/');
        }
    }, [submitted])

    return (
        <AppContainer  pageTitle="Edit Product" pageLink="/" pageLinkText="All Products">
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
        </AppContainer>
    );
};

export default EditProduct;
