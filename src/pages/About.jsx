
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-extrabold mb-5">About UserHub</h1>

      <p className="text-lg mb-4">
        UserHub is a simple multi-page React application built to demonstrate
        routing, navigation, and mock arrays.
      </p>


      <button
        onClick={() => navigate("/")}
        className="bg-blue-900 text-white px-6 py-3 rounded-xl text-xl hover:bg-blue-500"
      >Back to Home</button>
    </div>
  );
};

export default About;