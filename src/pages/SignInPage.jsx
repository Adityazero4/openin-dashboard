import React from "react";
import "./SignInPage.css"; // Add your custom styles in SignUpPage.css
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import sidebar_logo from "../assets/images/sidebar_logo.png";

const SignInPage = () => {
  const navigate = useNavigate();
  return (
    <div className="signup-container">
      <div className="navbar-mobile">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="navbar-text">Base</span>
      </div>
      <div className="left-section">
        <div className="company-logo">
          <img src={logo} alt="" />
        </div>
        <div className="company-container">
          <div className="company-name">BASE</div>
        </div>

        <div className="social-icons">
          <i className="fab fa-github"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-discord"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
      <div className="separator"></div>
      <div className="right-section">
        <div className="right-header">
          <div className="header">Sign In</div>
          <div className="subheader">Sign In to your Account</div>
        </div>

        <div className="sign-in">
          <button className="google-signin">
            {/* <i className="fa-brands fa-google signin-icons"></i> {"  "} Sign in
            with Google */}
            <GoogleOAuthProvider clientId="262946380795-85fechv9usb73uuqeno9gjb4pb0q08gl.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  var decoded = jwt_decode(credentialResponse.credential);
                  console.log(decoded);
                  navigate("/home/dashboard");
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
          </button>
          <button className="apple-signin">
            <i className="fa-brands fa-apple signin-icons"></i>
            {"  "} Sign in with Apple
          </button>
        </div>
        <div className="signup-form">
          <label className="input-label">Email Address</label>
          <input type="email" placeholder="Email" />
          <label className="input-label">Password</label>
          <input type="password" placeholder="Password" />
          <div className="forgot-password">Forgot Password?</div>
          <button
            className="signin-button"
            onClick={() => {
              navigate("/home");
            }}
          >
            Sign In
          </button>
        </div>
        <div className="signup-link">
          Don't have an account?{" "}
          <a
            href="/signup"
            style={{
              color: "#3B82F6",
            }}
          >
            Register Here
          </a>
        </div>
      </div>
      <div className="social-media-icons">
        <i className="fab fa-github"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-discord"></i>
        <i className="fab fa-linkedin"></i>
      </div>
    </div>
  );
};

export default SignInPage;
