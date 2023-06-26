import { Props } from "./Form"



const Register = ({ register, setRegister} : Props) => {


    return (
        <>
            <h1 className="mr-auto mb-2 text-2xl font-medium">Register</h1>
            <form className="bg-white p-4 rounded-xl flex flex-col w-full">
                <label className="mb-2" htmlFor="name">Name: </label>
                <input 
                    className="bg-slate-300 mb-4 rounded-lg p-2 focus:outline-none" 
                    type="text" 
                    id="name" 
                />
                <label className="mb-2" htmlFor="email">Email: </label>
                <input 
                    className="bg-slate-300 mb-2 rounded-lg p-2 focus:outline-none" 
                    type="email" 
                    id="email" 
                />
                <label className="mb-2" htmlFor="rpassword">Password: </label>
                <input 
                    className="bg-slate-300 mb-2 rounded-lg p-2 focus:outline-none" 
                    type="password" 
                    id="rpassword" 
                />
                <button 
                    className="w-full py-2 rounded-lg mb-2 mt-2 bg-black hover:bg-slate-600 transition-all duration-200 ease-in text-white">Register</button>
                <p className="mx-auto">Already have an account? <a onClick={() => setRegister(!register)} className="text-blue-400" href="#">Sign In</a></p>
            </form>
        </>
    )
}

export default Register;