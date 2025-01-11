import Navbar from "./Navbar";
import Groups from "./Groups";
import Ellipsis from "../assets/ellipsis.svg";
import Share from "../assets/share.svg";
import Calender from "../assets/calender.svg";
import Location from "../assets/location.svg";
import Bag from "../assets/bag.svg";
import Write from "../assets/write.svg";
import "../index.css";

interface PostProps {
  image: string;
  type: string;
  title: string;
  text: string;
  profile: string;
  author: string;
  views: string;
}

const Offer = () => {
  return (
    <>
      <div
        className="container px-0 rounded"
        style={{
          height: "400px",
          width: "100%",
          maxWidth: "692px",
          overflow: "hidden",
        }}
      >
        <div
          className="px-0 card-container"
          style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
        >
          <div style={{ height: "120px", width: "100%", overflow: "hidden" }}>
            <img
              src="https://s3-alpha-sig.figma.com/img/bdc0/79a9/a2e530610a1b91c9682ba7889c87c1b2?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OAJ36uZD17VXq1q9~ghXCU6VY9e11o8IXZomlogG45snAidKN0-ZfIZ5eEQAGzXfBeFgWifRRKffxEyerCPJM69bnfqWCdBji6rs~fGyWlQztBXYvgJzvBX5nXJfWg~KWnnEfxpLcCprUrrdMnEGEgxbe0h5F3DDFS7jKZZN6vN3psXYFpwgmJ00pMn9mQmkKhQYLRKI89QD5E1IducU4nsF0PcjTtdu5SYVxUiCmX3FUv8iCS18UcwSviW6GcbWpovw9mzoZBo~FSxtr1h7uWm1-HtNqEF8evOTX4YZ4CD-tSiHMTCDWKYSy4g8u2ntxOVQPrrbOhm79dhegkppkw__"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div style={{ padding: "0px 35px" }}>
            <div
              className="row pt-3"
              style={{ color: "#343A40", fontSize: "15px", fontWeight: "400" }}
            >
              🗓️ Meetup
            </div>
            <div
              className="row pt-3 fw-semibold py-1"
              style={{ fontSize: "17px" }}
            >
              <div className="px-0 col-9">
                Finance & Investment Elite Social Mixer @Lujiazui
              </div>
              <div className="col-3 text-end">
                <img src={Ellipsis} alt="elipsis" />
              </div>
              <div
                className="d-flex align-items-center fw-light gap-5 pt-1 pb-3 px-0"
                style={{ fontSize: "15px", width: "100%" }}
              >
                <div className="d-flex align-items-center">
                  <img src={Calender} alt="calender" className="me-2" />
                  Fri, 12 Oct, 2018
                </div>
                <div className="d-flex align-items-center">
                  <img src={Location} alt="location" className="me-2" />
                  Ahmedabad, India
                </div>
              </div>
            </div>

            <div
              className="row px-0 justify-content-center"
              style={{ width: "100%" }}
            >
              <button
                className="bg-white rounded fw-semibold"
                style={{
                  fontSize: "13px",
                  width: "100%",
                  height: "36px",
                  border: "1px solid rgb(216, 214, 214)",
                  color: "#E56135",
                }}
              >
                Visit Website
              </button>
            </div>
            <div className="row py-3">
              <div className="col-6 px-0">
                <div className="d-flex">
                  <img
                    className="rounded-circle"
                    style={{ height: "48px", width: "48px" }}
                    src="https://s3-alpha-sig.figma.com/img/b8a9/097f/c3ac7682e52df2e10d0a36ec3f243a44?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rr8iwfQiPQtgG0K-H8A-6zu3efvcny67HLGlI0Ugr8nSnt0wo8OHyjq3eT3X-tKgmNcSPGevPXL8-9hUZ2hsH-mGHdR5DuSmGJmMkjGATAC88E~9-CX3GDLzWxlK3cLhaLafsVo6ChlxJB9-gJlVfAxDTstHMKhsXntvxwAg4pJcEl-YMJRlgFQwzIrgL5BqXOuIrAKU-A5rZjJftTjihaQR2HX5qoBh0v1DIOiDNPMIgvIys-PC9ewksOXsiG6MYSt7Zi2mv6NOAZ5gMt5SaUZTB07V9azAufRwn505lIhQSIOA6Z2SzZ~FuifpGLCYl~xLu-xRJd-rWAl0YCNkdw__"
                    alt="prfile photo"
                  />
                  <div className="ms-2" style={{ fontSize: "14px" }}>
                    <div className="fw-semibold">Ronal Jones</div>
                    <div style={{ color: "#495057" }}>1.4k views</div>
                  </div>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <button
                  className="border-0 rounded px-3"
                  style={{ height: "46px", color: "#212529" }}
                >
                  <img src={Share} alt="share" className="me-2" />{" "}
                  {/* me-2 adds right margin to the icon */}
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Job = () => {
  return (
    <>
      <div
        className="container px-0 rounded"
        style={{
          height: "400px",
          width: "100%",
          maxWidth: "692px",
          overflow: "hidden",
        }}
      >
        <div
          className="px-0 card-container"
          style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
        >
          <div style={{ padding: "0px 35px" }}>
            <div
              className="row pt-3"
              style={{ color: "#343A40", fontSize: "15px", fontWeight: "400" }}
            >
              🗓️ Meetup
            </div>
            <div
              className="row pt-3 fw-semibold py-1"
              style={{ fontSize: "17px" }}
            >
              <div className="px-0 col-9">
                Finance & Investment Elite Social Mixer @Lujiazui
              </div>
              <div className="col-3 text-end">
                <img src={Ellipsis} alt="elipsis" />
              </div>
              <div
                className="d-flex align-items-center fw-light gap-5 pt-1 pb-3 px-0"
                style={{ fontSize: "15px", width: "100%" }}
              >
                <div className="d-flex align-items-center">
                  <img src={Bag} alt="bag" className="me-2" />
                  Innovaccer Analytics Private Ltd.
                </div>
                <div className="d-flex align-items-center">
                  <img src={Location} alt="location" className="me-2" />
                  Noida, India
                </div>
              </div>
            </div>

            <div
              className="row px-0 justify-content-center"
              style={{ width: "100%" }}
            >
              <button
                className="bg-white rounded fw-semibold"
                style={{
                  fontSize: "13px",
                  width: "100%",
                  height: "36px",
                  border: "1px solid rgb(216, 214, 214)",
                  color: "#02B875",
                }}
              >
                Apply on TimesJob
              </button>
            </div>
            <div className="row py-3">
              <div className="col-6 px-0">
                <div className="d-flex">
                  <img
                    className="rounded-circle"
                    style={{ height: "48px", width: "48px" }}
                    src="https://s3-alpha-sig.figma.com/img/8199/8e3c/09c5683fd07ee58841475464a08ce69f?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DpnAVnp7I-CIDj7iZEZc3-es-N8Ci0x2CKmqNg0mBvbgu6ajuPo63F2JFctuA9sIhfxgNL9OGE2yqMpFdEH09ek6BQo4eFOfMiOJfPOml49tUYexqAbt6eXN0IwCdPRWysN8Lr7Kpw2YM4zQOQV-YPviKmyg5d1TwImfuyKYnCW7EOWp6xMlyumicag0bvNhnDxoXa3zEY2FYX26LxyUZL47gf3u9ZnWwFQsyMj4x9rzPPACfSsYv73FaWqIUHHGQ7VoHuLyfGipf17~GYyEx9vSiboshgRGvYPGec4eqg1a7Mkg4n5-plDq~d8OduwFiq8YImxNyzgny8VdXZnyRA__"
                    alt="prfile photo"
                  />
                  <div className="ms-2" style={{ fontSize: "14px" }}>
                    <div className="fw-semibold">Joseph Gray</div>
                    <div style={{ color: "#495057" }}>1.4k views</div>
                  </div>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <button
                  className="border-0 rounded px-3"
                  style={{ height: "46px", color: "#212529" }}
                >
                  <img src={Share} alt="share" className="me-2" />{" "}
                  {/* me-2 adds right margin to the icon */}
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Post: React.FC<PostProps> = ({
  image,
  type,
  title,
  text,
  profile,
  author,
  views,
}) => {
  return (
    <>
      <div
        className="container px-0 rounded"
        style={{
          height: "360px",
          width: "100%",
          maxWidth: "692px",
          overflow: "hidden",
        }}
      >
        <div
          className="px-0 card-container"
          style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
        >
          <div style={{ height: "120px", width: "100%", overflow: "hidden" }}>
            <img
              src={image}
              alt="cover"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div style={{ padding: "0px 30px" }}>
            <div
              className="row pt-3"
              style={{ color: "#343A40", fontSize: "15px", fontWeight: "400" }}
            >
              {type}
            </div>
            <div
              className="row pt-3 fw-semibold py-2"
              style={{ fontSize: "17px" }}
            >
              <div className="px-0 col-9">{title}</div>
              <div className="col-3 text-end">
                <img src={Ellipsis} alt="elipsis" />
              </div>
            </div>
            <div className="row fw-light">{text}</div>
            <div className="row py-3">
              <div className="col-6 px-0">
                <div className="d-flex">
                  <img
                    className="rounded-circle"
                    style={{ height: "37px", width: "37px" }}
                    src={profile}
                    alt="prfile photo"
                  />
                  <div className="ms-2" style={{ fontSize: "14px" }}>
                    <div className="fw-semibold">{author}</div>
                    <div style={{ color: "#495057" }}>{views} views</div>
                  </div>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <button
                  className="border-0 rounded px-3"
                  style={{ height: "46px", color: "#212529" }}
                >
                  <img src={Share} alt="share" className="me-2" />{" "}
                  {/* me-2 adds right margin to the icon */}
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface PostsProps {
    isJoined: boolean;
    setIsJoined: (value:boolean) => void; 
}

const Posts : React.FC<PostsProps> = ({isJoined, setIsJoined}) => {
  return (
    <>
      <img
        className="d-md-none"
        style={{
          position: "fixed",
          right: "18px",
          bottom: "18px",
          cursor: "pointer",
        }}
        src={Write}
        alt="write"
      />
      <div className="container py-4">
        <div className="row d-flex justify-content-between py-4">
        <Navbar isJoined={isJoined} setIsJoined={setIsJoined}/>
          <div className="col-md-7 col-12 px-0">
            <Post
              image="https://s3-alpha-sig.figma.com/img/8f0b/5f52/59515bfc8d2d4ff8928be097376153e9?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QR4mwVxTFm805tpecMwddcnU4AKuPpqdknWiXmfp0jMg3qHcfYSJwi6zrJP7BEhCZ0Kf0VCdj~VLjjB7E5pTubxEPNeFK2fxi0v1RU556fvsstu~XWHeGB~0ywN1EftQPhT02ELp3TwpuMbmsrYxvT3b3BI6z1VTvYauVWjfIVVEJED1txhpxslPEbV58AmOOwtRUYZ-pvKzaVCHKFkQrGc-AfPbtnmTV1XeZXGIfs~DakN35NgJiBHRsdIofdjLg6IfYKyPSe5yN-gnHGis3Nkp8vA4xTw-Q59zdKfBNPsNYAylMbfjHGtzohiQeBtpUgY6gP4x5DYDU0knUeNUSA__"
              type="✍️ Article"
              title="What if famous brands had regular fonts? Meet RegulaBrands!"
              text="I've worked in UX for the better part of a decade. F.."
              profile="https://s3-alpha-sig.figma.com/img/d809/8d9d/f42d73f4b2b7835b4c918c4edcf10f64?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TSPsB5O-zSZuaNQlIhHSOogsW7f~wOlHt-Ojs~Fj9S6E5jETKkNS98InsBFydjW-cNRNFmFfBKFLkzAMWv3tZXSnEHfJG5Y29d9rrlNFRmXrPNKywUQUCCbLA6hUF3zzP4yWEIMtPmt8vZeEIU1yUZ1vo2uOUWSGkmtMULsgodwxzsutqWr1QUva8-mTrMzDdUEzCXBV-pBbVzpzNJFSNZMhChMo79s4A6w3ISTOkwXMKX0yRnYsLFGgbCAR4T56jFQ3Ihg1oG4SPrYkjwr4zXTDZIsebiZBgO4jluSibLlLKc5F7ROa8KpsK4XUEacN58ctM9fGUP1DmPu-MHAELg__"
              author="Sarthak Kamra"
              views="1.4K"
            />
            <Post
              image="https://s3-alpha-sig.figma.com/img/250a/24fe/c8e32137d06a7bb3fd57b6dfb4e07bfe?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NQO4ebEAnSqnAwP04V8RPTL6c1TSzqwHKxqJAsyyF7rydXnr114tngZuAUZexA2R-TooiRabM6WEtx0Q7V~YT5VuWuF2QwZYGHO8V3Ugnn6Uv8O0t2-MadUixz7oHI9la7pp8fykQBnDO0DsJkduoeGmTGisb0MqBqK0ZrVrPtRIuLSJ-oB1w5ePINcqJj4vCK5VRAsvQUMmIfWTSCeoC1Mx~NN~CNBGi5zq4EnHnkN3rN0BoSLRNsA0dmdAVEmCzmGsnE-RA-6h4tDRgMy34nJn7YDVbgZt1JqoQQ4m~jqyyGieTVVRSTfN9UrzhybBiZB1LMvBxPe8fTeweSjy6g__"
              type="🔬 Education"
              title="Tax Benefits for Investment under National Pension Scheme launched by Government"
              text="I've worked in UX for the better part of a decade. F.."
              profile="https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XqBUPw-HJEpDbPMii7XvBjJjvwdLdKF8M5jLGfPEw58C1LPXpmXpjGn6OL~9eP~y7ShuBk1Cn2BzP7CbOApRAujT8mXgDiXfMTBk9E6Y~UZN7Ociodj0OLmpN1Fv7fnYri08chtWzdR8fEPZ9Y6uhT9XsSH198StHWcT5VezlxfYu95joNVPTUZzvhIFzUrn-A9y2tWCRWExuoyWsybu0Z-~iWINAbwEtf3mCSds3m4f5WFMc7TPPUMlExTFjBiIcyuELqGqwcBWogKg8IflWVrwPPT5X0cVMOItK0qbrIuLgffuxNEP43XgYffiKpANLU25G2~L48gysTPsd3UsWg__"
              author="Sarah West"
              views="1.4K"
            />
            <Offer />
            <Job />
          </div>
          <div
            className="d-flex col-md-5 d-none d-md-flex pt-4"
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Groups isJoined={isJoined}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
