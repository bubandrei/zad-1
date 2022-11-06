import React, { useEffect, useState } from "react";

const url = "https://randomuser.me/api/";
const FunctionalComponent = () => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        try {
            fetch(url)
                .then((res) => res.json())
                .then((json) => setData(JSON.stringify(json)))
                .then(() => setLoading(false))
        } catch (error) {
            console.log(error)
            setData('nothing')
        }
    }, [])
    return (
        <>
            {isLoading ? (<div>Loading</div>) : (<div>{data}</div>)}
        </>
    )
}
export default FunctionalComponent;