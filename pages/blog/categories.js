import React from 'react';
import Layaout from '../../components/layout';
import Head from "next/head"

const Categories = () => {
    return ( 
    <>
        <Head>
            <title>liste des catégories</title>
        </Head>
        <Layaout>
            <h1>Catégories</h1>
        </Layaout> 
    </>
    
     );
}
 
export default Categories;