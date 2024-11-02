import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../firebase";
import BallsGroupe from "../BallsGroup/BallsGroupe";
import styles from "./SingUpForm.module.css";

export const SingUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCopyPassword, setShowCopyPassword] = useState(false);
  const navigate = useNavigate();

  function register(event) {
    event.preventDefault();
    if (copyPassword !== password) {
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
        setCopyPassword("");
        navigate("/");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <BallsGroupe />
        <div className={styles.formBoxReg}>
          <form onSubmit={register}>
            <h1>Create account</h1>
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
            <div className={`${styles.inputBox} ${copyPassword === password ? "" : styles.errorInput}`}>
              <input
                value={copyPassword}
                onChange={(event) => setCopyPassword(event.target.value)}
                type={showCopyPassword ? "text" : "password"}
                placeholder="Confirm password"
                required
              />
              <span className={styles.icon} onClick={() => setShowCopyPassword(!showCopyPassword)}>
                {showCopyPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {error && <p className={styles.errorText}>{error}</p>}
            <button className={styles.buttoncreate} type="submit">
              Create
            </button>
            <div className={styles.registerLink}>
              <p>
                <Link to="/">Already have an account?</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUpForm;
