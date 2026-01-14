import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/Logo.png"; // <--- Importamos tu logo

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)', borderBottom: '1px solid #333' }}>
            <div className="container-fluid">
                {/* Logo Imagen */}
                <Link className="navbar-brand" to="/">
                   <img src={logo} alt="Logo Bodegas" style={{ height: '50px' }} />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem' }}>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/tinto">Nuestros Tintos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/blanco">Blancos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/espumante">Espumantes</NavLink>
                        </li>
                    </ul>
                    
                    <div className="d-flex">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;