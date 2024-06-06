import { NavLink } from "react-router-dom"
import { userAuthentication } from "../hooks/userAuthentication"
import { useAuthValue } from "../context/AuthContext"
import styles from "./Navbar.module.css"
import sair from "../../public/exit-svgrepo-com.svg"
import logo from "./../../public/logoDevBlog.png"

const Navbar = () => {
  const { logout } = userAuthentication()
  const { user } = useAuthValue()
  console.log(user)
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="/">
        <div>
          <img src={logo} alt="Brand" width="50px" height="30px" /> Mini <span>Blog</span>
        </div>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Cadastrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Novo post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout} className={styles.exit}>
              <img src={sair} width="20" height="20" />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
