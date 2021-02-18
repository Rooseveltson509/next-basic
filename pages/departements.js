import React from 'react';
import Layout from '../components/layout';
import axios from "axios"
import Link from "next/link"
import Head from "next/head"

const Departements = ({data}) => {
    const styles = {
        padding: 10,
        margin: 10,
        borderBottom: "1px solid #DDD"
      }

    return (
    <>
       <Head>
            <title>liste des departements</title>
        </Head>
      <Layout>
        <h1>Cette page utilise getInitialProps</h1>
          {
              data.map(departement => (
                <div style={styles}  key={departement.code}>
                  <h1>Département: {departement.nom}</h1>
                  <div>code du département: {departement.code}</div>
                  <div>code de la région: {departement.codeRegion}</div>
                </div>
              ))
            }
      </Layout>
    </>

 );
}
export const getStaticProps = async() => {
  const {data} = await axios.get(`${process.env.API_KEYSERVICE}/departements`)
  return {
    props: {
      data
    }
  }  
}

/* Departements.getInitialProps = async (context) => {
    const {data} = await axios.get(`${process.env.API_KEYSERVICE}/departements`)
  
    return {data}  
  
  } */
 
export default Departements;