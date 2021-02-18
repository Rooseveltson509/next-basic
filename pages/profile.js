import React, { useEffect, useState } from 'react';
import Layout from "../components/layout";
import axios from "axios"
import useSwr from "swr"
import Head from "next/head"

const Profile = () => {

  const fetcher = url => axios.get(url).then(res => res.data)
  const {data, error} = useSwr("https://jsonplaceholder.typicode.com/users", fetcher)

  if(!data)return <h1>chargement ...</h1>
  if(error)return <h1>une erreur est survenue</h1>

  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: "1px solid #DDD"
  }

    return (
    <>
        <Head>
            <title>liste des utilisateurs</title>
        </Head>
        <Layout>
          <h1>Cette page utilise le rendu coté client</h1>
          {
            data && data.map(user => (
              <div style={styles} key={user.id}>
                <h1>{user.name}</h1>
                <div>Email: {user.email}</div>
                <div>Téléphone: {user.phone}</div>
              </div>
            ))
          }
        </Layout>  
    </>
       
     );
}
 
export default Profile;