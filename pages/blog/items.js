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
            <h1>Items</h1>
        </Layaout> 
    </>
     );
}
 
export default Items;