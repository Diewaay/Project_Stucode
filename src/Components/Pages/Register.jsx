import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <Link to="/" className="text-blue-500 text-2xl mb-4">
          &lt;
        </Link>
        <h2 className="text-2xl font-bold mb-6 text-center">DAFTAR</h2>
        <button className="w-full flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded mb-4">
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            alt="Google"
            className="mr-2"
          />
          Lanjutkan dengan Google
        </button>
        <button className="w-full flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded mb-4">
          <img
            src="https://img.icons8.com/ios-filled/16/ffffff/facebook-new.png"
            alt="Facebook"
            className="mr-2"
          />
          Lanjutkan dengan Facebook
        </button>
        <div className="flex items-center justify-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500">ATAU</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <form>
          <div className="mb-4 flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2" htmlFor="firstName">
                Nama Depan
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2" htmlFor="lastName">
                Nama Belakang
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded"
          >
            Mendaftar
          </button>
        </form>
        <div className="mt-4 text-center">
          <span>Sudah punya akun? </span>
          <Link to="/Login" className="text-blue-500">
            Masuk
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
