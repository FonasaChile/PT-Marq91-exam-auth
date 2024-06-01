import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, isAuthenticated, errors: signinErrors } = useAuth()

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/welcome");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit((data) => {
    signin(data)
  });

  const isFormValid = !errors.username && !errors.password;

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Inicio de Sesión</h1>
        <p className="text-lg mb-8">Ingresa a tu cuenta</p>
        
        {
          signinErrors.map((error, i) => (
            <div key={i} className="bg-red-500 p-2 my-2">
              {error}
            </div>
          ))
        }
        <form className="max-w-md mx-auto" onSubmit={onSubmit}>
          <div className="mb-6">
            <input
              type="username"
              id="username"
              {...register("username", {required: true})}
              className={`w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500 ${
                errors.username ? 'border-red-500' : ''
              }`}
              placeholder="Nombre de usuario"
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">Este campo es obligatorio</p>
            )}
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              {...register("password", {required: true})}
              className={`w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500 ${
                errors.password ? 'border-red-500' : ''
              }`}
              placeholder="Ingresa tu contraseña"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                La contraseña debe tener al menos 6 caracteres
              </p>
            )}
          </div>
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ${
              isFormValid ? '' : 'opacity-50 cursor-not-allowed'
            }`}
            disabled={!isFormValid}
          >
            Sign In
          </button>
        </form>

        <p className='flex gap-x-2 text-gray-300 text-sm justify-center mt-8'>
          No tienes una cuenta? <Link to="/register" className='text-sky-500'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
