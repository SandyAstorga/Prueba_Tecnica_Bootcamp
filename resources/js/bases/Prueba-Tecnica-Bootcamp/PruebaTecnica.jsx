import React from "react";
import { useState, useEffect } from "react";
import { dataApi } from "./api";

const PruebaTecnica = () => {
    const [datos, setDatos] = useState('');
    const [isError, setIsError] = useState();

    useEffect(() => {
        dataApi()
        .then(setDatos)
        .catch(error => setIsError(error.message));
    }, []);
  
    return (
    <>
        {datos ? (
                <ul>
                    {datos.map((post) => (
                        <li key={post.id}>
                            <li>UserId: {post.userId}</li>
                            <li>Title: {post.title}</li>
                            <li>Post: {post.body}</li>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Cargando datos...</p>
            )}        
    </>
    );
};

export default PruebaTecnica;
