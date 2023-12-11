import { useState} from 'react';
import axios from 'axios';

const usePostRequest = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (body) => {
        try {
            setData(null);
            setError(null);
            setLoading(true);
            const response = await axios.post(url, body);
            setData(response.data);
        } catch (err) {
            setError(err);
            setData(null);
        } finally {
            setLoading(false);
        }
    };
    return {data, loading, error, postData};
};
export default usePostRequest;
