import axios from 'axios';

export const baseURL = 'http://192.168.1.4:8000'
let headers = {};
const axiosIns = axios.create({
    baseURL: 'http://infc.server:8000',
    headers,
});

axiosIns.interceptors.request.use(

    async (config) => {
        const access = localStorage.getItem("infc_access");
        if (access) {
            config.headers.Authorization = `Bearer ${access}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axiosIns.interceptors.response.use(
    (response) =>
        new Promise((resolve, reject) => {
            resolve(response);
        }),
    (error) => {
        if (!error.response) {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
        if (error.response.status === 401) {
            console.log("401");
        } else {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
    },
);

export default axiosIns;