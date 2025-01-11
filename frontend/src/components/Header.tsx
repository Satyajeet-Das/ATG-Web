import { useState } from "react";
import Logo from "../assets/ATG_Logo.svg";
import Down from "../assets/down.svg";
import Search from "../assets/search.svg";
import "../index.css";

const MobileIcon = () => {
  return (
    <>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 -0.00012207H10V9.99988H0V-0.00012207Z" fill="#868E96" />
      </svg>

      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 9.99988C7.76142 9.99988 10 7.7613 10 4.99988C10 2.23845 7.76142 -0.00012207 5 -0.00012207C2.23858 -0.00012207 0 2.23845 0 4.99988C0 7.7613 2.23858 9.99988 5 9.99988Z"
          fill="#868E96"
        />
      </svg>
      <svg
        width="12"
        height="10"
        viewBox="0 0 12 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 -0.00012207H12L6 9.99988L0 -0.00012207Z"
          fill="#868E96"
        />
      </svg>
    </>
  );
};

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({isOpen, setIsOpen}) => {

  return (
    <>
      <nav className="navbars navbar-expand-lg color-change">
        <div className="container-fluid d-flex align-items-center">
          <div className="container">
            <div className="row py-3 d-md-flex d-none">
              <div className="d-flex align-items-center col-12 col-md-4">
                <img src={Logo} alt="ATG-Logo" className="img-fluid" />
              </div>
              <div className="col-12 col-md-4">
                <input
                  type="text"
                  className="form-control rounded-pill py-2"
                  style={{ fontSize: "14px" }}
                  placeholder="Search for your favorite groups in ATG"
                />
              </div>
              <div style={{cursor: "pointer"}} className="d-flex align-items-center col-12 col-md-4" onClick={() => setIsOpen(!isOpen)}>
                <div className="fw-medium ms-auto">
                  Create Account.{" "}
                  <span className="font-bold text-primary">It's free!</span>
                </div>
                <div className="ms-1">
                  <img src={Down} alt="down" />
                </div>
              </div>
            </div>
          </div>

          <div style={{cursor: "pointer"}} className="d-flex align-items-center gap-2 py-2 d-md-none" onClick={() => setIsOpen(!isOpen)}>
            {/* <span className="navbar-toggler-icon"></span> */}
            <MobileIcon />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
