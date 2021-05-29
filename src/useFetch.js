import { useState, useEffect } from 'react';

const useFetch = (url) => {
    let [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url)
            .then(response => {
                setIsPending(false);
                if (!response.ok) {
                    throw Error('could not fetch the data from that resource');
                }
                response.json()
                    .then(data => {
                        setData(data);
                        setError(null);
                    });
            }
            ).catch(err => setError(err.message));
    }, [url]);
    return { data, isPending, error };
}
export default useFetch;