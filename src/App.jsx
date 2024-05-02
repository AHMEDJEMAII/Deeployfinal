import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Home/Navbar";

import { Footer } from "./Home/Footer";
import { Home } from "./Home/Home.jsx";

import RegisterCompany from "./Users/Register/RegisterCompany.jsx";

import EmailVerify from "./Users/EmailVerify/EmailVerify.jsx";
import PasswordReset from "./Users/ForgetPassword/PasswordReset.jsx";
import ForgetPassword from "./Users/ForgetPassword/ForgetPassword.jsx";
import { Login } from "./Users/login/login.jsx";
import PrivateRouter from './PrivateRouter';
import Register from "./Users/Register/Register.jsx";
import RegisterStudent from "./Users/Register/RegisterStudent.jsx";
import RegisterAlumni from "./Users/Register/RegisterAlumni.jsx";
import RegisterTeacher from "./Users/Register/RegisterTeacher.jsx";
import RegisterEsprit from "./Users/Register/RegisterEsprit.jsx";
import UserProfileEdit from "./Users/Profil/UserProfileEdit.jsx";



function App() {
	return (
		<Router>
			<div className="d-flex flex-column min-vh-100">
				<Navbar />
				<div className="flex-grow-1">
					<Routes>
						<Route path="/" element={<Home />} />
						
						<Route path="/register" element={<Register />} />
							<Route path="/login" element={<Login />} />
							<Route path="/RegisterStudent" element={<RegisterStudent />} />
							<Route path="/RegisterComapany" element={<RegisterCompany />} />
							<Route path="/RegisterAlumni" element={<RegisterAlumni />} />
							<Route path="/RegisterTeacherr" element={<RegisterTeacher />} />
							<Route path="/RegisterEspr" element={<RegisterEsprit />} />
							<Route path="/activate/:token" element={<EmailVerify />} />
							<Route path="/PasswordReset/:token" element={<PasswordReset />} />
							<Route path="/index" element={<ForgetPassword />} />
							<Route
								path="/UserProfil"
								element={
									<PrivateRouter
										allowedRoles={[
											"ADMIN",
											"student",
											"alumni",
											"esprit_staff",
											"teacher",
											"company",
										]}
									>
										<UserProfileEdit />
									</PrivateRouter>
								}
							/>
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
