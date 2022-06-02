import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
        let username = 'admin'
        let password = 'admin'
    
        const [verifyUsername, setVerifyUsername] = useState('');
        const [verifyPassword, setVerifyPassword] = useState('');
        const [isVerify, setIsVerify] = useState(false);
    
        const veryfyLogin = () =>{
            (verifyUsername !== (username) || verifyPassword !== (password)) && alert('Incorrect username or password');
            (verifyUsername === (username) && verifyPassword === (password)) && setIsVerify(true);
        }
        const [isLoggedIn, setisLoggedIn] = useState(null);
        const logIn = () => {
        setisLoggedIn(true);
        };
        const logOut = () => {
         setisLoggedIn(false);
        };
    
        return ( 
        
            <div className="LoginPage "><h1 style={{ textAlign: "center" }}>Login Page</h1> 
                <input type="text" className="txtUsername" placeholder="username" onChange={event => setVerifyUsername(event.target.value)}/>
                <input type="text" className="txtPassword" placeholder="password" onChange={event => setVerifyPassword(event.target.value)}/>
                
                <Link to={isVerify && "/"}><button onClick={veryfyLogin && setisLoggedIn}  className="btnSignin" >Sign in</button></Link>
                {isLoggedIn ? (
                    <button className="btnSignin" onClick={logOut}>Logout</button>
                    ) : (
                    <button className="btnSignin" onClick={logIn}>Login</button>
                    )}
                   
                <p className="forgotPassword">Forgot Password?</p>
                <p className="register">Register</p>
            </div>
        );


   };
   export default Login;