import { useState } from "react";
import Google from "../assets/google.svg";
import SignImage from "../assets/SignUp.svg";

interface SignUpProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const SignUp: React.FC<SignUpProps> = ({ isOpen, setIsOpen }) => {
  const [isSignIn, setIsSignIn] = useState(false);

  const toggleForm = () => setIsSignIn(!isSignIn);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="d-none d-md-block"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
            zIndex: 99, // Ensure it's below the modal
          }}
          onClick={() => setIsOpen(false)} // Close modal when clicking outside
        ></div>
      )}

      {/* Modal */}
      {isOpen && (
        <div
          className="rounded d-none d-md-block d-md-flex flex-column"
          style={{
            zIndex: 100, // Ensure it's above the overlay
            position: "fixed", // Fixed positioning for centering
            width: "736px",
            height: "auto",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Center the modal for larger screens
            backgroundColor: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            style={{
              position: "absolute",
              top: "-40px",
              right: "-15px",
              backgroundColor: "#fff",
              border: "1px solid #D9D9DB",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
              color: "#333",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            ×
          </button>

          {/* Header Section */}
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              height: "50px",
              backgroundColor: "#EFFFF4",
              borderRadius: "5px 5px 0 0",
            }}
          >
            <div
              style={{
                fontWeight: "500",
                color: "#008A45",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </div>
          </div>

          {/* Main Content */}
          <div className="container py-4 px-5">
            <div className="row mb-4">
              {/* Title Section */}
              <div className="col-6">
                <h3>{isSignIn ? "Sign In" : "Create Account"}</h3>
              </div>
              <div className="col-6 text-end">
                <span style={{ fontSize: "13px" }}>
                  {isSignIn
                    ? "Don't have an account yet? "
                    : "Already have an account? "}
                  <a
                    href="#"
                    style={{
                      color: "#007BFF",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                    onClick={toggleForm}
                  >
                    {isSignIn ? "Create one for free!" : "Sign In"}
                  </a>
                </span>
              </div>
            </div>

            {/* Form Section */}
            <div className="row">
              {/* Left Column */}
              <div className="px-0 col-6">
                {!isSignIn && (
                  <div className="">
                    <input
                      className="px-3 col-6"
                      style={{
                        height: "46px",
                        width: "50%",
                        border: "1px solid #D9D9DB",
                        color: "#8A8A8A",
                        backgroundColor: "#f5f5f5",
                      }}
                      type="text"
                      placeholder="First Name"
                    />
                    <input
                      className="px-3 col-6"
                      style={{
                        height: "46px",
                        width: "50%",
                        border: "1px solid #D9D9DB",
                        color: "#8A8A8A",
                        backgroundColor: "#f5f5f5",
                      }}
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                )}
                <div>
                  <input
                    className="px-3"
                    style={{
                      height: "46px",
                      width: "100%",
                      border: "1px solid #D9D9DB",
                      color: "#8A8A8A",
                      backgroundColor: "#f5f5f5",
                    }}
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    className={!isSignIn ? "px-3" : "px-3 mb-3"}
                    style={{
                      height: "46px",
                      width: "100%",
                      border: "1px solid #D9D9DB",
                      color: "#8A8A8A",
                      backgroundColor: "#f5f5f5",
                    }}
                    type="password"
                    placeholder="Password"
                  />
                </div>
                {!isSignIn && (
                  <div className="mb-3">
                    <input
                      className="px-3"
                      style={{
                        height: "46px",
                        width: "100%",
                        border: "1px solid #D9D9DB",
                        color: "#8A8A8A",
                        backgroundColor: "#f5f5f5",
                      }}
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </div>
                )}
                <button
                  className="btn btn-primary w-100 mb-3 rounded-pill fw-semibold"
                  style={{ border: "none", width: "100%", height: "38px" }}
                >
                  {isSignIn ? "Sign In" : "Create Account"}
                </button>
                <div className="py-2 rounded">
                  <button
                    className="px-3"
                    style={{
                      height: "36px",
                      width: "100%",
                      border: "1px solid #D9D9DB",
                      backgroundColor: "white",
                    }}
                  >
                    <img
                      style={{ height: "16px", marginRight: "5px" }}
                      src="https://s3-alpha-sig.figma.com/img/2260/c71f/967377e16ffbb611ef03393e79e51f6e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZtXmZG05CHp13bgW1VvwMiBUP0eHlUrBEptDo76nFGDanlxHGyZB8h4YeKkm2K2lItAG94~dsfYn0mLdMdEz5AxKRsPoOXMw6NjKJo9z-vsMQbTInzXV1lO7K1-burtsy1OPLaf5ssvNiBdfLj82zBuQkTMfM4wWDgrbZJVvqZBQ-szZXiS4XyIogVpCJptfRF0xCTpeNa5mTcxRs8qIMPqA21tvlP5oV8egnKPVnnjrqiSnfUrmKJMr8tpEE2J0ZqqBiMxVsida~dtxaCsHgljaBu9hEvPS5CDxM4KYW~LsCS1iyxhzzRV~D7glSF1GdtiStfDTVn9Y2Lc5TlXJGQ__"
                      alt="facebook"
                    />
                    {isSignIn ? "Sign In" : "Sign Up"} with Facebook
                  </button>
                </div>
                <div className="rounded">
                  <button
                    className="px-3"
                    style={{
                      height: "36px",
                      width: "100%",
                      border: "1px solid #D9D9DB",
                      backgroundColor: "white",
                    }}
                  >
                    <img
                      style={{ height: "16px", marginRight: "5px" }}
                      src={Google}
                      alt="google"
                    />
                    {isSignIn ? "Sign In" : "Sign Up"} with Google
                  </button>
                </div>
                {isSignIn && (
                  <div className="mt-3 text-center">
                    <a
                      href="#"
                      style={{
                        fontSize: "14px",
                        textDecoration: "none",
                        color: "#007BFF",
                      }}
                    >
                      Forgot Password?
                    </a>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="col-6 text-center">
                <img
                  src={SignImage}
                  alt="Sign Up Illustration"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                {!isSignIn && (
                  <div style={{ fontSize: "11px" }}>
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* For smaller screens */}
      {isOpen && (
        <div
          className="d-md-none"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            backgroundColor: "white",
            boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 100, // Ensure it's above the overlay
          }}
        >
          {/* Mobile Header Section */}
          <div
            className="px-4"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <div className="py-3" style={{ fontSize: "18px" }}>
              {isSignIn ? "Welcome Back" : "Create Account"}
            </div>
            <button
              onClick={() => setIsOpen(false)} // Close the modal
              style={{
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>

          {/* Mobile Form */}
          <div className="container py-3 px-4">
            <div className="row" style={{ paddingBottom: "50px" }}>
              {/* Form */}
              <div className="col-12">
                <div>
                  <div className="">
                    <input
                      className="px-3 col-6"
                      style={{
                        height: "46px",
                        width: "50%",
                        border: "1px solid #D9D9DB",
                        color: "#8A8A8A",
                        backgroundColor: "#f5f5f5",
                      }}
                      type="text"
                      placeholder="First Name"
                    />
                    <input
                      className="px-3 col-6"
                      style={{
                        height: "46px",
                        width: "50%",
                        border: "1px solid #D9D9DB",
                        color: "#8A8A8A",
                        backgroundColor: "#f5f5f5",
                      }}
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div>
                  <input
                    className="px-3 col-12"
                    style={{
                      height: "46px",
                      width: "100%",
                      border: "1px solid #D9D9DB",
                      color: "#8A8A8A",
                      backgroundColor: "#f5f5f5",
                    }}
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    className={isSignIn ? "px-3 col-12 mb-3" : " px-3 col-12"}
                    style={{
                      height: "46px",
                      width: "100%",
                      border: "1px solid #D9D9DB",
                      color: "#8A8A8A",
                      backgroundColor: "#f5f5f5",
                    }}
                    type="password"
                    placeholder="Password"
                  />
                </div>
                {!isSignIn && (
                  <div className="mb-3">
                    <input
                      className="px-3 col-12"
                      style={{
                        height: "46px",
                        width: "100%",
                        border: "1px solid #D9D9DB",
                        color: "#8A8A8A",
                        backgroundColor: "#f5f5f5",
                      }}
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </div>
                )}
                <div className="row mb-3">
                  <div className="col-8">
                    <button
                      className="btn btn-primary w-100 rounded-pill fw-semibold"
                      style={{ border: "none", width: "100%", height: "38px" }}
                    >
                      {isSignIn ? "Sign In" : "Create Account"}
                    </button>
                  </div>
                  <div
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                    className="d-flex col-4 align-items-center"
                    onClick={() => setIsSignIn(!isSignIn)}
                  >
                    {!isSignIn ? "or, Sign In" : "or, Create Account"}
                  </div>
                </div>
                <button
                  className="px-3 mb-2"
                  style={{
                    height: "36px",
                    width: "100%",
                    border: "1px solid #D9D9DB",
                    backgroundColor: "white",
                  }}
                >
                  <img
                    style={{ height: "16px", marginRight: "5px" }}
                    src="https://s3-alpha-sig.figma.com/img/2260/c71f/967377e16ffbb611ef03393e79e51f6e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZtXmZG05CHp13bgW1VvwMiBUP0eHlUrBEptDo76nFGDanlxHGyZB8h4YeKkm2K2lItAG94~dsfYn0mLdMdEz5AxKRsPoOXMw6NjKJo9z-vsMQbTInzXV1lO7K1-burtsy1OPLaf5ssvNiBdfLj82zBuQkTMfM4wWDgrbZJVvqZBQ-szZXiS4XyIogVpCJptfRF0xCTpeNa5mTcxRs8qIMPqA21tvlP5oV8egnKPVnnjrqiSnfUrmKJMr8tpEE2J0ZqqBiMxVsida~dtxaCsHgljaBu9hEvPS5CDxM4KYW~LsCS1iyxhzzRV~D7glSF1GdtiStfDTVn9Y2Lc5TlXJGQ__"
                    alt="facebook"
                  />
                  {isSignIn ? "Sign In" : "Sign Up"} with Facebook
                </button>
                <button
                  className="px-3"
                  style={{
                    height: "36px",
                    width: "100%",
                    border: "1px solid #D9D9DB",
                    backgroundColor: "white",
                  }}
                >
                  <img
                    style={{ height: "16px", marginRight: "5px" }}
                    src={Google}
                    alt="google"
                  />
                  {isSignIn ? "Sign In" : "Sign Up"} with Google
                </button>
                <div className="mt-3 text-center">
                  <a
                    href="#"
                    style={{
                      fontSize: "14px",
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    {isSignIn
                      ? "Forgot Password?"
                      : "By signing up, you agree to our Terms & conditions, Privacy policy"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
