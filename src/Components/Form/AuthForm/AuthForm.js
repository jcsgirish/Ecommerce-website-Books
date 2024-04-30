import React, { useState } from "react";
import app from "../../../FireBase/FireBase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



const AuthForm = ({ buttonName }) => {
    const [Email, SetEmail] = useState('');
    const [Password, SetPassword] = useState('');
    const [username, Setusername] = useState('');
    const navigate = useNavigate();


    const handlesubmit = (event) => {
        event.preventDefault();

        const auth = getAuth(app);

        if (buttonName === 'LOGIN') {
            signInWithEmailAndPassword(auth, Email, Password)
                .then(() => {
                    navigate('/');
                })
                .catch((error) => {
                    console.log(error);
                    alert("please check emali and password")
                });
        } else {
            createUserWithEmailAndPassword(auth, Email, Password)
                .then((userCred) => {
                    userCred.user.displayName = username;
                    navigate('/');
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <form onSubmit={handlesubmit}>
            {buttonName === 'SIGNUP' && (
                <div className="signup-Group">
                    <input
                        type="text"
                        className="signupform"
                        placeholder="Enter Your Name"
                        value={username}
                        required
                        onChange={(event) => Setusername(event.target.value)}
                    />
                </div>
            )}

            <div className="signup-Group">
                {/* <input
                    type="text"
                    className="signupform"
                    placeholder="Enter Your Name"
                    value={username}
                    onChange={(event) => Setusername(event.target.value)}
                /> */}

                <input
                    type="email"
                    className="signupform"
                    placeholder="Enter Your Email"
                    value={Email}
                    required
                    onChange={(event) => SetEmail(event.target.value)}
                />

                <input
                    type="password"
                    className="signupform"
                    placeholder="password"
                    onChange={(event) => SetPassword(event.target.value)}
                    value={Password}
                    required
                />
            </div>

            <div>
                <input type="submit" className="btn" value={buttonName} />
            </div>
        </form>
    );
};

export default AuthForm;
