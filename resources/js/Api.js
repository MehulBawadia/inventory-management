import axios from 'axios';

const BASE_URL = "http://localhost:8000/api";

export default {
    getAllProducts: () => {
        return axios.get(`${BASE_URL}/products`);
    },

    getSingleProduct: (id) => {
        return axios.get(`${BASE_URL}/products/${id}`);
    },

    updateProduct: (id, form) => {
        return axios.patch(`${BASE_URL}/products/${id}`, form);
    },

    addProduct: (form) => {
        return axios.post(`${BASE_URL}/products`, form);
    },

    deleteProduct: (id) => {
        return axios.delete(`${BASE_URL}/products/${id}`);
    },
}
