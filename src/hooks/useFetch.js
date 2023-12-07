import { useState, useEffect } from 'react';
import axios from "axios";

const useFetch = (url, email, password) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true);
        axios
            .post(url, {
                email: email,
                password: password
            })
            .then((response) => {
                setData(response.data);
            }).catch((err) => {
                setError(err)
        }).finally(() => {
            setLoading(false)
        })
    }, [url, email, password]);
    return { data, loading, error }
}
export default useFetch;