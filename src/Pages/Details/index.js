import { useLocation } from "react-router-dom";
import getMovieDetails from "../../apis/movies";
import { useEffect, useState } from "react";
const Details = () => {
    const [storeData, setStoreData] = useState({});
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const paramValue = queryParams.get("q");
    console.log({ storeData });

    useEffect(() => {
        const fun = async () => {
            const res = await getMovieDetails(paramValue);
            console.log({ res });
            setStoreData(res);
        };
        fun();
    }, [setStoreData]);

    return (
        <div>
            {paramValue}
            <h1>{storeData?.Title}</h1>
            <span>{storeData?.Year}</span>
        </div>
    );
};
export default Details;
