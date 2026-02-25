import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import UsersList from "./pages/UsersList"
import UserDetails from "./pages/UserDetails"
import { Route, Routes } from "react-router-dom"



const App = () => {

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Harry', email: 'harry@example.com' },
    { id: 4, name: 'David', email: 'david@example.com' },
    { id: 5, name: 'Musk', email: 'musk@example.com' },
    { id: 6, name: 'Aline', email: 'aline@example.com' },
  ];

  return (

    <div>

      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<UsersList users={users}  />} />
        <Route path="/userdetails/:id" element={<UserDetails users={users}   />} />

      </Routes>

    </div>
  );
};

export default App