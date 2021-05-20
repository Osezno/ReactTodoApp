import { useState, useEffect } from 'react';
import axios from 'axios';

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const useApi = (axiosParams, fetch) => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
  
    const fetchData = async (params) => {
        try {
            const result = await axios.request(params);
            if (result && result.data) setResponse(result.data);
        } catch (error) {
            setError(" Network Error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(axiosParams);
    }, [fetch]);
    return { response, error, loading };
};