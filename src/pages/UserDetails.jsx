
import { useParams, useNavigate } from "react-router-dom";

const UserDetails = ({ users }) => {

  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find(u => u.id === Number(id));

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (

    <div className=" m-5 font-bold text-2xl p-3 hover:bg-blue-200 ">

      <h1 className="bg-blue-800 text-center text-white ">User Details</h1>
      <h2>Id:{user.id}</h2>
      <p>Name:{user.name}</p>
      <p>Email:{user.email}</p>

      <button onClick={() => navigate("/users")} className="bg-blue-900 text-white  rounded-xl m-5 font-bold text-2xl p-3 hover:bg-blue-400 cursor-pointer " >
        Go Back
      </button>
    </div>
  );
}

export default UserDetails;