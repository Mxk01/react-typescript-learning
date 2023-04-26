import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Post from './dashboard/Post';


type PostProps = {
id:number,
title:string,
rating:number,
 /* in case we don't know if this property exists in the 
 result or not
 */
someStuff?:string
 
}[]; // array of objects 

// this function will return a promise with the structure
// of PostProps object  E.g  {id:0,title:'some shit',rating:0}
async function getData():Promise<PostProps> {
 const res =  await fetch('https://dummyjson.com/products')
 if(!res.ok){
  throw new Error("failed to fetch");
 }
 else {
  return res.json();
 }

}
export default async function Home() {
  let data = await getData();
  return (
    <main className={styles.main}>
        <Link href="/">
          {
            // using this object to validate data
            data.map((post)=>(
             <Post id={post.id} title={post.title}/>
            ))
          }
        </Link>
    </main>
  )
}
