
import { useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate();

  return (

    <div>

      <h1 className="bg-blue-800 text-center text-white m-10 text-2xl font-bold"> Welcome To UserHub</h1>
      <p className="m-5 text-xl font-bold">Its a simple  Multi-Page React Application with Routing,navigation between pages, parameterized routes, and basic UI elements for a smooth user experience..</p>
      <button onClick={() => navigate("/about")} className="bg-blue-900 text-white  rounded-xl m-10 font-bold text-2xl p-5 hover:bg-blue-400 cursor-pointer " >About</button>

      <button onClick={() => navigate("/users")} className="bg-blue-900 text-white  rounded-xl m-10 font-bold text-2xl p-5"    >Users</button>

    </div>
  )
}

export default Home