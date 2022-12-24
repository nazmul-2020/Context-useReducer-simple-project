import React, { useEffect, useState } from 'react';
import { useProduct } from './context/ProductProvider';

const Home = () => {
    const { data } = useProduct();

    console.log(data)

    return (
        <div>
            <h1>Home</h1>
            <h1>Data: {data.length}</h1>
        </div>
    );
};

export default Home;