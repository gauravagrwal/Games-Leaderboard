import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function App() {
    const { data, error, isLoading } = useSWR('https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopSellingGamesbb1c49e.json', fetcher);
    console.info(data);

    if (error)
        return (
            <div>failed to load</div>
        );
    if (isLoading)
        return (
            <div>loading...</div>
        );

    return (
        <>
        </>
    );
}
