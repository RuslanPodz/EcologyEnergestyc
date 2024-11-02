import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect,useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../firebase";
import BallsGroupe from "../BallsGroup/BallsGroupe";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true); 
    }
  }, []);

  function logIn(event) {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
        if (rememberMe) {
          localStorage.setItem("email", email);
        } else {
          localStorage.removeItem("email");
        }
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
        setError("Неправильно введені данні");
      });
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <BallsGroupe />
        <div className={styles.formBoxLogin}>
          <form onSubmit={logIn}>
            <h1>Login</h1>
            <div className={styles.inputBox}>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="Email"
                required
              />
              <FaEnvelope className={styles.icon} />
            </div>
            <div className={styles.inputBox}>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <span className={styles.icon} onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className={styles.rememberForm}>
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe((previous) => !previous)} 
                />
                Remember me
              </label>
            </div>
            <button type="submit" className={styles.button}>Login</button>
            {error && <div className={styles.error}><p style={{ color: "red" }}>{error}</p></div>}
            <div className={styles.registerLink}>
              <p>
                <Link to="/register">Create account</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
