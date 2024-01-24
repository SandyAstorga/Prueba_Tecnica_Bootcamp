import { React, useEffect, useState } from 'react'

const handleFetchRandomNumber = async () => {
    const url = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new';
    const response = await fetch(url);
    const data = await response.text();
    // console.log(data)
    throw new Error('500 internal server error');
    return +data
    //Convertir el tipo de dato a numero de manera rapida +data
}

const RandomNumber = () => {
    const [number, setNumber] = useState(0);
    const [isLoading, setisLoading] = useState(true);
    const [isError, setIsError] = useState();

    useEffect(() => {
       handleFetchRandomNumber()
    //    .then(num => setNumber(num));
    .then(setNumber)
    .catch(error => setIsError(error.message));
    }, []);

    useEffect(() => {
        if(number) setisLoading(false);
    }, [number]);

    useEffect(() => {
        if(isError) setisLoading(false);
    }, [isError]);
    
    
    return (
        <>  
            {
                isLoading ? <h2>Loading...</h2> :
                <h2>Random Number: {number}</h2>
            }
            {
                !isLoading && isError && <h3>{isError}</h3>
            }
            <hr />
        </>
    )
}

export default RandomNumber
