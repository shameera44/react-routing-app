import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className=" flex  justify-between item-center bg-blue-900 text-white px-15 py-5 ">

      <div className=" text-3xl font-extrabold">User Hub</div>
      <div className="flex gap-8 font-bold text-xl">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </div>

    </div>
  )
}

export default Navbar