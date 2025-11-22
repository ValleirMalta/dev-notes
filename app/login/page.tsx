export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center p-10 bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
          <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>
          <form className="flex flex-col gap-4">
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      <div className="flex items-center justify-center bg-blue-600 text-white p-10">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold mb-4">Dev Notes</h2>
          <p className="text-lg opacity-90">
            Um lugar para devs compartilharem ideias, aprenderem juntos e criarem posts cheios de vida. Mostre seu código, sua jornada e inspire outros pelo caminho.
          </p>
        </div>
      </div>

    </div>
  );
}
