import React from 'react';
import './ProfileScreen.css';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { selectUser } from '../features/userSlice';
import Footer from '../components/Footer';
import { auth } from '../firebase';


const ProfileScreen = () => {

    const user = useSelector(selectUser);
    const history = useHistory();

    const signOut = () => {
        auth.signOut().then(() => {
            history.push("/")
        })
        .catch((err) => {
            alert(err.message);
        })
    }

    return (
        <div className="profileScreen">
            <Navbar />
            <div className="profileScreen__section">
                <img 
                    className="profileScreen__userLogo"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My
                        5vcmcvMjAwMC9zdmciIHdpZHRoPSI3OSIgaGVpZ2h0PSI3OSIgdmlld0JveD0
                        iMCAwIDc5IDc5Ij4KICAgIDxnIGZpbGw9Im5vbmUiPgogICAgICAgIDxjaXJjb
                        GUgY3g9IjM5LjUiIGN5PSIzOS41IiByPSIzOS41IiBmaWxsPSIjRkZGIi8+CiAg
                        ICAgICAgPHBhdGggZmlsbD0iIzFGODBFMCIgZD0iTTAgMzkuNUMwIDE3LjY4NSAx
                        Ny42ODQgMCAzOS41IDAgNjEuMzE1IDAgNzkgMTcuNjg1IDc5IDM5LjVTNjEuMzE
                        1IDc5IDM5LjUgNzlDMTcuNjg0IDc5IDAgNjEuMzE1IDAgMzkuNXptMTkuNzkyIDI
                        2LjM0OGM1LjYyOSAzLjkzIDEyLjQ1MiA2LjI1MyAxOS45MTQgNi4xOCA3LjE3MyAw
                        IDEzLjg4OS0yLjE3OSAxOS40My01Ljk0OSAyLjA0NS0xLjM5IDEuNTM4LTQuNTU1L
                        S44NTQtNS4xNjUtLjI0Ny0uMDYzLS40ODctLjEyMS0uNzItLjE3My00Ljc4Ni0xLj
                        ExLTcuNjQtMi42ODMtOC41Ni00LjYyNS0uNzM2LTEuNTczLS4zNjgtMy43MDEgMS4
                        xMDUtNi40NzYgOC43NDQtMTYuNDY3IDcuMTc5LTI1LjcxOCA0LjMyNi0zMC41Mjkt
                        Mi44NTQtNC44MS04LjI4NC03LjQ5My0xNS4yOC03LjQ5My02Ljk5NCAwLTEyLjUxNy
                        AyLjY4My0xNS4zNyA3LjU4Ni0yLjg1MyA0LjgxLTQuNDE4IDE0LjA2MSA0LjQxOCAz
                        MC40MzYgMS4zOCAyLjY4MyAxLjg0IDQuODEgMS4xMDUgNi4zODMtLjkyIDIuMDM1LT
                        MuNzc0IDMuNjA4LTguNTYgNC43MThsLS4wNTMuMDE0Yy0yLjMyLjYxNy0yLjg3MSAz
                        LjcxNy0uOSA1LjA5M2gtLjAwMXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                    alt="User Logo"
                />
                <h4 className="profileScreen__userName">{user.displayName}</h4>
                <h5 className="profileScreen__userEmail">{user.email}</h5>
                <button className="profileScreen__logOut" onClick={signOut}>Log Out</button>
            </div>
            <Footer />
        </div>
    );
}

export default ProfileScreen;
