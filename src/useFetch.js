import { useState, useEffect } from 'react';

const useFetch = (url) => {
    let [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
                .then(response => {
                    if (!response.ok) {
                        throw Error('could not fetch the data from that resource');
                    }
                    response.json()
                        .then(data => {
                            setData(data);
                            setError(null);
                            setIsPending(false);
                        });
                }
                ).catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setError(err.message);
                        setIsPending(false);
                    }
                });
        }, 1000);
        return () => abortController.abort();
    }, [url]);
    return { data, isPending, error };
}
export default useFetch;