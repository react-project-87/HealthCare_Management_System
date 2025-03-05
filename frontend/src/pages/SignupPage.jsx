import { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
//   const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient"); // Default role: Patient
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Fake registration - add user to context users array
    // login(username, password, role);
    
    alert("Signup successful! Redirecting...");
    
    // Redirect to dashboard based on role
    navigate(`/${role}-dashboard`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSignUp} className="bg-white p-6 rounded shadow-md w-80">
        <input
          type="text"
          placeholder="Username"
          className="border p-2 mb-2 w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select
          className="border p-2 mb-2 w-full"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 w-full rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
