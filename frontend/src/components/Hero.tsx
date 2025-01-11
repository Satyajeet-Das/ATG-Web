import Back from "../assets/back.svg";
import Join from "../assets/join.svg";
import "../index.css";

const Hero = () => {
  return (
    <>
      <div className="post_header">
        <div className="title_position">
          <div className="d-md-none relative">
            <img
              src={Back}
              style={{ position: "relative", left: "16px", top: "16px" }}
              alt="Back"
            />
            <button
              className="rounded d-flex align-items-center justify-center"
              style={{
                position: "absolute",
                width: "76px",
                height: "28px",
                backgroundColor: "transparent",
                border: "1px solid white",
                top: "15px",
                right: "15px",
              }}
            >
              <img src={Join} alt="Join" />
            </button>
          </div>
          <div className="relative">
            <div
              className="community_title"
            >
              <div className="text-white fw-bold fs-4">
                Computer Engineering
              </div>
              <div className="text-white fw-medium fs-6">
                142,765 Computer Engineers follow this
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
