import axios from 'axios';

axios.defaults.baseURL = 'https://user-control-back.onrender.com/api/';

const createUser = async (body) => {
    try {
        const res = await axios.post('users', body);
        return res.data.message;
    } catch (error) {
        const res = JSON.parse(error.request.response)
        throw new Error(res.message)
    }

};

export const API = { createUser }