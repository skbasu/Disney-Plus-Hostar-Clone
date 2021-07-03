import React, { useEffect } from 'react';
import './Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth, provider } from '../firebase';
import { login, logout, selectUser } from '../features/userSlice';

const Navbar = () => {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if (authUser) {
                dispatch(login({
                    uid: authUser.uid,
                    email: authUser.email,
                    displayName: authUser.displayName,
                }));
            } else {
                dispatch(logout());
            }
        })
    }, [dispatch])

    const signIn = () => {
        auth.signInWithPopup(provider)
            .catch((err) => {
                alert(err.message);
            });
    }

    return (
        <nav className="navbar">
            <Link to="/" style={{ backgroundColor: "#141A28" }}>
                <img
                    className="navbar__logo"
                    src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
                    alt="Hotstar Logo"
                />
            </Link>

            <div className="navbar__items">
                <span>
                    <Link style={{
                        textDecoration: "none",
                        color: "#C6C8CB",
                        fontWeight: "500",
                        backgroundColor: "#141A28",

                    }} to="/tv">TV</Link>
                </span>
                <span>
                    <Link style={{
                        textDecoration: "none",
                        color: "#C6C8CB",
                        fontWeight: "500",
                        backgroundColor: "#141A28"

                    }} to="/movies">Movies</Link>
                </span>
            </div>
            {
                user ? (
                    <Link to="/profile" style={{ textDecoration: "none", marginTop: "-30px" }}>
                        <img
                            className="navbar__user"
                            src="https://www.hotstar.com/assets/c724e71754181298e3f835e46ade0517.svg"
                            alt="User Avatar"
                        />
                    </Link>
                ) : (
                    <button className="navbar__login" onClick={signIn}>LOGIN</button>
                )
            }

        </nav>
    );
}

export default Navbar;
