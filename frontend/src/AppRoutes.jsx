import { Routes, Route, Navigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import AdminDashboard from "./pages/AdminDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";

const AppRoutes = () => {
	// const { user } = useContext(AuthContext);

	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/auth/login" element={<LoginPage />} />
			<Route path="/auth/signup" element={<SignUpPage />} />

			{/* Protected Routes Based on Role */}
			<Route path="/dashboard/doctor" element={<DoctorDashboard />} />
			<Route path="/dashboard/patient" element={<PatientDashboard />} />
			<Route path="/dashboard/admin" element={<AdminDashboard />} />

			{/* Redirect unknown routes to landing page */}
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default AppRoutes;
