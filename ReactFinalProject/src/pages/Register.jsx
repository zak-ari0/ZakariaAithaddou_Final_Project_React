import { useState } from "react";
import { addUser } from "../constents/users";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreate = () => {
    if (!firstName || !lastName || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    const success = addUser(email, firstName, lastName, password);
    if (!success) {
      alert("Email already exists!");
      return;
    }

    alert("Account created successfully!");
    navigate("/account");
  };

  return (
    <div className="max-w-5xl mx-auto ml-40 px-6 py-16">
      <p className="text-sm text-gray-500 mb-10">
        Home / <span className="text-black">Create Account</span>
      </p>

      <h1 className="text-5xl font-light mb-4">Create Account</h1>
      <p className="text-lg mb-10">Your Personal Details</p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm mb-2">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className="w-full border border-gray-300 px-4 py-2 outline-none"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border border-gray-300 px-4 py-2 outline-none"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-2 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-2 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-6 mt-8">
          <button
            className="bg-black text-white px-12 py-3 hover:bg-gray-800 transition flex items-center gap-2"
            onClick={handleCreate}
          >
            CREATE
          </button>

          <Link to="/" className="text-gray-500 hover:text-black">
            or Return to Store
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
