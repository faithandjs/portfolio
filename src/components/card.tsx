import React from "react";
import play from "./images/play.png";
import githubIcon from "./images/github.png";

function Card(props:any) {
  const { id, name, img, text, github, live, target, tags } = props.props;
  console.log(tags);
  const siteAlt = name + " website";
  const classes = "img" + id;
  return (
    <div className="card">
      {/* <div className="img-box">
        <img src={img[0][0]} alt={siteAlt} className={classes} />
      </div>
      <div className="content">
        <div className="name">{name}</div>
        <div className="text">{text}</div>

        <div className="lower">
          <ul>
            {tags.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <div className="icons">
            <button type="button" className="live">
              <a href={live} target={target}>
                <img src={play} alt="live site icon" />
              </a>
            </button>
            <button type="button" className="github">
              <a href={github} target={target}>
                <img src={githubIcon} alt="github icon" />
              </a>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Card;
