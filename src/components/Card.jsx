import { useNavigate } from "react-router-dom"

const Card = ({ user }) => {
    const navigate = useNavigate();
    
    return (
        <div className=' bg-gray-100 p-3 shadow-2xl rounded-2xl m-5 border-2 border-gray-400  '>
            <h1 className="font-extrabold text-2xl m-5">Name : {user.name}</h1>
            <button onClick={() => { navigate(`/userdetails/${user.id}`) }} className="bg-blue-900 text-white  rounded-xl m-5 font-bold text-2xl p-3 hover:bg-blue-400 cursor-pointer " >More Details</button>
        </div>
    )
}

export default Card