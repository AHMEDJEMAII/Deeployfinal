import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/Actions/userActions";
import companyLogo from "../assets/clients/client-8.png";
import espritNetwork from "../assets/logo-network.png";

export function NavbarCompany() {
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
		// Rediriger vers la page de connexion après la déconnexion
		history.push("/login");
	};

	return (
		<>
			{/* ======= Header ======= */}
			<header id="header" className="fixed-top bg-black ">
				<div className="container d-flex align-items-center">
					<h1 className="logo me-auto">
						<NavLink to="/" className="nav-link">
							<img src={espritNetwork} alt="tes" className="mx-3" />
							Esprit Network
						</NavLink>
					</h1>
					<nav id="navbar" className="navbar ">
						<ul>
							<li>
								<NavLink to="/" className="nav-link scrollto ">
									Acceuil
								</NavLink>
							</li>
							<li>
								<NavLink className="nav-link scrollto" to="/evalution">
									Évaluation
								</NavLink>
							</li>
							<li className="dropdown">
								<NavLink>
									<span> Offres</span> <i className="bi bi-chevron-down" />
								</NavLink>
								<ul>
									<li>
										<NavLink to="/ajouter-offre">Publier </NavLink>
									</li>
									<li>
										<NavLink to="/mesoffre">Lister </NavLink>
									</li>
									<li>
										<NavLink to="/mesarchives">Archives des Offres </NavLink>
									</li>
								</ul>
							</li>
							<li>
								<NavLink className="nav-link scrollto" to="/calendrier">
									Calendrier
								</NavLink>
							</li>
							<li>
								<NavLink className="nav-link scrollto" to="/condidates">
									ShortLister
								</NavLink>
							</li>
							<li>
								<NavLink className="nav-link scrollto" to="/short">
									Collections
								</NavLink>
							</li>
							<li className="nav-item dropdown pe-3">
								<a
									className="nav-link nav-profile d-flex align-items-center pe-0"
									href="#"
									data-bs-toggle="dropdown"
								>
									<img
										src={companyLogo}
										alt="Profile"
										className="rounded-circle"
									/>
									<span className="nav-link disabled text-white d-flex align-items-center">
										<i className="bi bi-person-circle me-1"></i>
										{userInfo && userInfo.name}
									</span>
								</a>
								<ul>
								<li className="nav-item">
  <Link className="nav-link" to="/userprofil">
    <i className="bi bi-person" />
    <span>Mon Profil</span>
  </Link>
</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<NavLink
											className="dropdown-item d-flex align-items-center"
											href="#"
											onClick={logoutHandler}
										>
											<i className="bi bi-box-arrow-right" />
											<span>Déconnecter</span>
										</NavLink>
									</li>
								</ul>
							</li>{" "}
						</ul>
						<i className="bi bi-list mobile-nav-toggle" />
					</nav>
					{/* .navbar */}
				</div>
			</header>
			{/* End Header */}
		</>
	);
}
