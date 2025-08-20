import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fff] via-[#f8eaea] to-[#7A1F1F]/10 px-4">
      <div className="bg-white/90 rounded-3xl shadow-2xl p-10 max-w-md w-full text-center border-2 border-[#7A1F1F]/10">
        <div className="flex justify-center mb-6">
          <svg width="64" height="64" fill="none" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="32" fill="#7A1F1F" fillOpacity="0.08" />
            <path d="M32 18c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14-6.268-14-14-14zm0 25c-6.075 0-11-4.925-11-11s4.925-11 11-11 11 4.925 11 11-4.925 11-11 11zm-2-8h4v4h-4v-4zm0-10h4v8h-4v-8z" fill="#7A1F1F" />
          </svg>
        </div>
        <h1 className="text-5xl font-extrabold text-[#7A1F1F] mb-2 tracking-tight">404</h1>
        <p className="text-lg text-gray-700 mb-6 font-medium">¡Uy! No encontramos la página que buscas.<br />¿Quizá escribiste mal la dirección?</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-full font-semibold text-white bg-[#7A1F1F] shadow-lg hover:bg-[#5e1818] transition-colors duration-200"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
