import { useState, useEffect } from "react";

type Props = {
    apiUrl: string;
}

export const Question = ({ apiUrl }: Props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError('');
            try {
                const response = await fetch(apiUrl, {
                    cache: 'no-store',
                });
                if(!response.ok) {
                    throw new Error('Response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error: any) {
                setError('Error fetching data: ' + error.message);
            } finally {
                setLoading(false);
                console.log('Fetching from', apiUrl);
            }  
        }
        fetchData();
    }, [apiUrl])
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return(
        <div></div>
    );
}
