import Info from '../assets/info.svg';
import ThumbsUp from '../assets/thumbs_up.svg';

const Groups = () => {
    const groups = [
        { name: "Leisure", image: "https://s3-alpha-sig.figma.com/img/bb0d/5f13/7ffa8afe7647578af2381ac9090c32e2?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YiapDqY0WvgYGEoj75YvlAKMJnslAPLz8IQot9kBHA5NQzjao9uXzVyBy77pyRdMeJUCcNDWYJNRxL0vbw92f8XV6wsY-1ftxRyVfWCvsV88ucVw6ISaGdJESE16OQex~j~DPOAt4-D28~DTZtujZWzmtyBqGDOuNZsSRElsH1GmiKHYRO8UwMZIr5qIi7TjoPtxdaJmI8DX80od9zJcnAMoDj8xqaaR1-l2aCwIkeerQaJuDg3xEVL51z8CVW0mk5g9bdxIHw17uQRAHoY5cHgVwV9xVzESkoK3XCTCGRS4b~Xhz5d7OQ1qmvKc9G3qrWmhm7RLvMZT-FaYhQb0NA__" },
        { name: "Activism", image: "https://s3-alpha-sig.figma.com/img/bcef/452c/f2f96211f57819f3ef6b3922e0cd72cf?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cLQlFyK1hsQQH3oqC2M9l0Cxb-E4-SyA09yohWc0Ax8lbm2El3W9ZheZ68AzZ0UxUoko3W4YqLLAqLt6OgKJC8ZndRq2BDW~QN1N3HR7MheqWaFOJuWwwIqfoWBxrj~jD90QEwnlhtEcwNLMPtGqq9nCzHkBUwk0QtksNnosVnkRJ7csOQzxVRcqP2IN6CKP6M-vYgJvPzMVW9pdbfxI4nAKvVk1gw755FE5XWSHG3E9PZK1mASKv9-SgNkP69qNRWuM-havJrN0JV9JOkd1halD~5p7g87HxR8V41AG6yO7woj4CL982Pga9oNliRaYDzSabVR8s-sRLYbrv2rKgA__" },
        { name: "MBA", image: "https://s3-alpha-sig.figma.com/img/8f0b/0ff9/829dac10d09fc377df6ec78c4098bc9a?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pmaPBIrMMeaafZo2ezsYaPbcYfa4PHJp4wrqZZ8OPJHM1~DReLwV1LP1TDeDLY2U4jBz44e0qVAeiigpadHnc8Eq5XUcAk~Mqwlg0j3eGDhUnb9cb-8pMgYiyfYX1LSKHW5-fxQRCd6QTCXhjyl9AgHsoLRZs1DfOHDR2TAcfaNKrjnAEq4Gnl~SxFmD9DssU7NoH5dXhoa8L6RqVIqp8E~3aRjGKOLQiwU~YyImkg~aPUNWHXqku1YDeFe4IhDM8KXUL9t~apLXUMVj~7SmcrFiwgM-415AcQhPMdNEE-al6Jki6583Rir65RDDHJy00N4aP1YQnf02gHlE8~8vQQ__" },
        { name: "Philosophy", image: "https://s3-alpha-sig.figma.com/img/0533/15a9/cf46af0ebdaae2ffbbb5718726788a19?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Laq~iO4qMLS41pgX5g~GO6WZbH54wXncppSXyMzlq5NpU0tFHgwwku6EwEun7wS4O19j-zeQw~6Q7H-KBb0J3p0Je4NW8kBwrGt2Cr0OgEsOJ0bFmWHDKegLW~IdSRkSjJtH~wjZ1eo3-q4lD315dME9UqWk7dK4f-UjkWJ8l66uYUWEkrLMat~sxqz0B18QR-MtGrp~uMsQ75wOtiHutgd~stFQn1~bMwMWVYqYiGZ0PN6n-CrFvURIn184t5~eNEObfGFD7NfjFxRxsAnZ000t7hog5CEbmNxegqQF0ijgn8ImQHZY-CKQ3jrMnOymLhbOda17SQifb3s70ReDUA__" },
      ];
  return (
    <>
      <div className="p-3 rounded bg-white" style={{ width: "300px" }}>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <i className="bi bi-geo-alt me-2"></i>
          <input
            type="text"
            className="form-control me-2"
            placeholder="Enter your location"
          />
          <button className="btn-close"></button>
        </div>
        <p className="d-flex text-muted small mb-4">
            <img className="d-flex px-1 align-items-start" src={Info} alt="info" />
            <div>
                Your location will help us serve better and extend a personalised
                experience.
            </div>
        </p>

        {/* Recommended Groups Section */}
        <h6 className="mb-3">
          <img style={{paddingRight: "6px"}} src={ThumbsUp} alt="thumbsup" />
          Recommended Groups
        </h6>
        {groups.map((group, index) => (
          <div
            key={index}
            className="d-flex align-items-center justify-content-between mb-3"
          >
            <div className="d-flex align-items-center">
              <img
                src={group.image}
                alt={group.name}
                className="rounded-circle me-2"
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                }}
              />
              <span>{group.name}</span>
            </div>
            <button className="btn rounded-pill px-3" style={{backgroundColor: "#EDEEF0", fontSize: "12px"}}>Follow</button>
          </div>
        ))}

        <a href="#" className="text-primary small">
          See More...
        </a>
      </div>
    </>
  );
};

export default Groups;
