import Form from "../components/Form";

const Home = () => {

  return (
    <div className="h-screen flex flex-row">
      <div className="flex justify-center items-center bg-black w-2/6 h-full">
        <h1 className="text-6xl font-semibold font-Mont text-white">Board.</h1>
      </div>
      <div className="flex-1 flex justify-center items-center bg-slate-200">
        <Form /> 
      </div>
    </div>
  )
}

export default Home;