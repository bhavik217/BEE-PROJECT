import { Link } from "react-router-dom";

function Navbar({ logo }) {
    const handleNavItemClick = () => {
        const offcanvasElement = document.getElementById("offcanvasNavbar");
        const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
        if (offcanvasInstance) {
            offcanvasInstance.hide(); 
        }
    };

    return (
        <nav className="navbar bg-body-tertiary border-bottom fixed-top">
            <div className="container-sm">
                <Link className="navbar-brand" to="/">
                    <img width="180" height="50" src={logo} alt="" />
                </Link>
            
                <div className="d-flex align-items-center">
                    <Link 
                        to="/Signin" 
                        className="btn btn-outline-dark me-2 d-none d-md-block"
                    >
                        Sign In
                    </Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="offcanvas" 
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Site</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" onClick={handleNavItemClick}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/meet-team" onClick={handleNavItemClick}>Meet Our Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/join-team" onClick={handleNavItemClick}>Join Our Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services" onClick={handleNavItemClick}>Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog" onClick={handleNavItemClick}>Blog</Link>
                            </li>
                            <li className="nav-item d-md-none">
                                <Link className="nav-link" to="/Signin" onClick={handleNavItemClick}>Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;