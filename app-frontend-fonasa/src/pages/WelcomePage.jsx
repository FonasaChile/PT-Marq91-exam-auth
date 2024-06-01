import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // logout();
    navigate('/');
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="p-4 text-center">
        <h1 className="text-4xl font-bold mb-4">¡Bienvenido a la Plataforma!</h1>
        <p className="text-lg mb-8">Perfil de Usuario</p>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md absolute top-4 right-4"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;

