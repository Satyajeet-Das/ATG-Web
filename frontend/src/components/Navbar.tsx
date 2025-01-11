import Down from "../assets/down.svg";
import JoinGroup from "../assets/joinGroup.svg";
import LeaveGroup from "../assets/leaveGroup.svg";

interface NavbarProps {
    isJoined: boolean;
    setIsJoined: (value:boolean) => void; 
}

const Navbar: React.FC<NavbarProps> = ({isJoined, setIsJoined}) => {

  return (
    <>
      <div
        className="d-none d-md-flex justify-content-between mx-auto align-items-center container sticky-top mb-3"
        style={{
          zIndex: 50,
          height: "68px",
          background: "rgb(255, 255, 255)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
        }}
      >
        <ul className="nav my-2 nav-underline">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              All Posts (32)
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Article
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Event
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Job
            </a>
          </li>
        </ul>
        <div className="d-flex my-2 align-items-center">
          <button
            className="btn"
            aria-label="write-post"
            style={{ background: "rgb(242, 242, 242)" }}
          >
            Write Post
            <img
              src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-arrow_drop_down-24px'%20clip-path='url(%23clip0_1_1136)'%3e%3cpath%20id='Vector'%20d='M6.41667%209.16669L11%2013.75L15.5833%209.16669H6.41667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1136'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
              alt="arrow down"
            />
          </button>
          <button style={{ border: "none", background: "none" }} onClick={() => setIsJoined(!isJoined)}>
            {!isJoined ?
            
            <img
              className="border-0 bg-none"
              src={JoinGroup}
              alt="Join group"
            /> :
            <img src={LeaveGroup} alt="Leave Group" />
        }
          </button>
        </div>
      </div>
      <div className="row d-flex d-md-none justify-content-between mx-auto align-items-center container mb-3">
        <div className="col-6 fw-medium" style={{ color: "#212529" }}>
          Posts(368)
        </div>
        <div className="col-6 d-flex justify-content-end">
          <button
            style={{ color: "#212529" }}
            className="py-1 px-3 border-0 rounded fw-medium"
          >
            Filter: All
            <img src={Down} alt="down" className="ms-3" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
