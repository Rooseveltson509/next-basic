import React from 'react';
import Layaout from "../../components/layout";
import Head from "next/head"

const Items = () => {
    return (
   <>
        <Head>
            <title>liste des items</title>
        </Head>
        <Layaout>
            <h2>Liste des catégories</h2>
            <ul>
                <li>Culture</li>
                <li>Geographie</li>
                <li>Histoir</li>
                <li>Sociale</li>
            </ul>
        </Layaout> 
    </>
     );
}
 
export default Items;