import { useState } from "react"
import { Form, Navigate} from "react-router-dom"
import useStore  from "../store/store.ts"
import Home from "./home.tsx"

function Login() {
  const{gohome,setgohome}=useStore()
const loginval=()=>{
  setgohome(true)}

  if(gohome){
 return  <Navigate to="/home"></Navigate>

}
  return (
   
    <div className='flex flex-row   items-center gap-x-2'>
        <div className='  mr-60  h-800 text-center'>
    <Form  method="post"  className='h-500 text-center'>
    <h1 className='text-5xl mb-20 mt-10 font-bold '>Welcome back!</h1>
        <label htmlFor='name' className='mb-5 text-xl'>Username</label><br></br>
        <input type='text' id="name"   name="name" placeholder='Enter your name'  className='mb-12 mt-3 w-96 p-2 border-2 rounded-xl border-black'/><br></br>
        <label htmlFor='email' className='text-xl'>Email</label><br></br>
        <input type='email' name="email" id="email" placeholder='Enter your email'className='mb-10 mt-3 w-96 p-2 border-2 rounded-xl border-black'/><br></br>
      <button type="button"  onClick= {loginval} className='mb-10 w-96  p-2 border-2 rounded-xl border-black bg-black text-white text-lg' >Login</button>
        
        </Form>
        <div className='flex flex-row text-center'>
        <div className="border-t-2 border-black w-1/3  my-4 opacity-50" ></div>
        <p>or continue with</p>
        <div className="border-t-2 border-black w-1/3  my-4 opacity-50" ></div>
        </div>
        <div className='flex flex-row gap-5 justify-center mt-3'>
            <img src='/google icon.jpg' className='rounded-full h-9 w-9'></img>
            <img src='/appleicon.jpg' className='rounded-full h-9 w-9'></img>
            <img src='/facebookicon.jpg' className='rounded-full h-9 w-9 '></img>
        </div>
      </div>
        
        <img src='/bookslogin.jpg' className='h-1/6 w-7/12 ml-5 mt-0 rounded-lg'></img>
    </div>
   

  )}





export default Login
