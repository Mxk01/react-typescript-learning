"use client"
import {useState}  from 'react'

type PostProps = {
    id:number,
    title:string,
    rating?:number,
}
// meaning we can use this to validate our props (like get
// an id of type number,or title of type string )
function Post({id,title,rating}:PostProps) {
    // means this can be string or null 
    const [someTitle,setThatTitle] = useState<string | null>("");

    let someFunc = (a:string)=>{
        setThatTitle(a)
        }
    let doSomething = (e:React.InputHTMLAttributes<HTMLInputElement>) => {
      console.log(e.formTarget?.valueOf)
    }
  return (
    <div>
        <input onChange={(e)=>{doSomething(e)}}/>
        <h1>{title}</h1>
        {/* <button onClick={()=>someFunc("Swagger")}></button> */}
    </div>
  )
}

export default Post