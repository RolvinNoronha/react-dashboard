"use client"

import { Props } from "./Form"
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


const SignIn = ({ register, setRegister } : Props) => {

    const handleSignIn = async () => {
        await signIn("google", {callbackUrl: "/dashboard"});
    }

        return (
        <>
            <h1 className="mr-auto mb-2 text-2xl font-medium">Sign In</h1>
            <p className="mr-auto mb-2">Sign in to your account</p>
            <div className="flex mb-4 flex-row justify-between items-center w-full">
                <button 
                    onClick={handleSignIn}
                    className="flex bg-white p-2 rounded-lg hover:bg-slate-300 transition-all duration-200 ease-in justify-center items-center flex-row"><FcGoogle className="mr-1" />Sign In with Google</button>
                <button className="flex bg-white p-2 rounded-lg hover:bg-slate-300 transition-all duration-200 ease-in justify-center items-center flex-row"><BsApple  className="mr-1" />Sign In with Apple</button>
            </div>
            <form className="bg-white p-4 rounded-xl flex flex-col w-full">
                <label className="mb-2" htmlFor="email">Email Address</label>
                <input 
                    className="bg-slate-300 mb-4 rounded-lg p-2 focus:outline-none" 
                    type="text" 
                    id="email" 
                    
                />
                <label className="mb-2" htmlFor="password">Password</label>
                <input 
                    className="bg-slate-300 mb-2 rounded-lg p-2 focus:outline-none" 
                    type="password" 
                    id="password" 
                    
                />
                <p className="text-blue-400 mb-2">Forgot Password?</p>
                <button type="submit" className="w-full py-2 rounded-lg mb-2 bg-black hover:bg-slate-600 transition-all duration-200 ease-in text-white">Sign In</button>
                <p className="mx-auto">Don't have an account? <a onClick={() => setRegister(!register)} className="text-blue-400" href="#">Register here</a></p>
            </form>
        </>
    )
}

export default SignIn