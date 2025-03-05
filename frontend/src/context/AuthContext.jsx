import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const users = [
  { username: "doctor1", password: "doc123", role: "doctor" },
  { username: "patient1", password: "pat123", role: "patient" },
  { username: "admin1", password: "admin123", role: "admin" },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (username, password) => {
    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      navigate(`/${foundUser.role}-dashboard`); // Redirect based on role
    } else {
      alert("Invalid credentials!");
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
