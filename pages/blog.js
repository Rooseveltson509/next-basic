import React from 'react';
import Layaout from "../components/layout";
import axios from "axios"
import Link from "next/link"
import Head from "next/head"

const Blog = ({posts}) => {
   const styles = {
   main: {
      padding: 20,
      margin: 20,
      borderBottom: "1px solid #DDD"
   },
   img: {
      height: 200,
      width: 300
   }
    }

    return (
      <>
         <Head>
            <title>liste des articles</title>
         </Head>
         <Layaout>
            <h1>Cette page utilise getStaticProps</h1>
            {
               posts.map(post => (
                  <div style={styles.main} key={post._id}>
                     
                     <h1>{post.title}</h1>
                     <Link href="/blog/[id]" as={`/blog/${post._id}`} passHref >
                     <div>
                        <img src={post.pictures[0]} style={styles.img} />
                     </div>
                     </Link>
                  <div>{post.body}</div>
                  </div>
               ))
            }
         </Layaout> 
      </>
        
     );
}
export const getStaticProps = async (context) => {
   const url = "https://aqueous-meadow-07678.herokuapp.com";
   const {data} = await axios.get(`${url}/api/posts`);
   const posts = data.data
 
   return {
     props: {
       posts
     }
   }
 
 
 }
 export default Blog;