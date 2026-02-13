import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    const result = checkLogin(email, password);
    if (!result.success) {
      alert(result.message);
      return;
    }

    alert(`Welcome back, ${result.user.firstName}!`);
    navigate("/");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <p className="text-sm text-gray-500 mb-10">
        Home / <span className="text-black">Account</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="border-gray-300 border-[1px] p-6 h-fit">
          <h2 className="text-3xl font-light mb-2">New Customer</h2>
          <p className="text-gray-500 mb-6">Register Account</p>
          <p className="text-gray-500 leading-relaxed mb-10">
            By creating an account you will be able to shop faster, be up to
            date on an order&apos;s status, and keep track of the orders you
            have previously made.
          </p>
          <Link
            to="/register"
            className="inline-block bg-black text-white px-10 py-3 hover:bg-gray-800 transition"
          >
            CONTINUE
          </Link>
        </div>

        <div className="border-gray-300 border-[1px] p-6">
          <h2 className="text-3xl font-light mb-2">Returning Customer</h2>
          <p className="text-gray-500 mb-3">I am a returning customer</p>

          <div className="">
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              className="w-full border-gray-300 border-[1px] px-4 py-2 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              className="w-full border-gray-300 border-[1px] px-4 py-2 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <p className="text-sm text-gray-500 hover:text-black">
            Forgot your password?
          </p>

          <div className="flex items-center gap-4 mt-4">
            <button
              className="bg-black text-white px-10 py-3 hover:bg-gray-800 transition"
              onClick={handleLogin}
            >
              SIGN IN
            </button>

            <Link to="/" className="text-sm text-gray-500 hover:text-black">
              or Return to Store
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
