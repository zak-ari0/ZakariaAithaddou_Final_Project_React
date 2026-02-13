import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="max-w-5xl mx-auto ml-40 px-6 py-16">

      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-10">
        Home / <span className="text-black">Create Account</span>
      </p>

      {/* Title */}
      <h1 className="text-5xl font-light mb-4">Create Account</h1>
      <p className="text-lg mb-10">Your Personal Details</p>

      {/* Form */}
      <div className="space-y-6">

        <div>
          <label className="block text-sm mb-2">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className="w-full border border-gray-300 px-4 py-2 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border border-gray-300 px-4 py-2 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-2 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-2 outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6 mt-8">
          <button className="bg-black text-white px-12 py-3 hover:bg-gray-800 transition flex items-center gap-2">
            CREATE
          </button>

          <Link
            to="/"
            className="text-gray-500 hover:text-black"
          >
            or Return to Store
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
