import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { USER_LOGIN_SUCCESS } from "../Redux/Constants/UserContants";
import { useNavigate } from "react-router-dom";

export function Home() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		const emailFromParams = queryParams.get("email");
		const nameFromParams = queryParams.get("name");
		const secretFromParams = queryParams.get("secret");

		// Check if user data exists in localStorage
		const userData = localStorage.getItem("user"); // Utilisation de localStorage
		if (userData) {
			const { email, name, secret } = JSON.parse(userData);
			setUserDataAndRedirect(email, name, secret);
		} else if (emailFromParams && nameFromParams && secretFromParams) {
			localStorage.setItem(
				"user",
				JSON.stringify({
					email: emailFromParams,
					name: nameFromParams,
					secret: secretFromParams,
				})
			); // Utilisation de localStorage
			setUserDataAndRedirect(emailFromParams, nameFromParams, secretFromParams);
		}
	}, [dispatch, navigate]);

	const setUserDataAndRedirect = (email, name, secret) => {
		dispatch({ type: USER_LOGIN_SUCCESS, payload: { email, name, secret } });
		navigate("/");
	};
	return (
		<>
			<main id="main">
				{/* ======= Hero Section ======= */}
				<section id="hero" className="d-flex align-items-center">
					<div className="container">
						<div className="row">
							<div
								className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
								data-aos="fade-up"
								data-aos-delay={100}
							>
								<h1>Bienvenue sur Esprit Network</h1>
								<h2>connectez-vous à votre avenir avec Esprit Network</h2>
								<div className="d-flex justify-content-center justify-content-lg-start">
									<a href="#about" className="btn-get-started scrollto">
										Commencer
									</a>
								</div>
							</div>
							<div
								className="col-lg-6 order-1 order-lg-2 hero-img"
								data-aos="zoom-in"
								data-aos-delay={200}
							>
								<img
									src="../../assets/img/hero.png"
									className="img-fluid animated"
									alt
								/>
							</div>
						</div>
					</div>
				</section>
				{/* End Hero */}

				{/* ======= Clients Section ======= */}
				<section id="clients" className="clients section-bg">
					<div className="container">
						<div className="row" data-aos="zoom-in">
							<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
								<img
									src="assets/img/clients/Print-Logo.png"
									className="img-fluid"
									alt
								/>
							</div>
							<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
								<img
									src="assets/img/clients/TT.png"
									className="img-fluid"
									alt
								/>
							</div>
							<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
								<img
									src="assets/img/clients/STIA.png"
									className="img-fluid"
									alt
								/>
							</div>
							<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
								<img
									src="assets/img/clients/client-4.png"
									className="img-fluid"
									alt
								/>
							</div>
							<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
								<img
									src="assets/img/clients/client-5.png"
									className="img-fluid"
									alt
								/>
							</div>
							<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
								<img
									src="assets/img/clients/client-3.png"
									className="img-fluid"
									alt
								/>
							</div>
						</div>
					</div>
				</section>
				{/* End Cliens Section */}

				{/* ======= About Us Section ======= */}
				<section id="about" className="about">
					<div className="container" data-aos="fade-up">
						<div className="section-title">
							<h2>About Us</h2>
						</div>
						<div className="row content">
							<div className="col-lg-6">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
								<ul>
									<li>
										<i className="ri-check-double-line" /> Ullamco laboris nisi
										ut aliquip ex ea commodo consequat
									</li>
									<li>
										<i className="ri-check-double-line" /> Duis aute irure dolor
										in reprehenderit in voluptate velit
									</li>
									<li>
										<i className="ri-check-double-line" /> Ullamco laboris nisi
										ut aliquip ex ea commodo consequat
									</li>
								</ul>
							</div>
							<div className="col-lg-6 pt-4 pt-lg-0">
								<p>
									Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
									aute irure dolor in reprehenderit in voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. Excepteur sint
									occaecat cupidatat non proident, sunt in culpa qui officia
									deserunt mollit anim id est laborum.
								</p>
								<a href="#" className="btn-learn-more">
									Learn More
								</a>
							</div>
						</div>
					</div>
				</section>
				{/* End About Us Section */}
				{/* ======= Why Us Section ======= */}
				<section id="why-us" className="why-us section-bg">
					<div className="container-fluid" data-aos="fade-up">
						<div className="row">
							<div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
								<div className="content">
									<h3>
										Eum ipsam laborum deleniti{" "}
										<strong>velit pariatur architecto aut nihil</strong>
									</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Duis aute irure dolor in reprehenderit
									</p>
								</div>
								<div className="accordion-list">
									<ul>
										<li>
											<a
												data-bs-toggle="collapse"
												className="collapse"
												data-bs-target="#accordion-list-1"
											>
												<span>01</span> Non consectetur a erat nam at lectus
												urna duis?{" "}
												<i className="bx bx-chevron-down icon-show" />
												<i className="bx bx-chevron-up icon-close" />
											</a>
											<div
												id="accordion-list-1"
												className="collapse show"
												data-bs-parent=".accordion-list"
											>
												<p>
													Feugiat pretium nibh ipsum consequat. Tempus iaculis
													urna id volutpat lacus laoreet non curabitur gravida.
													Venenatis lectus magna fringilla urna porttitor
													rhoncus dolor purus non.
												</p>
											</div>
										</li>
										<li>
											<a
												data-bs-toggle="collapse"
												data-bs-target="#accordion-list-2"
												className="collapsed"
											>
												<span>02</span> Feugiat scelerisque varius morbi enim
												nunc? <i className="bx bx-chevron-down icon-show" />
												<i className="bx bx-chevron-up icon-close" />
											</a>
											<div
												id="accordion-list-2"
												className="collapse"
												data-bs-parent=".accordion-list"
											>
												<p>
													Dolor sit amet consectetur adipiscing elit
													pellentesque habitant morbi. Id interdum velit laoreet
													id donec ultrices. Fringilla phasellus faucibus
													scelerisque eleifend donec pretium. Est pellentesque
													elit ullamcorper dignissim. Mauris ultrices eros in
													cursus turpis massa tincidunt dui.
												</p>
											</div>
										</li>
										<li>
											<a
												data-bs-toggle="collapse"
												data-bs-target="#accordion-list-3"
												className="collapsed"
											>
												<span>03</span> Dolor sit amet consectetur adipiscing
												elit? <i className="bx bx-chevron-down icon-show" />
												<i className="bx bx-chevron-up icon-close" />
											</a>
											<div
												id="accordion-list-3"
												className="collapse"
												data-bs-parent=".accordion-list"
											>
												<p>
													Eleifend mi in nulla posuere sollicitudin aliquam
													ultrices sagittis orci. Faucibus pulvinar elementum
													integer enim. Sem nulla pharetra diam sit amet nisl
													suscipit. Rutrum tellus pellentesque eu tincidunt.
													Lectus urna duis convallis convallis tellus. Urna
													molestie at elementum eu facilisis sed odio morbi quis
												</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div
								className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
								style={{ backgroundImage: 'url("assets/img/esprit-unv.jpeg")' }}
								data-aos="zoom-in"
								data-aos-delay={150}
							>
								&nbsp;
							</div>
						</div>
					</div>
				</section>
				{/* End Why Us Section */}

				{/* ======= Team Section ======= */}
				<section id="team" className="team section-bg">
					<div className="container" data-aos="fade-up">
						<div className="section-title">
							<h2>PE Groupe</h2>
							<p>
								Magnam dolores commodi suscipit. Necessitatibus eius consequatur
								ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
								quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
								Quia fugiat sit in iste officiis commodi quidem hic quas.
							</p>
						</div>
						<div className="row">
							<div className="col-lg-6" data-aos="zoom-in" data-aos-delay={100}>
								<div className="member d-flex align-items-start">
									<div className="pic">
										<img
											src="assets/img/team/team-1.jpg"
											className="img-fluid"
											alt
										/>
									</div>
									<div className="member-info">
										<h4>Walter White</h4>
										<span>Chief Executive Officer</span>
										<p>
											Explicabo voluptatem mollitia et repellat qui dolorum
											quasi
										</p>
										<div className="social">
											<a href>
												<i className="ri-twitter-fill" />
											</a>
											<a href>
												<i className="ri-facebook-fill" />
											</a>
											<a href>
												<i className="ri-instagram-fill" />
											</a>
											<a href>
												{" "}
												<i className="ri-linkedin-box-fill" />{" "}
											</a>
										</div>
									</div>
								</div>
							</div>
							<div
								className="col-lg-6 mt-4 mt-lg-0"
								data-aos="zoom-in"
								data-aos-delay={200}
							>
								<div className="member d-flex align-items-start">
									<div className="pic">
										<img
											src="assets/img/team/team-2.jpg"
											className="img-fluid"
											alt
										/>
									</div>
									<div className="member-info">
										<h4>Sarah Jhonson</h4>
										<span>Product Manager</span>
										<p>
											Aut maiores voluptates amet et quis praesentium qui senda
											para
										</p>
										<div className="social">
											<a href>
												<i className="ri-twitter-fill" />
											</a>
											<a href>
												<i className="ri-facebook-fill" />
											</a>
											<a href>
												<i className="ri-instagram-fill" />
											</a>
											<a href>
												{" "}
												<i className="ri-linkedin-box-fill" />{" "}
											</a>
										</div>
									</div>
								</div>
							</div>
							<div
								className="col-lg-6 mt-4"
								data-aos="zoom-in"
								data-aos-delay={300}
							>
								<div className="member d-flex align-items-start">
									<div className="pic">
										<img
											src="assets/img/team/team-3.jpg"
											className="img-fluid"
											alt
										/>
									</div>
									<div className="member-info">
										<h4>William Anderson</h4>
										<span>CTO</span>
										<p>
											Quisquam facilis cum velit laborum corrupti fuga rerum
											quia
										</p>
										<div className="social">
											<a href>
												<i className="ri-twitter-fill" />
											</a>
											<a href>
												<i className="ri-facebook-fill" />
											</a>
											<a href>
												<i className="ri-instagram-fill" />
											</a>
											<a href>
												{" "}
												<i className="ri-linkedin-box-fill" />{" "}
											</a>
										</div>
									</div>
								</div>
							</div>
							<div
								className="col-lg-6 mt-4"
								data-aos="zoom-in"
								data-aos-delay={400}
							>
								<div className="member d-flex align-items-start">
									<div className="pic">
										<img
											src="assets/img/team/team-4.jpg"
											className="img-fluid"
											alt
										/>
									</div>
									<div className="member-info">
										<h4>Amanda Jepson</h4>
										<span>Accountant</span>
										<p>
											Dolorum tempora officiis odit laborum officiis et et
											accusamus
										</p>
										<div className="social">
											<a href>
												<i className="ri-twitter-fill" />
											</a>
											<a href>
												<i className="ri-facebook-fill" />
											</a>
											<a href>
												<i className="ri-instagram-fill" />
											</a>
											<a href>
												{" "}
												<i className="ri-linkedin-box-fill" />{" "}
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* End Team Section */}
				{/* ======= Pricing Section ======= */}
				<section id="pricing" className="pricing">
					<div className="container" data-aos="fade-up">
						<div className="section-title">
							<h2>Pricing</h2>
							<p>
								Magnam dolores commodi suscipit. Necessitatibus eius consequatur
								ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
								quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
								Quia fugiat sit in iste officiis commodi quidem hic quas.
							</p>
						</div>
						<div className="row">
							<div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
								<div className="box">
									<h3>Free Plan</h3>
									<h4>
										<sup>$</sup>0<span>per month</span>
									</h4>
									<ul>
										<li>
											<i className="bx bx-check" /> Quam adipiscing vitae proin
										</li>
										<li>
											<i className="bx bx-check" /> Nec feugiat nisl pretium
										</li>
										<li>
											<i className="bx bx-check" /> Nulla at volutpat diam
											uteera
										</li>
										<li className="na">
											<i className="bx bx-x" />{" "}
											<span>Pharetra massa massa ultricies</span>
										</li>
										<li className="na">
											<i className="bx bx-x" />{" "}
											<span>Massa ultricies mi quis hendrerit</span>
										</li>
									</ul>
									<a href="#" className="buy-btn">
										Get Started
									</a>
								</div>
							</div>
							<div
								className="col-lg-4 mt-4 mt-lg-0"
								data-aos="fade-up"
								data-aos-delay={200}
							>
								<div className="box featured">
									<h3>Business Plan</h3>
									<h4>
										<sup>$</sup>29<span>per month</span>
									</h4>
									<ul>
										<li>
											<i className="bx bx-check" /> Quam adipiscing vitae proin
										</li>
										<li>
											<i className="bx bx-check" /> Nec feugiat nisl pretium
										</li>
										<li>
											<i className="bx bx-check" /> Nulla at volutpat diam
											uteera
										</li>
										<li>
											<i className="bx bx-check" /> Pharetra massa massa
											ultricies
										</li>
										<li>
											<i className="bx bx-check" /> Massa ultricies mi quis
											hendrerit
										</li>
									</ul>
									<a href="#" className="buy-btn">
										Get Started
									</a>
								</div>
							</div>
							<div
								className="col-lg-4 mt-4 mt-lg-0"
								data-aos="fade-up"
								data-aos-delay={300}
							>
								<div className="box">
									<h3>Developer Plan</h3>
									<h4>
										<sup>$</sup>49<span>per month</span>
									</h4>
									<ul>
										<li>
											<i className="bx bx-check" /> Quam adipiscing vitae proin
										</li>
										<li>
											<i className="bx bx-check" /> Nec feugiat nisl pretium
										</li>
										<li>
											<i className="bx bx-check" /> Nulla at volutpat diam
											uteera
										</li>
										<li>
											<i className="bx bx-check" /> Pharetra massa massa
											ultricies
										</li>
										<li>
											<i className="bx bx-check" /> Massa ultricies mi quis
											hendrerit
										</li>
									</ul>
									<a href="#" className="buy-btn">
										Get Started
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* End Pricing Section */}
				{/* ======= Frequently Asked Questions Section ======= */}
				<section id="faq" className="faq section-bg">
					<div className="container" data-aos="fade-up">
						<div className="section-title">
							<h2>Frequently Asked Questions</h2>
							<p>
								Magnam dolores commodi suscipit. Necessitatibus eius consequatur
								ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
								quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
								Quia fugiat sit in iste officiis commodi quidem hic quas.
							</p>
						</div>
						<div className="faq-list">
							<ul>
								<li data-aos="fade-up" data-aos-delay={100}>
									<i className="bx bx-help-circle icon-help" />{" "}
									<a
										data-bs-toggle="collapse"
										className="collapse"
										data-bs-target="#faq-list-1"
									>
										Non consectetur a erat nam at lectus urna duis?{" "}
										<i className="bx bx-chevron-down icon-show" />
										<i className="bx bx-chevron-up icon-close" />
									</a>
									<div
										id="faq-list-1"
										className="collapse show"
										data-bs-parent=".faq-list"
									>
										<p>
											Feugiat pretium nibh ipsum consequat. Tempus iaculis urna
											id volutpat lacus laoreet non curabitur gravida. Venenatis
											lectus magna fringilla urna porttitor rhoncus dolor purus
											non.
										</p>
									</div>
								</li>
								<li data-aos="fade-up" data-aos-delay={200}>
									<i className="bx bx-help-circle icon-help" />{" "}
									<a
										data-bs-toggle="collapse"
										data-bs-target="#faq-list-2"
										className="collapsed"
									>
										Feugiat scelerisque varius morbi enim nunc?{" "}
										<i className="bx bx-chevron-down icon-show" />
										<i className="bx bx-chevron-up icon-close" />
									</a>
									<div
										id="faq-list-2"
										className="collapse"
										data-bs-parent=".faq-list"
									>
										<p>
											Dolor sit amet consectetur adipiscing elit pellentesque
											habitant morbi. Id interdum velit laoreet id donec
											ultrices. Fringilla phasellus faucibus scelerisque
											eleifend donec pretium. Est pellentesque elit ullamcorper
											dignissim. Mauris ultrices eros in cursus turpis massa
											tincidunt dui.
										</p>
									</div>
								</li>
								<li data-aos="fade-up" data-aos-delay={300}>
									<i className="bx bx-help-circle icon-help" />{" "}
									<a
										data-bs-toggle="collapse"
										data-bs-target="#faq-list-3"
										className="collapsed"
									>
										Dolor sit amet consectetur adipiscing elit?{" "}
										<i className="bx bx-chevron-down icon-show" />
										<i className="bx bx-chevron-up icon-close" />
									</a>
									<div
										id="faq-list-3"
										className="collapse"
										data-bs-parent=".faq-list"
									>
										<p>
											Eleifend mi in nulla posuere sollicitudin aliquam ultrices
											sagittis orci. Faucibus pulvinar elementum integer enim.
											Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
											tellus pellentesque eu tincidunt. Lectus urna duis
											convallis convallis tellus. Urna molestie at elementum eu
											facilisis sed odio morbi quis
										</p>
									</div>
								</li>
								<li data-aos="fade-up" data-aos-delay={400}>
									<i className="bx bx-help-circle icon-help" />{" "}
									<a
										data-bs-toggle="collapse"
										data-bs-target="#faq-list-4"
										className="collapsed"
									>
										Tempus quam pellentesque nec nam aliquam sem et tortor
										consequat? <i className="bx bx-chevron-down icon-show" />
										<i className="bx bx-chevron-up icon-close" />
									</a>
									<div
										id="faq-list-4"
										className="collapse"
										data-bs-parent=".faq-list"
									>
										<p>
											Molestie a iaculis at erat pellentesque adipiscing
											commodo. Dignissim suspendisse in est ante in. Nunc vel
											risus commodo viverra maecenas accumsan. Sit amet nisl
											suscipit adipiscing bibendum est. Purus gravida quis
											blandit turpis cursus in.
										</p>
									</div>
								</li>
								<li data-aos="fade-up" data-aos-delay={500}>
									<i className="bx bx-help-circle icon-help" />{" "}
									<a
										data-bs-toggle="collapse"
										data-bs-target="#faq-list-5"
										className="collapsed"
									>
										Tortor vitae purus faucibus ornare. Varius vel pharetra vel
										turpis nunc eget lorem dolor?{" "}
										<i className="bx bx-chevron-down icon-show" />
										<i className="bx bx-chevron-up icon-close" />
									</a>
									<div
										id="faq-list-5"
										className="collapse"
										data-bs-parent=".faq-list"
									>
										<p>
											Laoreet sit amet cursus sit amet dictum sit amet justo.
											Mauris vitae ultricies leo integer malesuada nunc vel.
											Tincidunt eget nullam non nisi est sit amet. Turpis nunc
											eget lorem dolor sed. Ut venenatis tellus in metus
											vulputate eu scelerisque.
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</section>
				{/* End Frequently Asked Questions Section */}
				{/* ======= Contact Section ======= */}
				<section id="contact" className="contact">
					<div className="container" data-aos="fade-up">
						<div className="section-title">
							<h2>Contact</h2>
							<p>
								Magnam dolores commodi suscipit. Necessitatibus eius consequatur
								ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
								quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
								Quia fugiat sit in iste officiis commodi quidem hic quas.
							</p>
						</div>
						<div className="row">
							<div className="col-lg-5 d-flex align-items-stretch">
								<div className="info">
									<div className="address">
										<i className="bi bi-geo-alt" />
										<h4>Location:</h4>
										<p>A108 Adam Street, New York, NY 535022</p>
									</div>
									<div className="email">
										<i className="bi bi-envelope" />
										<h4>Email:</h4>
										<p>info@example.com</p>
									</div>
									<div className="phone">
										<i className="bi bi-phone" />
										<h4>Call:</h4>
										<p>+1 5589 55488 55s</p>
									</div>
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
										frameBorder={0}
										style={{ border: 0, width: "100%", height: 290 }}
										allowFullScreen
									/>
								</div>
							</div>
							<div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
								<form
									action="forms/contact.php"
									method="post"
									role="form"
									className="php-email-form"
								>
									<div className="row">
										<div className="form-group col-md-6">
											<label htmlFor="name">Your Name</label>
											<input
												type="text"
												name="name"
												className="form-control"
												id="name"
												required
											/>
										</div>
										<div className="form-group col-md-6">
											<label htmlFor="name">Your Email</label>
											<input
												type="email"
												className="form-control"
												name="email"
												id="email"
												required
											/>
										</div>
									</div>
									<div className="form-group">
										<label htmlFor="name">Subject</label>
										<input
											type="text"
											className="form-control"
											name="subject"
											id="subject"
											required
										/>
									</div>
									<div className="form-group">
										<label htmlFor="name">Message</label>
										<textarea
											className="form-control"
											name="message"
											rows={10}
											required
											defaultValue={""}
										/>
									</div>
									<div className="my-3">
										<div className="loading">Loading</div>
										<div className="error-message" />
										<div className="sent-message">
											Your message has been sent. Thank you!
										</div>
									</div>
									<div className="text-center">
										<button type="submit">Send Message</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
				{/* chatboot  */}

				{/* End Contact Section */}
			</main>
			{/* End #main */}
		</>
	);
}
