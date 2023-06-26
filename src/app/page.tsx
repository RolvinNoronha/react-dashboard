"use client"

import Form from "../components/Form";

const Home = () => {

  return (
    <div className="h-screen flex flex-row max-[1400px]:flex-col">
      <div className="flex max-[1400px]:block max-[1400px]:w-full max-[1400px]:h-16 max-[1400px]:p-16 justify-center items-center bg-black w-2/6 h-full">
        <h1 className="text-6xl font-semibold font-Mont text-white">Board.</h1>
      </div>
      <div className="flex-1 flex justify-center items-center bg-slate-200">
        <Form /> 
      </div>
    </div>
  )
}

export default Home;