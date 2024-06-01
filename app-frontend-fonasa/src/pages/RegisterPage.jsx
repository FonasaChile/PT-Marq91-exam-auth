import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  const isFormValid = !errors.username && !errors.password;

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Regístrate</h1>
        <p className="text-lg mb-8">Crea una cuenta para comenzar</p>

        {
          registerErrors.map((error, i) => (
            <div key={i} className="bg-red-500 p-2">
              {error}
            </div>
          ))
        }
        <form className="max-w-md mx-auto" onSubmit={onSubmit}>
          <div className="mb-6">
            <input
              type="username"
              id="username"
              {...register("username", { required: true })}
              className={`w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500 ${
                errors.username ? "border-red-500" : ""
              }`}
              placeholder="Nombre de usuario"
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">
                Este campo es obligatorio
              </p>
            )}
          </div>
          <div className="mb-6">
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className={`w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500 ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Ingresa tu correo"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                Correo electrónico inválido
              </p>
            )}
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              className={`w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500 ${
                errors.password ? 'border-red-500' : ''
              }`}
              placeholder="Ingresa tu contraseña"
            />
            {errors.password?.message && (
              <p className="text-red-500">{errors.password?.message}</p>
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
          Ya tienes una cuenta? <Link to="/login" className='text-sky-500'>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
