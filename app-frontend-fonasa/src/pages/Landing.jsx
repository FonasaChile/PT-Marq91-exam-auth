import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-6xl font-bold mb-4">Fonasa Nueva Plataforma</h1>
        <p className="text-lg mb-8">Inicia sesión o regístrate para comenzar</p>
        <div className="space-x-4">
          <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            SignIn
          </Link>
          <Link to="/register" className="bg-green-400 hover:bg-green-600 text-white px-4 py-2 rounded-md">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
